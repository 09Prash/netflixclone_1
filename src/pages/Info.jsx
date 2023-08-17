import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Info() {
    const navigate= useNavigate();
  return (
    <div>
        <button onClick={()=>navigate("/")}>Back to home</button>
    </div>
  )
}
