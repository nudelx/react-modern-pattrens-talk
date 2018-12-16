import React, { Component } from 'react'
import Header from './components/header'
import './App.css'
import Box from './components/box'
import Brick, { BrickWithHook, BrickClass } from './lego/lego'
import Card from './components/card'
import Layout from './components/layout'
import Roof from './components/Roof'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="screen">
          <Box title="React Lego">
            <div className="sketch">
              <Roof />
              <Layout>
                <Brick pos={'hor'} size={3} color={'blue'} />
                <Brick pos={'hor'} size={3} color={'blue'} b />
                <Brick pos={'hor'} size={3} color={'blue'} b />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'hor'} size={3} color={'blue'} b />
                <Brick pos={'hor'} size={3} color={'blue'} b />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
              </Layout>
              <Layout>
                <Brick pos={'hor'} size={3} color={'blue'} />
                <Brick pos={'hor'} size={3} color={'blue'} b />
                <Brick pos={'hor'} size={3} color={'blue'} b />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'ver'} size={3} color={'blue'} />
                <Brick pos={'hor'} size={3} color={'blue'} b />
                <Brick pos={'hor'} size={3} color={'blue'} b />
                <Brick pos={'hor'} size={3} color={'blue'} b />
                <Brick pos={'hor'} size={3} color={'blue'} b />
              </Layout>
            </div>
          </Box>
        </div>
      </div>
    )
  }
}

export default App
