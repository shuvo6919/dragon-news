import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {
  const { signUp, emailVarification, profileUpdate } = useContext(AuthContext);
  const [successMsg, setSuccessMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const hadnleSignup = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const checked = e.target.checkbox.checked;
    setErrMsg("");
    setSuccessMsg("");

    if (password.length < 6) {
      setErrMsg("Password should have at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrMsg("At least one capital letter");
      return;
    } else if (!checked) {
      setErrMsg("Accept the terms and conditions");
      return;
    }
    signUp(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccessMsg("Successfully Created");
        emailVarification(result).then().catch();
        profileUpdate(result, name, photo)
          .then()
          .catch((err) => {
            setErrMsg(err.code);
          });
      })
      .catch((err) => {
        setErrMsg(err.code);
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-center text-3xl font-bold mt-4">Sign Up</h1>
        <form
          onSubmit={hadnleSignup}
          className="flex flex-col items-center gap-4 mt-4 bg-slate-700 p-5 rounded-lg"
        >
          <input
            className="p-3 rounded-lg w-full"
            placeholder="Name"
            type="text"
            name="name"
            required
          />
          <input
            className="p-3 rounded-lg w-full"
            placeholder="Photo URL"
            type="text"
            name="photo"
            required
          />
          <input
            className="p-3 rounded-lg w-full"
            placeholder="Email"
            type="email"
            name="email"
            required
          />
          <input
            className="p-3 rounded-lg w-full"
            placeholder="Password"
            type="password"
            name="password"
            required
          />
          <div className="flex items-center gap-2">
            <input type="checkbox" name="checkbox" />
            <p>Accept the terms and conditions</p>
          </div>
          <input
            className="btn w-full btn-secondary"
            type="submit"
            value="Signup"
          />
          <p>
            Already have an account?{" "}
            <Link className="text-blue-400 font-bold" to={"/login"}>
              Login
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

export default Signup;
