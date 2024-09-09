// Write your code here
import {state} from '../Home/index'
import {Component} from 'react'

class Message extends Component {
  render() {
    if (state.loggedIn === false) {
      return <h1>Please Login</h1>
    } else {
      return <h1>Welcome User</h1>
    }
  }
}

export default Message
