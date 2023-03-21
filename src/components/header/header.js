import React, { useState } from 'react';
import './header.css';
import Twitter from '../media/twitter.svg';
import discord from '../media/discord.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import Web3 from 'web3';

function Header() {
  const [userAddress, setUserAddress] = useState(null);
  const [buttonText, setButtonText] = useState('Connect Wallet');

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
  
        // Get the user's accounts
        const accounts = await web3.eth.getAccounts();
  
        // Check if the user is on the Arbitrum chain
        const chainId = await web3.eth.getChainId();
        if (chainId !== 42161) {
          setButtonText('Wrong Network');
          return;
        }
  
        // Update state with the user's address
        setUserAddress(accounts[0]);
        setButtonText(shortAddress(accounts[0]));
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('MetaMask is not installed!');
    }
  };
  

  const shortAddress = (address) => {
    return address.slice(0, 6) + '...' + address.slice(-5);
  };

  return (
    <div className='header'>
      <button>Buy $INK</button>
      <button onClick={connectWallet}>{userAddress ? shortAddress(userAddress) : buttonText}</button>
      <FontAwesomeIcon
        icon={faTwitter}
        style={{ fontSize: '1.3rem' }}
        color='#FFFFFF'
        className='logo-gradient'
      />
      <FontAwesomeIcon
        icon={faDiscord}
        style={{ fontSize: '1.3rem' }}
        className='logo-gradient'
        color='#FFFFFF'
      />
    </div>
  );
}

export default Header;
