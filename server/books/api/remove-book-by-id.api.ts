import { environment } from "@shared/configuration/environment";
import httpClient from "@shared/utils/http/httpClient";
import { NextApiRequest, NextApiResponse } from "next";

export const removeBookByIdHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const id = req.query.bookId;
  await httpClient.delete(`${environment.netutetaApiUrl}/api/books/${id}`);
  return res.status(204).end();
};