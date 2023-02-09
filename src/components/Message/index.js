// Write your code here
import './index.css'

const Message = props => {
  const {isLogin} = props
  const msg = isLogin ? 'Welcome User' : 'Please Login'
  return (
    <div className="show-container">
      <h1 className="welcome-text">{msg}</h1>
    </div>
  )
}

export default Message
