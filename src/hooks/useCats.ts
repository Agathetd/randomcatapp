import { useQuery } from "react-query";

export function useCats(): string {
  const { data } = useQuery("cats", async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    return data[0].url;
  });

  return data || "";
}