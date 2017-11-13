import React, { Component } from 'react';

class Message extends Component {
  constructor(props){
    super(props)

    this.handleThumsUp = this.handleThumsUp.bind(this)
    this.handleThumsdown = this.handleThumsdown.bind(this)
    this.handleTrash = this.handleTrash.bind(this)
  }

  handleThumsUp(){
      this.props.onLike(this.props.id)

  }
  handleThumsdown(){

    this.props.onDislike(this.props.id)
  }
  handleTrash() {
    this.props.onlDelete(this.props.id);
  }
  render() {
    return(
      <li>
      {this.props.text}
        <i class="fa fa-trash pull-right delete" onClick={this.handleTrash}></i>
        <i class="fa fa-thumbs-down pull-right" onClick={this.handleThumsdown}></i>
        <i class="fa fa-thumbs-up pull-right" onClick={this.handleThumsUp} ></i>
        <div class="pull-right">{this.props.likes}</div>
      </li>
    )
  }
}

export default Message
