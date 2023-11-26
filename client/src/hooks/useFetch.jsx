import { useState, useEffect } from "react";

/**
 * Hook to fetch data from an API
 * @param {*} url - API endpoint
 * @param {*} options - fetch options
 * @returns {object} - data, isLoading, error
 */
export default function useFetch(url, options) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options);
        const json = await res.json();
        setData(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, []);

  return { data, isLoading, error };
}
