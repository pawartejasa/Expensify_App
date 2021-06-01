import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import 'normalize.css/normalize.css';
import './Styles/Styles.scss';


const appcomp=document.getElementById('approot');
ReactDOM.render(<AppRouter />, appcomp);



