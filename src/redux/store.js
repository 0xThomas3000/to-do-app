import { createStore } from 'redux';
import rootReducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const composedEnhancers = composeWithDevTools();

const store = createStore(rootReducer, composedEnhancers); // Tham số thứ 2 cho store thường là giá trị khởi tạo (nếu có)

export default store;
