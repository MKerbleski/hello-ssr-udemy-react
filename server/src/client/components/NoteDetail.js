import React from 'react';
import styled from 'styled-components'
import { Route } from 'react-router-dom';
import { Busy } from './Settings.js'

const NoteDetail = (props) => {
  console.log(props)
  return (
    <NoteDetailDiv>
        <div>{props.match.params.id}</div>
        <button onClick={() => console.log('Hi there!')}>Press me!</button>
        <Route path="/hey" component={Busy} />
    </NoteDetailDiv>
  );
};

export default NoteDetail;

const NoteDetailDiv = styled.div`
  background: gray;
  /* height: 100vh; */
`;
