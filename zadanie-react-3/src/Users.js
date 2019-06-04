import React, { Component } from 'react';
import UsersList from './UsersList';


class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            users: []
        }
    }

    onInputChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    addNewUser = () => {
        let user = {
            name: this.state.userName,
            id: Date.now()
        };

        this.setState(prevState => {
            return({
                users: prevState.users.concat(user),
                userName: ''
            })
        });
    }

    removeUser = (id, name) => {
        let users = this.state.users;

        users = users.filter(currentUser => {
            if (currentUser.id !== id) return currentUser;
        });

        this.setState({ users });

        // this.setState(prevState => {
        //     return ({ users });
        // })
    }

    render() {
        return(
            <div>
                <input 
                    value={this.state.userName}
                    onChange={this.onInputChange}
                />
                <button onClick={this.addNewUser}>Add user</button>
                <UsersList 
                    users={this.state.users}
                    removeUser={this.removeUser}
                />
            </div>
        )
    }
}

export default Users;