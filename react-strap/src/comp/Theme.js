import React from 'react';
import NavbarDemo from '../comp/NavbarDemo.js';
import Jumbotron from '../comp/Jumbotron';
import Page from '../comp/Page';

class Theme extends React.Component{
	render(){
		return(
				<div>
					<NavbarDemo />
					<Jumbotron />
					<Page />
				</div>
			);
	}
}

export default Theme;