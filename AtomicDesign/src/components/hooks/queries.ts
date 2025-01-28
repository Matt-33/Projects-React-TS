import { useQuery } from "@tanstack/react-query";
import { fetchItems } from "../../api/itemsApi";

export function useItems() {
  return useQuery({
    queryKey: ["items"],
    queryFn: fetchItems,
  });
}
