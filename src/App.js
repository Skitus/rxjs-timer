import React from 'react'
import "antd/dist/antd.css";
import './App.scss';

import Time from "./component/Time/Time";
import Buttons from "./component/Buttons/Buttons";
import {withObservableStream} from "./component/Hoc";

const App = ({sec, status, start, stop, wait, reset}) => {

  return (
      <div className="container">
        <Time sec={sec}/>
        <Buttons
            status={status}
            onRun={start}
            onStop={stop}
            onPause={wait}
            onReset={reset}
        />
      </div>
  )
}


export default withObservableStream()(App);