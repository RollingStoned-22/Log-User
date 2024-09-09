// Write your code here
import './index.css'
import {Component} from 'react'
import Login from '../Login/index'
import Logout from '../Logout/index'
import Message from '../Message/index'
state = {loggedIn: false}

class Home extends Component {
  isLoggedIn = () => {
    let button
    const {loggedIn} = this.state
    if (loggedIn === false) {
      button = Login
      this.setState(() => {
        loggedIn: true
      })
    } else {
      button = Logout
      this.setState(() => {
        loggedIn: false
      })
    }
    return button
  }
  render() {
    return (
      <div className="container">
        <div className="user-container">
          <Message />
          {this.isLoggedIn}
        </div>
      </div>
    )
  }
}

export default Home
