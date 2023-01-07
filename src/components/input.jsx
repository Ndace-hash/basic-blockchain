import "./input.css";
import sha1 from "js-sha1";
import { useState } from "react";

const InputData = ({ sha1hash }) => {
  const [plainText, setPlainText] = useState("");
  const [cypherText, setCypherText] = useState("");

  const hash = (text) => {
    const hashString = sha1(text);
    setCypherText(hashString);
  };
  const handleChange = (e) => {
    setPlainText(e.target.value);
    hash(plainText);
    if (plainText == "") setCypherText("");
  };
  const confirmBlock = () => {
    sha1hash({
      plainText,
      cypherText,
    });
  };
  return (
    <div className="input-wrapper">
      <div className="form-group">
        <label>PlainText</label>
        <input type="text" placeholder="text here" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>SHA-1</label>
        <input type="text" placeholder="SHA-1" defaultValue={cypherText} />
      </div>

      <button onClick={confirmBlock}>Confirm</button>
    </div>
  );
};

export default InputData;
