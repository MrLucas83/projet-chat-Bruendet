import React, { Component } from 'react';
import logo from './logo.svg';
import './Application.css';

import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import {
	create_user,
	create_message,
	show_message,
	create_channel
} from "./services/chat/actions";

class Application extends Component {

	state = {
		firstname: "",
		lastname: "",
		email: ""
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome les 💯</h1>
				</header>
				<div
					style={{
						position: "absolute",
						top: 190,
						left: 0,
						right: 0,
						bottom: 0,
					}}
				>

				{
					this.props.chat.user.firstname === undefined ?
						<div>

						
							Firstname : <input type="text" onChange={(e) => { this.setState({ firstname: e.target.value }) }} /><br></br>
							Lastname  : <input type="text" onChange={(e) => { this.setState({ lastname: e.target.value }) }} /><br></br>
							Email     : <input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} /><br></br>
						
							<button onClick={() => {
								
								this.props.create_user(this.state.firstname, this.state.lastname, this.state.email)
								this.props.create_channel(this.state.email, this.state.firstname)
								console.log(this.props.chat.user)
								
							}} >validate</button>
						</div>
					:

					this.props.chat.user.firstname === 'admin' ?
						
						<div>
							
							FirstnameUser : <h1>{this.props.chat.user.firstname}</h1><br></br><br></br>
							<button onClick={() =>{
								this.props.show_message(this.state.message,this.state.firstname)
							}} >show all message</button>		
							
						</div>
					:

						<div>
							
							FirstnameUser : <h1>{this.props.chat.user.firstname}</h1><br></br><br></br>
							Message : 	<input type="text" onChange={(e) => {this.setState({ message: e.target.value}) }}/><br></br>
							<button onClick={() =>{
								
								this.props.create_message(this.state.message,this.state.firstname)
								this.setState({submited: true})
								
							}} >create</button>
							
						</div>

				}

				</div>
			</div>
		);
	}

}

const mapStateToProps = (state) => ({
	chat: state.chat,
});

const mapActionsToProps = (dispatch) => ({
	create_user: bindActionCreators(create_user, dispatch),
	create_message: bindActionCreators(create_message, dispatch),
	show_message: bindActionCreators(show_message, dispatch),
	create_channel: bindActionCreators(create_channel, dispatch),
});

export default connect(mapStateToProps, mapActionsToProps)( Application );
