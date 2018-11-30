import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom';
import { Busy } from './Settings.js'

const AllNotes = (props) => {
  console.log(props)
  return (
    <AllNotesDiv>
        <div>{props.match.params.user}</div>
        <div>{props.match.params.list}</div>
        <button onClick={() => console.log('Hi there!')}>Press me!</button>
        <Route path="/hey" component={Busy} />
    </AllNotesDiv>
  );
};

export default AllNotes;

const AllNotesDiv = styled.div`
  background: gray;
`;
