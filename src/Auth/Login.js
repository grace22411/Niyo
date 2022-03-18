import React, {useState, useEffect} from "react";
import { LoginContainer } from "./style";

import {ethers} from 'ethers'

import logo from "../assets/logo.png";
import meta from "../assets/meta.png"
import near from "../assets/near-logo.png";
import { Link } from "react-router-dom";

const Login = () => {

  const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
	const [connButtonText, setConnButtonText] = useState('Connect Metamask');

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
  useEffect(() => {
    window.ethereum.on('accountsChanged', accountChangedHandler);

    window.ethereum.on('chainChanged', chainChangedHandler);
  }, [])

  return (
    <LoginContainer>
      <div className="login-image">
        <img src={logo} alt="Niyo Logo" />
      </div>

      <div className="login-form">
        <h1>Login to Niyo</h1>
        <p>Welcome Back!</p>

        <div className="connect-near connect">
          <button>Connect Near Wallet <img src={near} alt="" /></button>
        </div>
        <div className="connect-meta connect">
          <button onClick={connectWalletHandler}>{connButtonText} <img src={meta} alt="" /></button>
        </div>
        {errorMessage}
        <div className="connect-meta connect">
          <h2>OR</h2>
        </div>
        <div className="connect-email">
          <form>
            <input type="email" placeholder="Enter your email" />
            <Link to="/dashboard"><button>Login</button></Link>
          </form>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
