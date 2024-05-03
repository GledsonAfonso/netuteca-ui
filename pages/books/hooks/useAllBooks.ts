import { environment } from "@shared/configuration/environment";
import type { Book } from "@server/books/domain/types";
import { getArrayInChunks } from "@shared/utils/array";
import httpClient from "@shared/utils/http/httpClient";
import { HttpError } from "@shared/utils/http/types";
import { BooksQuery } from "@shared/utils/queryKeys";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

type UseAllBooksQueryReturn = Map<number, Book[]> | null;

export const useAllBooks = (): UseQueryResult<UseAllBooksQueryReturn, Error> => {
  return useQuery<UseAllBooksQueryReturn>({
    queryKey: [BooksQuery.AllBooks],
    queryFn: async () => {
      try {
        const response = await httpClient.get<Book[]>(`${environment.netutetaApiUrl}/api/books`);
        return getArrayInChunks({ array: response.data });
      } catch (error) {
        if (error instanceof HttpError) {
          if (error.details.response?.status === 404) {
            return null;
          }
        }

        throw error;
      }
    },
    refetchOnWindowFocus: true,
  });
};
