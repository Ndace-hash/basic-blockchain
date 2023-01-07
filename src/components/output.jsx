import "./input.css";

const OutputData = ({ data }) => {
  return (
    <div className="input-wrapper">
      <div className="form-group">
        <label>PlainText</label>
        <input type="text" disabled defaultValue={data.plainText} />
      </div>
      <div className="form-group">
        <label>SHA-1</label>
        <input type="text" defaultValue={data.cypherText} disabled />
      </div>
    </div>
  );
};

export default OutputData;
