import React, { useEffect, useState } from 'react'

export default function Usehook2() {
    const [message, setMessage] = useState('Hi there, how are you?');
      useEffect(() => {
      console.log('trigger use effect hook');
      setTimeout(() => {
        setMessage("I'm fine, thanks for asking.");
      }, 1000)
    })
    return (<h1>{message}</h1>)
}