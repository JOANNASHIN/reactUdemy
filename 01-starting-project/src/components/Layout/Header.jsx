import { Fragment } from 'react';
import mealsImage from '../../assets/meal.jpg';
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <button>Cart</button>
        </header>

        <div className={classes['main-image']}>
            <img 
                src={mealsImage} 
                alt='A table full of delicious food'
            />
            <p>
                Image by <a href="https://www.freepik.com/free-vector/flat-design-korean-restaurant-sale-banner_31543492.htm#query=food%20banner&position=5&from_view=keyword&track=ais">Freepik</a>
            </p>
        </div>
    </Fragment>
}


export default Header;