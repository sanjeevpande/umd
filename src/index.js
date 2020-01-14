import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Feedback from './Feedback';

const render = (element) => {
	ReactDOM.render(<Feedback />, element);
};

export {
	Feedback, render
}
