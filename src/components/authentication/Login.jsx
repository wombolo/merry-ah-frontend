import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
	state = {
			email: '',
			password: ''
	};

	handleSubmit = (event) => {
		event.preventDefault();
		const userData = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.loginUser(userData, this.props.history);
		this.setState({ [event.target.name]: ''})
	};

	handleChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		return (
				<div
					className="tab-pane fade show active"
					id="pills-login"
					role="tabpanel"
					aria-labelledby="pills-profile-tab"
				>
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<input
								type="email"
								placeholder="Email"
								className="form-control input1"
								name="email"
								onChange={this.handleChange}
								value={this.state.email}
							/>
						</div>

						<div className="form-group">
							<input
								type="password"
								placeholder="Password"
								className="form-control input2"
								name="password"
								onChange={this.handleChange}
								value={this.state.password}
							/>
						</div>

						<div className="form-group">
							{this.props.auth.isLoading ? (
								<button className="btn btn-primary w-100" disabled>
									loading ...
								</button>
							) : (
								<button className="btn btn-primary w-100">Proceed</button>
							)}
						</div>
					</form>
					<p>Login with Social</p>
				</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};
export default connect(mapStateToProps, { loginUser })(withRouter(Login));
