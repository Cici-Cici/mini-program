import { Component } from 'react'
import './app.scss'
import { Provider } from "mobx-react"
import store from "./stores"
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  render () {
    return(
      <Provider store={store}>
      { this.props.children}
      </Provider>
    );

  }
}

export default App
