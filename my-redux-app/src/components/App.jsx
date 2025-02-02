import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest, usersError } from '../actions/users';
import { Alert, Button } from 'reactstrap';
import NewUserForm from './NewUserForm';
import UserList from './UserList';
import EditUserPage from './EditUserPage';

class App extends Component {
    constructor(props) {
        super(props);
        this.props.getUsersRequest();
    }

    handleCreateUserSubmit = ({ firstName, lastName }) => {
        this.props.createUserRequest({ firstName, lastName });
    };

    handleDeleteUserClick = (userId) => {
        this.props.deleteUserRequest(userId);
    };

    handleCloseAlert = () => {
        this.props.usersError({ error: '' });
    };

    render() {
        return (
            <Router>
                <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px' }}>
                    {/* Navbar */}
                    <nav style={{ marginBottom: '20px' }}>
                        <Link to="/user">
                            <Button color="primary">User List</Button>
                        </Link>
                    </nav>

                    <h2>Users</h2>
                    <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
                        {this.props.users.error}
                    </Alert>

                    <Routes>
                        <Route path="/user" element={
                            <>
                                <NewUserForm onSubmit={this.handleCreateUserSubmit} />
                                {this.props.users.items?.length ? (
                                    <UserList onDeleteUserClick={this.handleDeleteUserClick} users={this.props.users.items} />
                                ) : (
                                    <p>No users found. Add a new user above.</p>
                                )}
                            </>
                        } />
                        <Route path="/user/:id" element={<EditUserPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}

export default connect(({ users }) => ({ users }), {
    getUsersRequest,
    createUserRequest,
    deleteUserRequest,
    usersError
})(App);
