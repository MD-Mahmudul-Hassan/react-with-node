import React from 'react';
import Header from "./Header";
import Footer from "./Footer"; 
import {BrowserRouter, Route, Link} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './vendor/fontawesome-free/css/all.min.css';
import './css/sb-admin.css';

class App extends React.Component{
	render() {
		return (			
			<div className="container-fluid padding-left-right-zero">
				<div className="row">
					<div className="col-md-12">
						{this.props.location}
						<Header />

						<Footer />
					</div>
				</div>							
			</div>			
		);
	}
}

export default App;