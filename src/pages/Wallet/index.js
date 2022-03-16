import React from "react";
import near from "../../assets/near-logo.png";
import meta from "../../assets/meta.png";
import { WalletContainer } from "./style";

const Wallet = () => {
  return (
    <WalletContainer>
      <div className="connect">
        <img src={near} alt="Near Logo" />
        <h4>Connect to Near</h4>
        <button>Connect</button>
      </div>

      <div className="connect">
        <img src={meta} alt="Near Logo" />
        <h4>Connect to MetaMask</h4>
        <button>Connect</button>
      </div>
    </WalletContainer>
  );
};

export default Wallet;
