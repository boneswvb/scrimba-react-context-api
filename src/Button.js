import React from "react";
import {ThemeContextConsumer} from './themeContext';

const Button = (props) => {
  return (
  	<ThemeContextConsumer>
  		{theme => (
    		<button className={`${theme}-theme`}>Switch Theme</button>
			)}
  	</ThemeContextConsumer>
  )    
}

export default Button