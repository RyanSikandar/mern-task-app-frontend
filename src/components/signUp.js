import React, { useState } from 'react';
import { CognitoUserPool } from 'amazon-cognito-identity-js';
import userPool from '../userPool';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (event) => {
    event.preventDefault();

    // Define user attributes
    const attributeList = [
      {
        Name: 'email',
        Value: email
      }
    ];

    userPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        console.error(err);
      } else {
        console.log({ ...data, email });
      }
    });
  };

  return (
    <form onSubmit={handleSignUp} style={formStyle}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
        style={inputStyle}
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        style={inputStyle}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Sign Up</button>
    </form>
  );
};

// Inline styles
const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '50px auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f9f9f9',
margin: '30vh auto',
};

const inputStyle = {
  marginBottom: '15px',
  padding: '10px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px'
};

const buttonStyle = {
  padding: '10px',
  fontSize: '16px',
  color: '#fff',
  backgroundColor: '#007bff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default SignUp;
