import { useState } from 'react';
import './App.css'
import { PasswordField } from './compnents/PasswordField'
import { SingleUseButton } from './compnents/SingleUseButton';

function App() {
  const [username, setUsername] = useState('');
  const [password,setPassword] = useState('');

  return <div>
    User <br />
    <input type="text" onChange={e=>setUsername(e.currentTarget.value)} /> <br />
    Password <br />
    <PasswordField minLength={10}
    onChange={setPassword /*newValue=> setPassword(newValue)*/}
    />
   {/* <button onClick={() =>{
      console.log(`Register with: ${username}/ ${password}`)
      //Ide jön a fetch() stb.
    }}>Register</button>*/}
    <SingleUseButton onClick={() =>{
      console.log(`Register with: ${username}/ ${password}`)
      //Ide jön a fetch() stb.
     }}> Register <i>now</i>
     </SingleUseButton>
  </div>

  
}

export default App
