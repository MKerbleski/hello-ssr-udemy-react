import React from 'react';
import styled from 'styled-components'

const App = () => {
  return (
    <AppDiv>
        <div>I'm the VERY VERY BEST home component</div>
        <button onClick={() => console.log('Hi there!')}>Press me!</button>
    </AppDiv>
  );
};

export default App;

const AppDiv = styled.div`
  background: gray;
  height: 100vh;
`;
