import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Cart from '../cart/index';

import * as Styles from './styles';

import userActionTypes from '../../redux/user/actionTypes';

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector(rootReducer => rootReducer.userReducer);
  const dispatch = useDispatch();

  console.log({ currentUser });

  const handleCartClick = () => {
    setCartIsVisible = true;
  };

  const handleLoginClick = () => {
    dispatch({
      type: userActionTypes.LOGIN,
      payload: { name: 'Joao', email: 'joao@jao.com'}
    })
  }

  return(
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? <div>Sair</div> : <div onClick={handleLoginClick}>Login</div>}
        <div onClick={handleCartClick}>Carrinho</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  )

}

export default Header;