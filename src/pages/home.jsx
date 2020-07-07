import React from 'react';
import '../App.css';
import { useAuth0 } from '../contexts/auth0-context';

const Home = () => {
  const { isLoading, user } = useAuth0();
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Community Answers</h1>
          {!isLoading && !user && (
            <>
              <p>Welcome! To use the application you need to be signed up and logged in. Please contact your administrator to join.</p>
            </>
          )}
          {!isLoading && user && (
            <>
              <p>Welcome {user.name}</p>

              {user.picture && <img src={user.picture} alt="My Avatar" />}
            </>
          )}
        </header>
      </div>
    </>
  );
};

Home.propTypes = {};

export default Home;
