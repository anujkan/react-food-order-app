import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.scss';
import mealsImage from '../../assets/meals.jpg';

const Header = props => {
    return (
        <>
            <header className={classes.header}>
                <h1>React Meals</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img alt='Meals' src={mealsImage} />
            </div>
        </>
    );
};

export default Header;
