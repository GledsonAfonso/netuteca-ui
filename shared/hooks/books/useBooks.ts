import { environment } from "@/shared/configuration/environment";
import type { Book } from "@/shared/types/books";
import httpClient from "@/shared/utils/http/httpClient";
import { HttpError } from "@/shared/utils/http/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

export const useBooks = (): UseQueryResult<Book[] | null, Error> => {
  return useQuery<Book[] | null>({
    queryKey: ["books"],
    queryFn: async () => {
      try {
        const response = await httpClient.get<Book[]>(`${environment.netutecaCoreUrl}/api/books`);
        return response.data;
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
