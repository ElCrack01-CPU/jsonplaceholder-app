import { useState, useEffect } from 'react';

const useFetch = (fetchFunction, page = 1, limit = 5) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(page);

  useEffect(() => {
    fetchFunction(currentPage, limit)
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fetchFunction, currentPage, limit]);

  return { data, loading, error, currentPage, setCurrentPage };
};


export default useFetch;