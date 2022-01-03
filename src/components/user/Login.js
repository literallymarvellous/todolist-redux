import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../../features/user/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              name: "Ike",
              age: 23,
              email: "ike@gmail.com",
            })
          )
        }
      >
        Login
      </button>

      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
