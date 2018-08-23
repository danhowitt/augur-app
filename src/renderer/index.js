import * as React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from './store/configureStore'
import { HashRouter, Route } from 'react-router-dom'
import { About } from './about/About'
import { App } from './app/App'

const store = configureStore()

const Root = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <div style={{height: '100%'}}>
          <Route path="/" exact component={App} />
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    </Provider>
  )
}

ReactDOM.render(<Root />, document.getElementById('app'))