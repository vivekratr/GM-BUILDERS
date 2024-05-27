import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Graph = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          'https://gateway-testnet-arbitrum.network.thegraph.com/api/291694aaac143f1f1504f18ac8709ea6/subgraphs/id/F1yJppu8nxfXM9TrTKqmofWVWBKL2ktnqWz2KzimjhaZ',
          {
            query: `
              {
                entities {
                  id
                  attribute1
                  attribute2
                  # Add other attributes you need
                }
              }
            `
          }
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data from Subgraph</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Graph;
