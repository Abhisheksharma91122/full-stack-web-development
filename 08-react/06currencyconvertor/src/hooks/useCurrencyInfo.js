import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  console.log(currency)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
        );
        const responseData = await response.json();
        setData(responseData[currency]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
