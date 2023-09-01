import axios from "axios";
import React from 'react';
export default class AxiosGet extends React.Component{
    state={person:[]}
    componentDidMount()
    {
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(res=>{this.setState({person:res.data})})
    }
    render(){
        return(
            <>
        
            {this.state.person.map((e)=> <li key={e.id}> {e.title} </li>)}
            </>
            )
    }
}