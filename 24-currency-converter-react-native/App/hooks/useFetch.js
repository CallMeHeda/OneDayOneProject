import axios from "axios";
import { API_KEY } from "@env";
import { useState } from "react";

export function useFetch() {
  const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/`;

  const [currencies, setCurrencies] = useState([]);
  const [newAmount, setNewAmount] = useState(0);
  const [amount, setAmount] = useState(5);
  const [from, setFrom] = useState("EUR");
  const [to, setTo] = useState("MAD");

  const fetchConverter = async (from, to, amount) => {
    const options = {
      method: "GET",
      url: `${url}pair/${from}/${to}/${amount}`,
    };

    try {
      const response = await axios.request(options);
      setNewAmount(response.data.conversion_result);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchCurrencies = async () => {
    const options = {
      method: "GET",
      url: `${url}codes`,
    };

    try {
      const response = await axios.request(options);
      setCurrencies(response.data.supported_codes);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    fetchConverter,
    fetchCurrencies,
    from,
    setFrom,
    to,
    setTo,
    amount,
    setAmount,
    newAmount,
    currencies,
  };
}
