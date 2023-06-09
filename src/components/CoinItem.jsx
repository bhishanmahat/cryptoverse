import React, { useEffect, useState } from "react";

import "./Coins.css";

const CoinItem = (props) => {
  let percentageChange = props.coin.price_change_percentage_24h;

  console.log(percentageChange);
  return (
    <div className="coin-row">
      <p>{props.coin.market_cap_rank}</p>
      <div className="img-symbol">
        <img src={props.coin.image} alt="" />
        <p>{props.coin.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coin.current_price.toLocaleString()}</p>
      <p className={percentageChange > 0 ? "green" : "red"}>
        {props.coin.price_change_percentage_24h.toFixed(2)}%
      </p>
      <p className="hide-mobile">${props.coin.total_volume.toLocaleString()}</p>
      <p className="hide-mobile">${props.coin.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
