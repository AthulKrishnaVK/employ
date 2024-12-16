import React, { useState } from "react";
import { auth, googleProvider, signInWithPopup } from "../firebaseConfig";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logged in as: ${username}`);
  };

  // Google sign-in function
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log(user);
      alert(`Google Sign-in Successful! Welcome ${user.displayName}`);
    } catch (error) {
      console.error("Google Sign-in Error:", error);
      alert("Google Sign-in Failed: " + error.message);
    }
  };

  return (
    <main className="log">
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>
      
      <button onClick={handleGoogleSignIn} className="google-signin-button">
      
        Sign in with Google
      </button>
    </div>
    </main>
  );
};

export default LoginPage;
