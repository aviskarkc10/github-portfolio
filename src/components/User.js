import React, { Component } from 'react';

import * as httpUtil from "../utils/httpUtil.js";

class User extends Component {

	constructor() {
		super();

		this.state = {
			user: "not fetched"
		};
	}

	componentDidMount() {
    
	    httpUtil.get('https://api.github.com/users/aviskarkc10').then(response => {
	       console.log(response);
	      this.setState({
	        user: response.data
	      });
	    }).catch( response=>{
	    	console.log("there was an error");
	    }

	    )
	    	
	    };




  	render() {

  		let alt="Avatar of github user "+this.state.user.name;
  		
  		return (

  			<div className="user clearfix">
  				<img className="userAvatar" src={this.state.user.avatar_url} alt={alt} />
  				<div className="username">User: {this.state.user.name}</div>
  				<div>User Name: {this.state.user.login}</div>
  				<div>URL: <a href={this.state.user.html_url}>{this.state.user.html_url}</a></div>
  				<div>Bio: {

  					this.state.user.bio ? this.state.user.bio : <span className='unavailable'>No bio available</span>

  				}</div>

  				<div>Blog: {

  					this.state.user.blog ? this.state.user.blog : <span className='unavailable'>Blogs Unavailable</span>

  				}</div>
  				<div>Email: {

  					this.state.user.email ? this.state.user.email : <span className='unavailable'>Email Unavailable</span>

  				}</div>
          <div>Followers: {this.state.user.followers}</div>
          <div>Following: {this.state.user.following}</div>
  				<div>For hire: {

  					this.state.user.hireable?this.state.user.hireable:<span className='unavailable'>Info Unavailable</span>

  				}</div>
  			</div>



  			);
  	}
}

export default User;