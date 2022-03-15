import { color } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";

function CurrencyConverter() {
  const [uSDAUD, setUSDAUD] = useState("");
  const [rate, setRate] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  //   useEffect(() => {
  //     axios({
  //       method: "GET",
  //       url:
  //         "https://free.currconv.com/api/v7/convert?q=USD_AUD&compact=ultra&apiKey=b4f86faf4baffdf46e77"
  //     })
  //       .then(res => {
  //         console.log(res);
  //         setUSDAUD(res.data.USD_AUD);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   }, []);

  const getRate = (first, second) => {
    axios({
      method: "GET",
      url: `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=b4f86faf4baffdf46e77`
    })
      .then(res => {
        console.log(res);
        setRate(res.data[`${first}_${second}`]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <div style={{ marginLeft: "33%" }}>
        <div
          style={{
            height: "70px",
            width: "100%",
            backgroundColor: "#cdff63",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "25px",
            color: "blue"
          }}
        />
        1 {first} = {rate} {second}
        {second}
      </div>
      <br />
      <input
        type="text"
        value={first}
        onChange={e => setFirst(e.target.value)}
      />
      <input
        type="text"
        value={second}
        onChange={e => setSecond(e.target.value)}
      />
      <button onClick={() => getRate(first, second)}>Convert</button>
    </div>
  );
}

export default CurrencyConverter;
