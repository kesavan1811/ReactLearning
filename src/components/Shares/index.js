import React, { useEffect, useState } from "react";

function Shares() {
  const [exchange, setExchange] = useState("");
  const [regMarPer, setRegMarPer] = useState("");
  const [shortName, setShortName] = useState("");
  const [longName, setLongName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [regMarOpen, setRegMarOpen] = useState("");
  const [regMarHigh, setRegMarHign] = useState("");
  const [regMarLow, setRegMarLow] = useState("");
  const [regMarPrice, setRegMarPrice] = useState("");
  const [regMarVol, setRegMarVol] = useState("");

  useEffect(() => {
    var axios = require("axios").default;

    var options = {
      method: "GET",
      url: "https://yh-finance.p.rapidapi.com/stock/v2/get-statistics",
      params: {
        symbol: "MSB.AX",
        region: "AU"
      },
      headers: {
        "x-rapidapi-host": "yh-finance.p.rapidapi.com",
        "x-rapidapi-key": "ca9666402emshf5f8bf442891e8cp190065jsndd242f9f2bbb"
      }
    };

    axios
      .request(options)
      .then(function(response) {
        console.log(response.data);
        setExchange(response.data.price.exchange);
        setRegMarPer(response.data.price.regularMarketChangePercent.fmt);
        setShortName(response.data.price.shortName);
        setLongName(response.data.price.longName);
        setSymbol(response.data.price.symbol);
        setRegMarPrice(response.data.price.regularMarketPrice.fmt);
        setRegMarVol(response.data.price.regularMarketVolume.fmt);
        setRegMarOpen(response.data.price.regularMarketOpen.fmt);
        setRegMarHign(response.data.price.regularMarketDayHigh.fmt);
        setRegMarLow(response.data.price.regularMarketDayLow.fmt);
      })
      .catch(function(error) {
        console.error(error);
      });
  }, []);

  const bgColor = regMarPer.includes("-") ? "red" : "#7CFC00";

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}
    >
      <div
        style={{
          backgroundColor: bgColor,
          width: "300px",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "20px"
        }}
      >
        {exchange}
        <br />
        {symbol}
        <br />
        {longName}
        <br />
        {shortName}
        <br />
        {regMarPer}
        <br />
        <br />
        Last Price :${regMarPrice}
        <br />
        Open: ${regMarOpen}
        <br />
        High: ${regMarHigh}
        <br />
        Low: ${regMarLow}
        <br />
        Volume: ${regMarVol}
      </div>
    </div>
  );
}

export default Shares;
