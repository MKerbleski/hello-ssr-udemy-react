import React from 'react';
import { Route } from 'react-router-dom';
import App from './components/App';
import AllNotes from './components/AllNotes';
import Settings from './components/Settings';
import NoteDetail from './components/NoteDetail';

export default () => {
  return (
    <div>
      {/* <Route exact path="/" component={Home} /> */}
      <Route exact path="/" component={App} />
      <Route exact path="/:user" component={AllNotes} />
      <Route path="/:user/:list" component={AllNotes} />
      <Route path="/:user/note/:id" component={NoteDetail} />
      <Route path="/settings/:api" component={Settings} />
    </div>
  );
};
