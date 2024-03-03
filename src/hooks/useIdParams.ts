import { useParams } from "react-router-dom";

export function useIdParams(): { id: number } {
  const { id } = useParams<{ id: string }>();
  return {
    ...useParams(),
    id: parseInt(id!),
  };
};
