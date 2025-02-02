import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const UserListItem = ({ user, onDeleteClick }) => {
    const stringToHslColor = (str = '') => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        const h = hash % 360;
        return `hsl(${h}, 60%, 80%)`;
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
                textAlign: 'center',
                height: '40px',
                width: '40px',
                lineHeight: '40px',
                borderRadius: '50%',
                color: 'white',
                fontWeight: 'bold',
                background: stringToHslColor(user.firstName + user.lastName)
            }}>
                {user.firstName?.[0]?.toUpperCase()}{user.lastName?.[0]?.toUpperCase()}
            </div>
            <div style={{ flexGrow: 1 }}>
                {user.firstName} {user.lastName}
            </div>
            <Link to={`/user/${user.id}`}>
                <Button size="sm" color="primary" outline>Edit</Button>
            </Link>
            <Button size="sm" color="danger" outline onClick={() => onDeleteClick(user.id)}>
                Delete
            </Button>
        </div>
    );
};

export default UserListItem;
