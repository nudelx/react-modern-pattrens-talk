import React, { Component } from 'react'
import Header from './components/header'
import './App.css'
import Box from './components/box'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="screen">
          <Box title="Components">this is a chidren compornts</Box>
        </div>
      </div>
    )
  }
}

export default App
