import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("loction in loginpage ", location);
  const { login } = useContext(AuthContext);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setErrMsg("");
    setSuccessMsg("");

    login(email, password)
      .then((result) => {
        console.log(result.user);
        {
          location.state ? navigate(location.state) : navigate("/");
        }
      })
      .catch((err) => {
        setErrMsg(err.code);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-center text-3xl font-bold mt-4">Login</h1>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center gap-4 mt-4 bg-slate-700 px-5 py-8 rounded-lg"
        >
          <input
            className="p-3 rounded-lg w-full"
            placeholder="Email"
            type="email"
            name="email"
          />
          <input
            className="p-3 rounded-lg w-full"
            placeholder="Password"
            type="password"
            name="password"
          />

          <div className="w-full">
            <Link>Forgot Password?</Link>
          </div>

          <input
            className="btn w-full btn-secondary"
            type="submit"
            value="Login"
          />
          <p>
            Do not have any account?
            <Link className="text-blue-400 font-bold" to={"/signup"}>
              Signup
            </Link>
          </p>
        </form>
        <div className="mt-4 text-center">
          {successMsg && <p className="text-green-600">{successMsg}</p>}
          {errMsg && <p className="text-red-600">{errMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
