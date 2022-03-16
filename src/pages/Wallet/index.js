import React from "react";
import near from "../../assets/near-logo.png";
import { WalletContainer } from "./style";

const Wallet = () => {
  return (
    <WalletContainer>
      <div className="content">
        <img src={near} alt="Near Logo" />
        <h4>Add Near</h4>
        <p>Connect To Your Near Wallet</p>

        <button>Connect</button>
      </div>
    </WalletContainer>
  );
};

export default Wallet;
