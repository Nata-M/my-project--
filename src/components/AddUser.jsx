import React from 'react'
import '../css/content.css';
import AddInput from './AddUsers'
import CreateUser from './CreateUser'

function AddUser() {
    
    return (
        <div id='btn'>
            <button id='mybtn' onClick={AddInput}> + ახალი მომხმარებლის დამატება</button>
            <input id='mysearch' type="text" placeholder="ძიება"/>
        </div>
    )
}

export default AddUser