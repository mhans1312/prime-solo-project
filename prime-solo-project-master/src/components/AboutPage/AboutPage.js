import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const AboutPage = () => (
  <div>
    <div style={{width: 325, margin: 'auto'}}>
      <h2>Tech Used</h2>
      <h3>
        Javascript<br/>
        CSS/HTML<br/>
        Node.js<br/>
        Express<br/>
        SQL<br/>
        React with Redux/Saga<br/>
        Material-UI<br/>
      </h3>
    </div>
  </div>
);

export default AboutPage;
