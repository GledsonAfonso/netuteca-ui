import httpClient from "@shared/utils/http/httpClient";
import { BooksQuery } from "@shared/utils/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type DeleteBookPayload = {
  bookId: string;
};

export const useDeleteBook = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ bookId }: DeleteBookPayload) =>
      httpClient.delete(`/api/books/${bookId}`).then((res) => res.data),
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: [BooksQuery.AllBooks] }),
  });
};