import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch("https://api.thecatapi.com/v1/images/search?limit=300");
  const json = await result.json();
  return json;
}

export function useCats() {
  const { isLoading, isError, data } = useQuery(["cats"], fetchData);

  return {
    isLoading,
    isError,
    data,
  };
}
