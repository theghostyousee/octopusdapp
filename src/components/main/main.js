import React from "react";
import "./main.css";
import "../header/header.css";

import {
  faFileAlt,
  faHandshake,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPercentage, faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';


function Main() {

    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/presale');
    };
  return (
    <div className="main">
      <div className="welcome">
        <h1>WELCOME ON OCTOPUS FI 🐙</h1>
        <p>Octops Fi is a fast and innovative DaaS on the Arbitrum Network</p>
        <p>Earn passive income up to 2,044% APR.</p>
        <p>
          Create your Octopus Nodes and get lifetime rewards from the $INK that
          they produce.
        </p>
      </div>
      <div className="banner">
        <div className="btn-special" onClick={handleClick}>
            <Link to="/presale">ENTER PRESALE</Link>
          <FontAwesomeIcon icon={faBuilding} />
        </div>
        <div className="btn">
          <a href="#">WHITEPAPER</a>
          <FontAwesomeIcon icon={faFileAlt} />
        </div>
        <div className="btn-special2">
          <h5>MARKETPLACE</h5>
          <FontAwesomeIcon icon={faHandshake} />
        </div>
      </div>
      <div className="continuity">
        <div className="titles">
          <h1>EARN SUPER YIELD UP TO 2,044%</h1>
        </div>
        <div className="card-wrapper">
            <div className="card-bro">
                <div className="card">
                    <FontAwesomeIcon icon={faPercentage} className="bg-white f-s-30 icon-bg fa-2x customicon" />
                    <h3>UP TO 4% $INK PER DAY</h3>
                </div>
                <div className="paragraph">
                    <p>Create your Octopus Nodes starting with as little as 42,000 
                        $INK to earn lifetime high-yield $INK token rewards currently 
                        estimated at 4% INK per day.</p>
                </div>

            </div>

            <div className="card-bro">
                <div className="card">

                    <FontAwesomeIcon icon={faRocket} className="bg-white f-s-30 icon-bg fa-2x customicon" />
                    <h3>NO AUTOMATED SELLING PRESSURE</h3>

                </div>

                <div className="paragraph">
                    <p>Unlike other DaaS which sells fees automatically every minute to send to their 
                        treasury effectively adding enormous sell pressure for the bulls, we don't. Once in a while, 
                        our contracts add liquidity and we borrow it only when needed and possible.
                         This results in lower gas fees as well</p>
                </div>

            </div>

            <div className="footer">
                <div className="column-1">
                    <div className="title-footer"><h3>Octopus Fi</h3></div>
                
                    <p>The information provided on this website does not constitute investment advice, 
                        financial advice, trading advice, or any other sort of advice, a
                        nd you should not treat any of the website's content as such. The Octopus team
                         provides the website as a service to the public, and is not responsible for, and ex
                        pressly disclaims all liability for, damages of any kind arising out of use, reference to, o
                        r reliance on any information contained within this website. While the information contained w
                        ithin this website is periodically updated, no guarantee
                         is given that the information provided on this website is correct, complete, and up-to-date</p>
                </div>

                <div className="column-2">
                    <div className="title-footer"><h3>IMPORTANT LINKS</h3></div>
                    
                    <div className="listas">
                    
                        <a href="#">What is Octopus Finance</a>
                        <a href="#">Get $INK</a>
                        <a href="#">Trading Chart</a>
                        <a href="#">Liquidity Lock</a>
                        <a href="#">Whitepaper</a>
                    </div>
                </div>

                <div className="column-2">
                    
                    <div className="title-footer"><h3>COMMUNITY</h3></div>
                    <div className="listas">
                        <a href="#">Twitter</a>
                        <a href="#">Discord</a>
                        <a href="#">Marketplace</a>
                        <a href="#">Smart Contracts</a>
                        <a href="#">Telegram (Soon)</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
