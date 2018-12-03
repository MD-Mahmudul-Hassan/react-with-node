import React from 'react';
import { Redirect } from 'react-router-dom'

class Login extends React.Component{

	constructor(){
		super();		
		this.state = { 
			responseToPost : '',			
			email : '',
			password : '',
			redirect : false
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit = async event => {
		event.preventDefault();
		const data = new FormData(event.target);
		const response = await fetch('/api/add-user', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify({ email: this.state.email, password: this.state.password}),
		});
		const body = await response.text();
		this.setState({ responseToPost: body });
	};

	
	render(){
		return (
			<div className='container'>				
				<div className="row margin-top-20px">				
					<div className="col-md-6 offset-md-3 border padding-20px">
					<div className="">{this.state.responseToPost}</div>
						<form onSubmit={this.handleSubmit}>
							<h3>Login Form</h3><hr />
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input type="email" name="email" className="form-control" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input type="password" name="password" className="form-control" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} id="exampleInputPassword1" placeholder="Password" />
							</div>		
			
							<div className="form-group margin-top-20px">
								<button type="submit" className="btn btn-success">Log In</button>	
							</div>						  
						</form>
					</div>	
				</div>
			</div>
		);
	}
}

export default Login;


