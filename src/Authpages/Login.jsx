import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Email validation
    if (!username.trim()) {
      setEmailError('Please enter your email address.');
      return;
    } else if (!isValidEmail(username)) {
      setEmailError('Please inter valid password; with @, .com or .net');
      return;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!password.trim()) {
      setPasswordError('Please enter your password.');
      return;
    } else if (password.length < 6) {
      setPasswordError('Your password must be at least 6 characters long.');
      return;
    } else {
      setPasswordError('');
    }

    // If all validations pass, proceed with authentication logic
  };

  // Email format validation function
  const isValidEmail = (email) => {
    // Regular expression for basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && (email.includes('.com') || email.includes('.net'));
  };

  return (
    <div>
      <h1 className="text-2xl text-red-600 font-bold">SIGN IN</h1>
      <form className="mt-5 flex flex-col gap-5" onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Email"
            className="bg-red-300 px-3 py-2 rounded-md w-[80%] border border-blue-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="bg-red-300 px-3 py-2 rounded-md border border-blue-700 w-[80%]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}
        </div>
        <div>
          <button className="bg-blue-300 px-5 py-2 rounded-md text-white w-[80%] border border-blue-700">
            Sign In
          </button>
        </div>
      </form>
      <p className="mt-3">
        Already have an account?<Link to='/SignUp'> <span className="text-red-500">Sign Up</span></Link>
        <br />
        Forgot Password? <Link to='/Reset'><span className="text-red-500">Reset password</span></Link>
      </p>
    </div>
  );
};

export default Login;
