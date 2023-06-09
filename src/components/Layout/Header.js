import { Fragment } from "react";
import classes from './Header.module.css'
import mealsImage from './../images/table.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  const {onShowCart } = props
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={onShowCart}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='table'/>
      </div>
    </Fragment>
  );
};
export default Header;
