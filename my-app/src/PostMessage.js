import React, { Component } from 'react'

class PostMessage extends Component {
  constructor(props) {
    super(props)
    this.state = { value: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }

  handleChange(event){
 this.setState({value:event.target.value})
  }
   handleClick(){
     this.props.onPostMessage(this.state.value)
   }

  render (){
    return(
      <div class="panel-body">
        <div class="form-group">
          <label>Message:</label>
          <textarea id="message" type="text" class="form-control" value={this.state.value} onChange={this.handleChange}></textarea>
        </div>
        <button id="submit" class="btn btn-default" onClick={this.handleClick}>Post to board</button>
      </div>
    )
  }
}

export default PostMessage
