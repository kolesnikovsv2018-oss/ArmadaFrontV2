export function useApi() {
  async function fetchData(endpoint: string): Promise<any | null> {
    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw new Error(`Error fetching data from ${endpoint}: ${response.statusText}`);
      }
      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return {
    fetchData,
  };
}