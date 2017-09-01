import React, { Component } from 'react';

import './App.css';
import './User.css';

import Repos from './Repos';
import User from './User';

class App extends Component {

  render() {

  	console.log("inside app");
    return (
      <div className="App clearfix">
       
       	<User />
      	
      	<Repos />

       	

      </div>
    );
  }
}

export default App;
