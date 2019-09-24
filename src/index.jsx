import React from 'react';
import ReactDOM from 'react-dom';
import Root from'./router.jsx';
import { createStore } from 'redux';

const initialState = {
  board: [
    [null, null, null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, null, null, ],
    [null, null, null, null, null, null, null, null, null, null, ],
  ]
}

function reducer (state=initialState, action) {
  return state;
}

const store = createStore(reducer);

ReactDOM.render(<Root store={store}/>, document.getElementById('root'));