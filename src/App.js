import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useAuth0 } from './contexts/auth0-context';
import Header from './components/header';
import AppRoutes from './routes/appRoutes';

function App() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  return (
    <div className="wrapper">
      <Header />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {!isLoading && !user && (
            <>
              <h1>Click Below!</h1>
              <button onClick={loginWithRedirect} className="button is-danger">
                Login
              </button>
            </>
          )}
          <AppRoutes />
          {!isLoading && user && (
            <>
              <h1>You are logged in!</h1>
              <p>Hello {user.name}</p>

              {user.picture && <img src={user.picture} alt="My Avatar" />}
              <hr />

              <button onClick={() => logout({ returnTo: window.location.origin })} className="button is-small is-dark">
                Logout
              </button>
            </>
          )}
        </header>
      </div>
    </div>
  );
}

export default App;
