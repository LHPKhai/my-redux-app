import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { connect } from 'react-redux';
import { updateUserRequest } from '../actions/users';

const EditUserPage = ({ users, updateUserRequest }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Tìm user theo ID
    const user = users.items.find(u => u.id.toString() === id);

    // State để lưu dữ liệu nhập vào
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (user) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
        } else {
            setError('User not found!');
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!firstName.trim() || !lastName.trim()) {
            setError('Both first and last names are required.');
            return;
        }
        updateUserRequest({ id: parseInt(id), firstName, lastName });
        navigate('/user');
    };

    if (!user) {
        return <Alert color="danger">{error}</Alert>;
    }

    return (
        <div style={{ maxWidth: '400px', margin: '20px auto' }}>
            <h2>Edit User</h2>
            {error && <Alert color="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>First Name</Label>
                    <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label>Last Name</Label>
                    <Input value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </FormGroup>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <Button color="primary" type="submit">Save</Button>
                    <Button color="secondary" onClick={() => navigate('/user')}>Cancel</Button>
                </div>
            </Form>
        </div>
    );
};

export default connect(({ users }) => ({ users }), { updateUserRequest })(EditUserPage);
