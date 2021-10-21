import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  const good = store.getState().good
  const ok = store.getState().ok
  const bad = store.getState().bad
  const all = good + ok + bad
  const avg = all === 0 ? 0 : (good + (bad * -1)) / all
  const positive = all === 0 ? 0 : good / all * 100

  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => store.dispatch({ type: 'GOOD' })}>good</button>
      <button onClick={() => store.dispatch({ type: 'OK' })}>neutral</button>
      <button onClick={() => store.dispatch({ type: 'BAD' })}>bad</button>
      <button onClick={() => store.dispatch({ type: 'ZERO' })}>reset stats</button>
      <h1>Statistics</h1>
      {all === 0 ? <div>no feedback given</div> :
        <>
          <div>good {good}</div>
          <div>neutral {ok}</div>
          <div>bad {bad}</div>
          <div>all {all}</div>
          <div>avg {avg}</div>
          <div>positive {positive} %</div>
        </>
      }
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)