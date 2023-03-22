import React, { useState } from "react";

const UrlEncoderDecoder = () => {
  const [encodedInput, setEncodedInput] = useState("");
  const [decodedInput, setDecodedInput] = useState("");

  const handleEncodedInputChange = (e) => {
    setEncodedInput(e.target.value);
    try {
      setDecodedInput(decodeURIComponent(e.target.value));
    } catch (err) {
      setDecodedInput("");
    }
  };

  const handleDecodedInputChange = (e) => {
    setDecodedInput(e.target.value);
    setEncodedInput(encodeURIComponent(e.target.value));
  };

  return (
    <div className="container">
      <h1>URL エンコーダー &amp; デコーダー</h1>
      <div className="row">
        <label>エンコード:</label>
        <textarea
          rows="12"
          cols="50"
          placeholder="%EF%BC%88%E4%BE%8B%EF%BC%89%E9%81%A9%E5%BD%93%E3%81%AA%E6%96%87%E5%AD%97%E5%88%97"
          value={encodedInput}
          onChange={handleEncodedInputChange}
        ></textarea>
        {encodedInput && !decodedInput && (
          <p className="error-message">無効なエンコード文字列です</p>
        )}
      </div>
      <div className="row">
        <label>デコード:</label>
        <textarea
          rows="12"
          cols="50"
          placeholder="（例）適当な文字列"
          value={decodedInput}
          onChange={handleDecodedInputChange}
        ></textarea>
      </div>
    </div>
  );
};

export default UrlEncoderDecoder;
