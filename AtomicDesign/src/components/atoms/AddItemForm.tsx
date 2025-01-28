import React, { useState } from "react";
import { useCreateItem } from "components/hooks/mutations";

const AddItemForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { mutate, isLoading, isError, error } = useCreateItem();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title && body) {
      mutate({ title, body });
      setTitle("");
      setBody("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        disabled={isLoading}
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Body"
        disabled={isLoading}
      />
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Adding..." : "Add Item"}
      </button>
      {isError && <p style={{ color: 'red' }}>Error: {error?.message}</p>}
    </form>
  );
};

export default AddItemForm;
