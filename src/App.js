
import React, { Component } from 'react'
import News from './componet/News'

export class App extends Component {

  render() {
    return (
     <>
  
     <News pageSize={5} category={"sports"}/>
     </>
    )
  }
}

export default App