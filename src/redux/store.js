// import {applyMiddleware, createStore} from 'redux'
// import { Datareducer } from './dataReducer';
// // import thunk from 'redux-thunk'
// import thunk from 'redux-thunk';
//     const   store = createStore(Datareducer, applyMiddleware(thunk))

// export default store;

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // ✅ CommonJS Import
import { Datareducer } from './dataReducer';

const store = createStore(Datareducer, applyMiddleware(thunk));

export default store;
