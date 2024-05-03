import { getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const About = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const handleLoginGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div>
      <h1>This is about page</h1>
      <button onClick={handleLoginGoogle}>Login with google</button>
    </div>
  );
};

export default About;
