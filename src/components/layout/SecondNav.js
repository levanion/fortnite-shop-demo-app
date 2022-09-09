import classes from "./SecondNav.module.css";

import { SimpleButton } from "../button/Button";

const SecondNav = () => {
  return (
    <ul className={classes.main}>
      <SimpleButton as="li">Properties</SimpleButton>
      <SimpleButton as="li">Nested</SimpleButton>
      <SimpleButton as="li">Price</SimpleButton>
      <SimpleButton as="li">Formats</SimpleButton>
      <SimpleButton as="li">Rarity</SimpleButton>
      <SimpleButton as="li">Social Aspects</SimpleButton>
      <SimpleButton as="li">Saved/Pin</SimpleButton>
    </ul>
  );
};

export default SecondNav;
