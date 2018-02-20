import React from 'react';
import reactDom from 'react-dom';

const App = () => (
  <h1>Hello World</h1>
);

reactDom.render(<App />, document.getElementById('root'))