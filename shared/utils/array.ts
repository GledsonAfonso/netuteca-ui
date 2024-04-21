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
  
  for (let index = 0; index <= chunkSize; index++) {
    const indexStart = index * chunkSize;
    const indexEnd = indexStart + chunkSize;
    chunks.set(index, array.slice(indexStart, indexEnd));
  }

  return chunks;
};