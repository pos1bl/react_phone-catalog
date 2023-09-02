import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import logo from '../../images/logo.svg';
import { CartContext } from '../../helpers/context/CartContext';
import { FavContext } from '../../helpers/context/FavContext';
import './Header.scss';

type IsActive = {
  isActive: boolean;
};

const getClassnames = ({ isActive }: IsActive) => classNames('header__link', {
  'header__link--active': isActive,
});

const getClassnamesFavourites = ({ isActive }: IsActive) => classNames(
  'icon',
  'icon--favourites',
  { 'icon--active': isActive },
);

const getClassnamesCart = ({ isActive }: IsActive) => classNames(
  'icon',
  'icon--cart',
  { 'icon--active': isActive },
);

export const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const { favProducts } = useContext(FavContext);

  return (
    <div className="header">
      <div className="header__content">
        <div className="header__left">
          <div className="header__logo">
            <NavLink className="logo" to="/">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>

          <ul className="header__list">
            <li className="header__item">
              <NavLink className={getClassnames} to="/">Home</NavLink>
            </li>

            <li className="header__item">
              <NavLink className={getClassnames} to="/phones">Phones</NavLink>
            </li>

            <li className="header__item">
              <NavLink className={getClassnames} to="/tablets">Tablets</NavLink>
            </li>

            <li className="header__item">
              <NavLink className={getClassnames} to="/accessories">
                Accessories
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="header__right">
          {/* <Search /> */}
          <div className="header__icon">
            <NavLink className={getClassnamesFavourites} to="/favourites" />

            {!!favProducts.length && (
              <span className="header__icon--amount">
                {favProducts.length}
              </span>
            )}
          </div>

          <div className="header__icon">
            <NavLink className={getClassnamesCart} to="/cart" />

            {!!cartProducts.length && (
              <span className="header__icon--amount">
                {cartProducts.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
