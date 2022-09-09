import { useNavigate } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import epicLogo from "../../img/epicLogo.png";
import monke from "../../img/monke.png";
import lenguageLogo from "../../img/lenguageLogo.png";
import discordLogo from "../../img/discordLogo.png";
import twitterLogo from "../../img/twitterLogo.png";
import pathLogo from "../../img/PathLogo.png";

import likeLogo from "../../img/likeLogo.png";
import commentLogo from "../../img/commentLogo.png";
import shareLogo from "../../img/sharelogo.png";
import bookmarkLogo from "../../img/bookmarkLogo.png";

import searchLogo from "../../img/searchLogo.png";

import StyledButton, { BuyButton, SimpleButton } from "../button/Button";

const MainNavigation = () => {
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };

  return (
    <header className={classes.header}>
      <nav>
        <section className={classes.section1}>
          <div>
            <ul className={classes.destination}>
              <li onClick={redirectHome}>
                <img src={epicLogo} className={classes.epicLogo} alt="logo" />
              </li>
              <li>
                <StyledButton>About</StyledButton>
              </li>
              <li>
                <StyledButton>NFTs</StyledButton>
              </li>
              <li>
                <StyledButton>Rewards</StyledButton>
              </li>
              <li>
                <StyledButton>Mint</StyledButton>
              </li>
            </ul>
          </div>
          <div className={classes.close}>
            <SimpleButton>Close</SimpleButton>
          </div>
        </section>
        <section className={classes.section2}>
          <img src={monke} alt="monke" />
          <img src={monke} alt="monke" />
          <img src={monke} alt="monke" />
          <img src={monke} alt="monke" />
          <img src={monke} alt="monke" />
          <img src={monke} alt="monke" />
          <img src={monke} alt="monke" />
          <img src={monke} alt="monke" />
          <img src={monke} alt="monke" />
          <img src={monke} alt="monke" />
        </section>
        <section className={classes.extra}>
          <div>
            <img src={likeLogo} alt="likeLogo" />
            {"20k"}
          </div>
          <div>
            <img src={commentLogo} alt="commentLogo" />
            {"10k"}
          </div>
          <div>
            {" "}
            <img src={shareLogo} alt="shareLogo" />
          </div>
          <div>
            {" "}
            <img src={bookmarkLogo} alt="bookmarkLogo" />
          </div>
        </section>
        <section className={classes.section3}>
          <BuyButton>Buy</BuyButton>
          <div>
            <label>AVAILEBLE NFTS</label>
            <h3>0/100</h3>
          </div>
          <div>
            <label>TOTAL RAISED</label>
            <h3>200 ETH</h3>
          </div>
          <div>
            <label>USD VALUE</label>
            <h3>$12,055</h3>
          </div>
          <div>
            <label>PRICE PER NFT</label>
            <h3>2ETH</h3>
          </div>
          <div className={classes.logo}>
            <img src={lenguageLogo} alt="lenguageLogo" />
            <img src={discordLogo} alt="discordLogo" />
            <img src={twitterLogo} alt="twitterLogo" />
            <img src={pathLogo} alt="pathLogo" />
          </div>
        </section>
        <section className={classes.section4}>
          <div className={classes.search}>
            <label for="search">
              <img src={searchLogo} alt="searchLogo" />
              SEARCH
            </label>
            <input id="search" />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default MainNavigation;
