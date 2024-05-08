import { removeBookByIdHandler } from "@server/books/api/remove-book-by-id.api";
import { NextApiRequest, NextApiResponse } from "next";

const handler = (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  switch (req.method) {
    case "DELETE":
      return removeBookByIdHandler(req, res);
    default:
      return res.status(404).end();
  }
}

export default handler;