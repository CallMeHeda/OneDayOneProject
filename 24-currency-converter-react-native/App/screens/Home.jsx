import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { Layout, Text, IndexPath, SelectItem } from "@ui-kitten/components";
import { useFetch } from "../hooks/useFetch";
import InputNum from "../components/InputNum";
import SelectPicker from "../components/SelectPicker";

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(new IndexPath(42));
  const [selectedIndex2, setSelectedIndex2] = useState(new IndexPath(146));

  const {
    fetchCurrencies,
    newAmount,
    currencies,
    fetchConverter,
    amount,
    setAmount,
    from,
    to,
    setFrom,
    setTo,
  } = useFetch();

  const currenciesCodes = currencies.map((code) => code[0]);
  const data = currenciesCodes;

  useEffect(() => {
    fetchCurrencies();
  }, []);

  useEffect(() => {
    setFrom(data[selectedIndex.row]);
    setTo(data[selectedIndex2.row]);
  }, [selectedIndex, selectedIndex2]);

  useEffect(() => {
    fetchConverter(from, to, amount);
  }, [from, to, amount]);

  if (!currencies || currencies.length === 0) {
    return null;
  }

  const renderOption = (title, index) => (
    <SelectItem title={title} key={index} />
  );

  return (
    <Layout style={styles.container}>
      <Layout style={styles.container2}>
        <InputNum value={amount.toString()} onChangeText={setAmount} />
        <SelectPicker
          value={from}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          data={data}
          renderOption={renderOption}
        />

        <SelectPicker
          value={to}
          selectedIndex={selectedIndex2}
          setSelectedIndex={setSelectedIndex2}
          data={data}
          renderOption={renderOption}
        />
      </Layout>
      <Text style={styles.currencyConverted}>{newAmount}</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    width: "100%",
    alignItems: "center",
  },
  container2: {
    flexDirection: "row",
    margin: 10,
  },
  currencyConverted: {
    fontSize: 80,
    marginTop: 20,
    color: "#cd3545",
  },
});
