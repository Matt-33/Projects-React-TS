import axios from "axios";

export const fetchItems = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5");
  return response.data;
};

export const likeItem = async (id: number) => {
    const response = await axios.patch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      liked: true,
    });
    return response.data;
};

export const createItem = async (newItem: { title: string; body: string }) => {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newItem);
    return response.data;
};
  