import React, { useState } from "react";
import Web3 from "web3";
import "../main/main.css";
import "./presale.css";
import { useEtherBalance } from "@web3-react/core";
import contractABI from "./ABI.json";

function Presale() {

    const [amount, setAmount] = useState("");
    const [connected, setConnected] = useState(false);

  const handleMaxClick = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const value = web3.utils.fromWei(balance, "ether");
    setAmount(value);
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
  };
  const handleUnlockWallet = async () => {
    const web3 = new Web3(window.ethereum);
    const contractAddress = "0x00A65fDfc0d40DE8632d1ec2673BC7b06C80Ef0E";
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const sender = (await web3.eth.getAccounts())[0];
    const value = web3.utils.toWei(amount, "ether");

    try {
      const result = await contract.methods.buyPresale().send({
        from: sender,
        value: value,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
      <div className="banner-presale"></div>

      <div className="reste">
        <div className="reste-title">
          <h3>Presale</h3>
        </div>
        <div className="wrap-load">
          <div className="loader">
            <div className="loader-progress"></div>
          </div>
        </div>

        <div className="wrap-presale">
          <div className="mini-card">
            <h3>CURRENT: 0$</h3>
          </div>
          <div className="mini-card">
            <h3>GOAL: 20 000$</h3>
          </div>
        </div>
        <div className="wrap-presale">
          <div className="mini-card">
            <h3>Price: $0.02 </h3>
          </div>
          <div className="mini-card">
            <h3>MAX-BUY: 1 $ETH</h3>
          </div>
        </div>
        <div className="reste-title">
          <h3>How does it work ?</h3>
        </div>
        <div className="wrap-info">
          <div className="info-card">
            <div className="line-title">
              <h3>What is the utility of INK tokens?</h3>
            </div>
            <div className="line-title">
              <p>
                INK tokens are tradable against ETH, they will alow you to lock
                them in your Octopus Nodes. You will then earn rewards in INK
                tokens when the liquidity will be added
              </p>
            </div>
            <div className="line-title">
              <h3>What is the Price of INK tokens?</h3>
            </div>
            <div className="line-title2">
              <p>42 000 $INK = $0.02 (launch price)</p>
              <p>
                It is important to understand that it will be very hard to in at
                the launch price. Only a few very fast people will manage to do
                this.
              </p>
            </div>
            <div className="line-title">
              <h3>How to buy?</h3>
            </div>
            <div className="line-title">
              <p>First enter your amountn ETH and click on "Buy $INK"</p>
              <p>The maximum amount is 1 $ETH </p>
            </div>
            <div className="input-wrap">
              <div className="inputs">
                <input type={'number'} onChange={handleAmountChange} value={amount} placeholder="0.00"></input>

                <div className="max" onClick={handleMaxClick}>
                  Max
                </div>
              </div>
              <button  onClick={handleUnlockWallet}>Buy $INK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presale;
