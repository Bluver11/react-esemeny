import { useState } from "react";

interface Props{
    minLength: number;
    onChange: (newValue: string) => void;
}



export function PasswordField(props:Props){
    const [password, setPassword] = useState('');
   
   const style : React.CSSProperties = {};
   if(password.length < props.minLength){
    style.color = 'red';
   }
   
   return <div>
        <input type="password" onInput={e =>{
             setPassword(e.currentTarget.value);
             props.onChange(e.currentTarget.value);
             }}/>
        <br />
        <span style={style}>
        {password.length} / {props.minLength}
        </span>
    </div>
}


