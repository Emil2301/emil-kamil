import { useState, useEffect } from 'react';

type UseFetchData<T> = {
  data: T | null | undefined;
  loading: boolean;
  error: string | null;
};

export const useFetchData = <T>(
  url: string,
  token: string,
): UseFetchData<T> => {
  const [data, setData] = useState<T | null | undefined>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
        setLoading(false);
      }
    };

    fetchData();
  }, [url, token]);

  return { data, loading, error };
};
