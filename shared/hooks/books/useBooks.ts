import { environment } from "@shared/configuration/environment";
import type { Book } from "@shared/types/books";
import { getArrayInChunks } from "@shared/utils/array";
import httpClient from "@shared/utils/http/httpClient";
import { HttpError } from "@shared/utils/http/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

type UseBooksQueryReturn = Map<number, Book[]> | null;

export const useBooks = (): UseQueryResult<UseBooksQueryReturn, Error> => {
  return useQuery<UseBooksQueryReturn>({
    queryKey: ["books"],
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
