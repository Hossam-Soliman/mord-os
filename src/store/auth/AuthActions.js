//actions
import { setIsLoggedInTrue } from "../app/AppActions";
//selectors
import { getSigninFormEmail, getSigninFormPassword } from "./AuthSelectors";
//localstorage
import { addToLocalStorage } from "../../services/localStorageService/localStorageService";
//constants
import { history } from "../../constants/helpers";

export const setSigninFormEmail = (value) => ({
  type: "SET_SIGNIN_FORM_EMAIL",
  value,
});

export const setSigninFormPassword = (value) => ({
  type: "SET_SIGNIN_FORM_PASSWORD",
  value,
});

export const setSignIn = () => async (dispatch, getState) => {
  const state = getState(),
    email = getSigninFormEmail({ state }),
    password = getSigninFormPassword({ state });
  if (email === "borgoth@mordos.com" && password === "12bindthem") {
    addToLocalStorage("ACCESS_TOKEN", email);
    dispatch(setIsLoggedInTrue());
    history.push("/");
  } else {
    alert("Invalied user name or password!");
  }
};
