import { NextApiRequest, NextApiResponse } from "next";

export const removeBookByIdHandler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const id = req.query.id;
  return res.status(204).json({ id });
};