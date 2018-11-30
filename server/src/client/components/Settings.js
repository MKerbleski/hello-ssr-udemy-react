import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


const Settings = () => {
  return (
    <SettingsDiv>
        <div>Settings</div>
        <button onClick={() => console.log('Hi there!')}>Press me!</button>
        <Link to="/3">link to 3</Link>
    </SettingsDiv>
  );
};

export default Settings;

const SettingsDiv = styled.div`
  background: gray;
  height: 100vh;
`;
