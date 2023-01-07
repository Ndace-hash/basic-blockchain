import { useState } from "react";
import "./App.css";
import InputData from "./components/input";
import OutputData from "./components/output";

function App() {
  const [data, setData] = useState({
    plainText: "",
    cypherText: "",
  });
  const [dataChain, setDataChain] = useState([]);
  const sha1hash = (value) => {
    setData({
      plainText: value.plainText,
      cypherText: value.cypherText,
    });

    setDataChain([data, ...dataChain]);
  };

  return (
    <div className="App">
      <InputData sha1hash={sha1hash} />
      {dataChain.map((data,index) => (
        <OutputData data={data} key={index}/>
      ))}
    </div>
  );
}

export default App;
