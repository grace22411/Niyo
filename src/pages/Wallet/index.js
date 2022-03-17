
  import React, {useState} from "react";

  import {ethers} from 'ethers'
import near from "../../assets/near-logo.png";
import meta from "../../assets/meta.png";
import { WalletContainer } from "./style";

const Wallet = () => {


  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect');

	const connectWalletHandler = () => {
		if (window.ethereum && window.ethereum.isMetaMask) {
			console.log('MetaMask Here!');

			window.ethereum.request({ method: 'eth_requestAccounts'})
			.then(result => {
				accountChangedHandler(result[0]);
			  setConnButtonText("Wallet Connected ");
      //setConnButtonText(`${<p>{defaultAccount}</p>}`)
				getAccountBalance(result[0]);
			})
			.catch(error => {
				setErrorMessage(error.message);
			
			});

		} else {
			console.log('Need to install MetaMask');
			setErrorMessage('Please install MetaMask browser extension to interact');
		}
	}

	// update account, will cause component re-render
	const accountChangedHandler = (newAccount) => {
		setDefaultAccount(newAccount);
		getAccountBalance(newAccount.toString());
	}

	const getAccountBalance = (account) => {
		window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
		.then(balance => {
			setUserBalance(ethers.utils.formatEther(balance));
		})
		.catch(error => {
			setErrorMessage(error.message);
		});
	};

	const chainChangedHandler = () => {
		// reload the page to avoid any errors with chain change mid use of application
		window.location.reload();
	}


	// listen for account changes
	window.ethereum.on('accountsChanged', accountChangedHandler);

	window.ethereum.on('chainChanged', chainChangedHandler);
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
        <button onClick={connectWalletHandler}>{connButtonText}</button>
        <p>{defaultAccount}</p>
      </div>
    </WalletContainer>
  );
};

export default Wallet;
