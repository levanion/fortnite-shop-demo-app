import MainNavigation from "./MainNavigation";
import SecondNav from "./SecondNav";

import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <section className={classes.layout}>
      <div className={classes.mainNav}>
        <MainNavigation />
      </div>
      <div className={classes.main}>
        <div className={classes.secondNav}>
          <SecondNav />
        </div>
        <div className={classes.children}>
          <main>{props.children}</main>
        </div>
      </div>
    </section>
  );
};

export default Layout;
