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
							<h3>ReactJS Registration Form</h3><hr />
							<div className="form-group">
								<label htmlFor="firstname">First name</label>
								<input type="text" className="form-control" id="firstname" aria-describedby="firstName" placeholder="First name" />						    
							</div>

							<div className="form-group">
								<label htmlFor="lastname">Last name</label>
								<input type="text" className="form-control" id="lastname" aria-describedby="lastName" placeholder="Last name" />
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
							
							<div className="form-group">
								Gender:
							</div>
							<div className="form-check form-check-inline">							  
							  <input className="form-check-input" name="gender" type="radio" id="male" />
							  <label className="form-check-label" htmlFor="male">Male </label>
							</div>

							<div className="form-check form-check-inline">							  
							  <input className="form-check-input" name="gender" type="radio"  id="female" />
							  <label className="form-check-label" htmlFor="female">Female </label>
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