import React from 'react';
import '../App.css';

const PageContainer = ({ children }) => {
  return (
    <>
      <div className="App">
        <header className="App-header">{children}</header>
      </div>
    </>
  );
};

export default PageContainer;
