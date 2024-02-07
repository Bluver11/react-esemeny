import { useState } from "react";


interface Props{
    onClick: () => void;
    children:React.ReactNode
}

export function SingleUseButton(props:Props){

const [clicked, setClicked] = useState(false)


    return <div>
        <button onClick={()=>{
            setClicked(true);   
            props.onClick();
        }}
        disabled={clicked}
        >
        {props.children}
        </button>
    </div>
}