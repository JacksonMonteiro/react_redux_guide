import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import UserActionTypes from "../../redux/user/action-types";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";
import { loginUser, logoutUser } from "../../redux/user/actios";

function Header() {
    const [cartIsVisible, setCartIsVisible] = useState(false);

    const { currentUser } = useSelector(
        (rootReducer) => rootReducer.userReducer
    );
    const dispatch = useDispatch();

    console.log("Current User: " + currentUser);

    const handleCartClick = () => {
        setCartIsVisible(true);
    };

    const handleLoginClick = () => {
        dispatch(
            loginUser({
                username: "zRavenclaw_",
                email: "jackson.monteiro5619@gmail.com",
            })
        );
    };

    const handleLogoutClick = () => {
        dispatch(logoutUser);
    };

    return (
        <Styles.Container>
            <Styles.Logo>Redux Shopping</Styles.Logo>
            <Styles.Buttons>
                {currentUser ? (
                    <div onClick={handleLogoutClick}>Sair</div>
                ) : (
                    <div onClick={handleLoginClick}>Login</div>
                )}
                <div onClick={handleCartClick}>Carrinho</div>
            </Styles.Buttons>

            <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
        </Styles.Container>
    );
}

export default Header;
