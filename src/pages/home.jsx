import React from 'react';
import '../App.css';
import { useAuth0 } from '../contexts/auth0-context';

const Home = () => {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();
  return (
    <>
      <div className="App">
        <header className="App-header">
          {!isLoading && !user && (
            <>
              <h1>Public Page</h1>
            </>
          )}
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
    </>
  );
};

Home.propTypes = {};

export default Home;
