// Write your code here
import {Component} from 'react'
import Login from '../Login'
import Message from '../Message'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLogin: false}

  onClickButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    return (
      <div className="main-container">
        <div className="container">
          <Message isLogin={isLogin} />
          {!isLogin ? (
            <Login login={this.onClickButton} />
          ) : (
            <Logout logout={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
