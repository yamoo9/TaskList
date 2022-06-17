import React from 'react';

export const useFetch = (endpoints) => {
  // loading, error, data
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [data, setData] = React.useState(null);

  // side effects → network → fetch data
  React.useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(endpoints);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoints]);

  return {
    loading,
    error,
    data,
    setData,
  };
};
