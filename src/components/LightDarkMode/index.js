// Write your code here

import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'light'}

  render() {
    const {mode} = this.state

    const lightMode = () => {
      this.setState({mode: 'light'})
      console.log('light..')
    }

    const darkMode = () => {
      this.setState({mode: 'dark'})
      console.log('dark..')
    }

    return (
      <div className="bg-container">
        {mode === 'light' ? (
          <div className="dark-card">
            <h1>Click To Change Mode</h1>
            <button type="submit" className="dark-btn" onClick={darkMode}>
              Light Mode
            </button>
          </div>
        ) : (
          <div className="light-card">
            <h1>Click To Change Mode</h1>
            <button type="submit" className="light-btn" onClick={lightMode}>
              Dark Mode
            </button>
          </div>
        )}
      </div>
    )
  }
}
export default LightDarkMode
