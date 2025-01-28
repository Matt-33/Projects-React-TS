import React, {useState} from "react";
import { useItems } from "components/hooks/queries";
import Skeleton from "react-loading-skeleton";
import ItemCard from "../molecules/ItemCard";
import { useCreateItem } from "components/hooks/mutations";


const HomePage: React.FC = () => {
  const { data: items, isLoading, isError, error } = useItems();
  const { mutate: createItem, isLoading: isCreating, isError: isCreateError, error: createError } = useCreateItem();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && body) {
      createItem({ title, body });
      setTitle(""); 
      setBody("");
    }
  };

  if (isLoading) {
    return (
      <div>
        <Skeleton count={5} height={30} />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {error?.message}</div>;
  }

  return (
    <div>
      {/* Formulaire d'ajout d'un item */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          disabled={isCreating}
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          disabled={isCreating}
        />
        <button type="submit" disabled={isCreating}>
          {isCreating ? "Adding..." : "Add Item"}
        </button>
        {isCreateError && <p>Error: {createError?.message}</p>}
      </form>

      {/* Liste des items */}
      {items?.map((item: any) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default HomePage;