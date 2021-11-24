import { useState } from "react";
import "./login.scss";
import { Button } from "../button/Button";
import { BsPerson, BsLock } from "react-icons/bs";
import { FaWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = ({ modal, closeModal }) => {
  const [block, setBlock] = useState(false);
  const handleBlock = () => setBlock(!block);
  return (
    <div className={modal ? "modal__container show-modal" : "modal__container"}>
      <div className="modal__close" onClick={closeModal}>
        <FaWindowClose className="bx bx-x" />
      </div>
      <div className="login__forms">
        <form
          action=""
          className={block ? "login__register none" : "login__register"}
          id="login-in"
        >
          <h1 className="login__title">Sign In</h1>

          <div className="login__box">
            <BsPerson className="login__icon" />

            <input
              type="text"
              placeholder="Username"
              className="login__input"
            />
          </div>

          <div className="login__box">
            <BsLock className="login__icon" />
            <input
              type="password"
              placeholder="Password"
              className="login__input"
            />
          </div>

          <Link to="/#" className="login__forgot">
            Forgot password?
          </Link>

          <Link to="/#" className="btn-link">
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--wide"
            >
              LOG IN
            </Button>
          </Link>

          <div>
            <span className="login__account">Don't have an Account ?</span>
            <span className="login__signin" id="sign-up" onClick={handleBlock}>
              Sign Up
            </span>
          </div>
        </form>

        <form
          action=""
          className={block ? "login__create" : "login__create none"}
          id="login-up"
        >
          <h1 className="login__title">Create Account</h1>

          <div className="login__box">
            <i className="bx bx-user login__icon"></i>
            <input
              type="text"
              placeholder="Username"
              className="login__input"
            />
          </div>

          <div className="login__box">
            <i className="bx bx-at login__icon"></i>
            <input type="text" placeholder="Email" className="login__input" />
          </div>

          <div className="login__box">
            <i className="bx bx-lock-alt login__icon"></i>
            <input
              type="password"
              placeholder="Password"
              className="login__input"
            />
          </div>

          <Link to="/#" className="btn-link">
            <Button
              buttonStyle="btn--outline"
              buttonSize="btn--wide"
            >
              LOG IN
            </Button>
          </Link>

          <div>
            <span className="login__account">Already have an Account ?</span>
            <span className="login__signup" id="sign-in" onClick={handleBlock}>
              Sign In
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
