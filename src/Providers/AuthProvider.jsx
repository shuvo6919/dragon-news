import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const emailVarification = (result) => {
    return sendEmailVerification(result.user);
  };
  const profileUpdate = (result, name, photo) => {
    updateProfile(result.user, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logout = () => {
    return signOut(auth);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const authInfo = {
    user,
    signUp,
    emailVarification,
    profileUpdate,
    login,
    logout,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
