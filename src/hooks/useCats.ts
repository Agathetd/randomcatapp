import { useQuery } from "react-query";

async function fetchData() {
  const result = await fetch("https://api.thecatapi.com/v1/images/search?limit=1");
  const json = await result.json();
  return json;
}

export function useCats() {
  const url = useQuery(["cats"], fetchData);

  return {
    url
  };
}
