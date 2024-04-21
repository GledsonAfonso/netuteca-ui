type GetArrayInChunksParams<T> = {
  array: T[];
  chunkSize?: number;
};

export const getArrayInChunks = <T> ({
  array,
  chunkSize = 10
}: GetArrayInChunksParams<T>): Map<number, T[]> | null => {
  if (!array || array.length === 0) {
    return null;
  }

  const chunks = new Map<number, T[]>();
  
  for (let index = 0; index < array.length; index = index + chunkSize) {
    const chunkIndex = index / chunkSize;
    const indexEnd = index + chunkSize;
    chunks.set(chunkIndex, array.slice(index, indexEnd));
  }

  return chunks;
};