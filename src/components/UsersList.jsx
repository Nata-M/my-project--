import React from 'react'
import '../css/content.css'
import userData from './Data'

// const userdata = userData.map(item => <UsersList user={item}/>)

class UsersList extends React.Component {
    render() {
    return (
        <div id='users-list'>
            <ul id="ul-users">
            </ul>
        </div>
        )}
}
export default UsersList