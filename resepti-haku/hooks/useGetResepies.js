import { useEffect, useState } from "react";

export function useGetRecipes({ search }) {
  if (!search) {
    throw new Error("A search term is required.");
  }

  const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url + search);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [search, url]);

  return { isLoading, data };
}
