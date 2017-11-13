import React, { Component } from 'react';

class Header extends Component{
  constructor(props) {
    super(props)
}
render(){
return(
      <nav class="navbar">
      <div class="container-fluid">
        <div class="navbar-header ">
          <h1>{this.props.title} Message Board</h1>
        </div>
      </div>
    </nav>
    )
  }
}
export default Header
