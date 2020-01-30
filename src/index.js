import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ThemeContext from './themeContext';
import App from './App';
import'tachyons'
import * as serviceWorker from './serviceWorker';

// ThemeContext.Provider & ThemeContext.Consumer

ReactDOM.render(
	<ThemeContext.Provider value={ "light" }>
		<App />
	</ThemeContext.Provider>
	,document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
