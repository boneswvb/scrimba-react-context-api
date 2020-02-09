import React, {Component} from "react";
import ThemeContext from './themeContext';

class Button extends Component {
	static contextType = ThemeContext
  render() {
  	const theme = this.context
    return (
      <button className={`${theme}-theme`}>Switch Theme</button>
    )    
  }
}

export default Button