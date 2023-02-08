import { useState, useEffect } from 'react';

export const useBosses = () => {
  const [bosses, setBosses] = useState([]);

  useEffect(() => {
    const fetchBosses = async () => {
      try {
        const response = await fetch('https://isaac.jamesmcfadden.co.uk/api/v1/boss');
        const data = await response.json();
        setBosses(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBosses();
  }, []);

  return bosses;
};
