import React from 'react';

class Login extends React.Component{
	render(){
		return (
			<div className='container'>				
				<div className="row margin-top-20px">
					<div className="col-md-6 offset-md-3 border padding-20px">
						<form>
							<h3>Login Form</h3><hr />
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
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


