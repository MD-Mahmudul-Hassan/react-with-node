import React from 'react';

class Registration extends React.Component{
	constructor(){
		super();
		this.state ={users: ''};
	}
	

	render() {		
		return (
			<div className='container'>				
				<div className="row margin-top-20px">
					<div className="col-md-6 offset-md-3 border padding-20px">
						<form>
							<h3>Sign Up</h3><hr />
							<div className="form-group">
								<label htmlFor="displayname">Display name</label>
								<input type="text" className="form-control" id="displayname" aria-describedby="displayname" placeholder="Enter display name" />						    
							</div>

							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
								<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputPassword1">Password</label>
								<input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
							</div>						
							<div className="form-group margin-top-20px">
								<button type="submit" className="btn btn-success">Submit</button>	
							</div>						  
						</form>
					</div>					
				</div>
			</div>
		);
	}
}

export default Registration;