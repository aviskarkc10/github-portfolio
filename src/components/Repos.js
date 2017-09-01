import React, { Component } from 'react';

import * as httpUtil from "../utils/httpUtil.js";

import "./Repos.css";

class Repos extends Component {

	constructor() {
		
		super();

		this.state = {
			repos: []
		};
	}

	componentWillMount() {

  	}

  	componentDidMount() {
    
	    httpUtil.get('https://api.github.com/users/aviskarkc10/repos').then(response => {
	    	
	    	this.setState({
	        	repos: response.data
	      	});
	    });

  	}



	render() {
		
		return (
			<div className="repositories clearfix">
				<div className="repoTitle"><strong>Repositories</strong></div>
	      		<div className="reposContainer clearfix">
	        	{
	          		this.state.repos && this.state.repos.map(repo => {
	            		return (
	            			<div key={repo.id} className="singleRepo">
			              			<h3>{repo.name}</h3>
			              			<div>{repo.language}</div>
			              			<div>Goto Repo: <a href={repo.html_url}>{repo.html_url}</a></div>
			              			<div>Clone: <a href={repo.clone_url}>{repo.clone_url}</a></div>
			              		
		              		</div>
	            		);
	          		})
	        	}
	      		</div>


	      	</div>

	      
    	);		
		
  	}
			
}

export default Repos;