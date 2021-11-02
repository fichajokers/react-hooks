import { useState,useEffect } from 'react';
import './App.css';
import UserInfoComponent from './UserInfoComponent';

const App = () => {
  const [count,setCount] = useState(0)
  const [showHideUserInfo,setShowHideUserInfo] = useState(false)
  const [flagShowHide,setFlagShowHide] = useState(false)
  
  useEffect( () =>{
    setShowHideUserInfo(!showHideUserInfo)
  },[flagShowHide])

  return (
    <div className="App">
      <h1>{count}</h1>
      <div>
        <button onClick={() => setCount(count + 1)}>add count</button>
        <button onClick={() => setCount(count - 1)}>remove count</button>
      </div>

      <h1>Show/hide user info</h1>
      <div>
        <button onClick={ () => setFlagShowHide(!flagShowHide) }>Show/hide</button>
        {showHideUserInfo && <UserInfoComponent />}
      </div>
    </div>
  );
}

export default App;
