import React, {useState} from 'react'
import API from '../api/api';

function UserList() {

// UserList State
const [userList, setUserList] = useState('')

    API.get('/').then(response => {
        setUserList(response.data);
    }).catch(error => {
        console.log(error);
    });
  
    return (
        <div>
            
        </div>
    )
}

export default UserList
