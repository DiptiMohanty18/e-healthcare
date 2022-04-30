import React, { Component } from 'react';
import { variables } from './Variable';
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap';


export class UserList extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [] }
    }

    refreshList() {
        fetch(variables.API_URL + 'Users/getusers')
            .then(response => response.json())
            .then(data => {
                this.setState({ users: data });
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        const { users } = this.state;
        return (
            <div>
                <div className='py-4'>
                    <h2 className="text-center mb-4">User Info</h2>
                    <Table className="table border shadow" style={{width:"90%", margin:"auto"}} responsive>
                        <thead className='table-success'>
                            <tr>
                                <th scope="col">User ID</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Password</th>
                                <th scope="col">Admin</th>
                                <th scope="col">DOB</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Address</th>
                                <th scope="col">Accountnumber</th>
                                <th scope="col">Funds</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user =>
                                <tr key={user.userId}>
                                    <td>{user.userId}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.password}</td>
                                    <td>{String(user.isAdmin)}</td>
                                    <td>{user.dateOfBirth}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>{user.accountnumber}</td>
                                    <td>{user.funds}</td>
                                </tr>)}
                        </tbody>
                    </Table>


                </div>
            </div>




        )
    }
}