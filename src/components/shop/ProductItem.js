import { Link } from "react-router-dom";
import { LinkButton } from "../button/Button";

import likeLogo from "../../img/likeLogo.png";
import commentLogo from "../../img/commentLogo.png";
import shareLogo from "../../img/sharelogo.png";
import bookmarkLogo from "../../img/bookmarkLogo.png";

import onProduct from "../../img/onProduct.png";
import onProduct2 from "../../img/onProduct2.png";

import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <li className={classes.item}>
      <header>
        <div className={classes.secondaryText}>
          <p>Nested NFT</p>
        </div>
        <div className={classes.secondaryImage}>
          <img src={onProduct} alt="onProd" />
          <img src={onProduct2} alt="onProd2" />
        </div>
        <img className={classes.mainImage} src={props.image} alt="new" />
      </header>
      <LinkButton as={Link} to={`/${props.id}`}>
        {props.name}
      </LinkButton>
      <div className={classes.extra}>
        <div>
          <img src={likeLogo} alt="likeLogo" />
          {" 20k"}
        </div>
        <div>
          <img src={commentLogo} alt="commentLogo" />
          {" 10k"}
        </div>
        <div>
          {" "}
          <img src={shareLogo} alt="shareLogo" />
        </div>
        <div>
          {" "}
          <img src={bookmarkLogo} alt="bookmarkLogo" />
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
