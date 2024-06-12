import React, { useState } from 'react';
import { CognitoUserPool,AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userPool from '../userPool';
import { useContext } from 'react';
import { AccountContext } from './Account';
const Login = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticate } = useContext(AccountContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    authenticate(username, password).then(data=>console.log("Logged In !!",data)).catch(err=>console.error(err));
    }



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
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Login</button>
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
marginTop: '30vh',
marginLeft: '50px',
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

export default Login;
