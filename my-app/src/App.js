import React, { Component } from 'react';
import Header from './Header'
import './App.css';
import uuid from 'uuid';
import Message from './Message'
import PostMessage from './PostMessage'

class App extends Component {
  constructor(props){
  super(props)
  this.state= {
    messages: [
      {id: uuid.v4(), text: "Hello", likes: 0},
      {id: uuid.v4(), text: "Goodbye", likes: 0},
      {id: uuid.v4(), text: "Tomorrow", likes: 0},
      {id: uuid.v4(), text: "Yesterday", likes: 0},
    ]
  }
  this.handleLike = this.handleLike.bind(this);
  this.handleDislike = this.handleDislike.bind(this);
  this.handleDelete = this.handleDelete.bind(this);
  this.handlePostMessage = this.handlePostMessage.bind(this);
}
handleLike(id){

  const message = this.state.messages.find(message => message.id === id)

  message.likes = message.likes + 1;

this.setState({
  messages: this.state.messages
})

}

handleDislike(id){

  const message = this.state.messages.find(message => message.id === id)

  message.likes = message.likes - 1;

this.setState({
  messages: this.state.messages
})


}
handleDelete(id) {
   const newMessages = this.state.messages.filter(
     message => message.id !== id
   );
   this.setState({
     messages: newMessages
   });
 }

handlePostMessage(message){
  const newMessage = {id: uuid.v4(), text: message, likes: 0}
  const newMessages = this.state.messages
  newMessages.push(newMessage)
  this.setState({
    messages: newMessages
  })

}
  render() {
    return (
      <div>
      <Header title={"Urvi"} />
    <div class="container">
      <div class="panel-group">
        <div class="panel panel-primary">
          <div class="panel-heading">Post a message</div>
          <PostMessage
          onPostMessage={this.handlePostMessage}
          />
        </div>
      </div>

      <div class="panel-group">
        <div class="panel panel-default">
          <div class="panel-heading">Message Board</div>
          <div class="panel-body">
            <ul class="message-board">
            {this.state.messages.map(message => {
              return (
                <Message
                  text= {message.text}
                  likes={message.likes}
                  id= {message.id}
                  onLike={this.handleLike}
                  onDislike={this.handleDislike}
                  onlDelete={this.handleDelete}
                />
            );
          })}

            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
  }
}

export default App;
