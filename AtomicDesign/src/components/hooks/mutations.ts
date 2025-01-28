import { useMutation, useQueryClient, UseMutationResult } from "@tanstack/react-query";
import { likeItem, createItem } from "api/itemsApi";

type QueryKey = 'items';

export function useLikeItem() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: likeItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] as [QueryKey] });
    },
    onError: (error: Error) => {
      console.error("Error liking item:", error.message); 
    },
  }) as UseMutationResult<any, Error, number, unknown>;

  return mutation;
}

export function useCreateItem() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['items'] as [QueryKey] });
    },
    onError: (error: Error) => {
      console.error("Error creating item:", error.message);
    },
  }) as UseMutationResult<any, Error, { title: string; body: string }, unknown>;

  return mutation;
}
