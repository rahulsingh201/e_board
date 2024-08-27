import React, { useState, useEffect } from 'react';

const Profile = ({ userId }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

   

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`http://localhost:3006/profile/${userId}`);
                const data = await response.json();

                if (response.ok) {
                    setUser(data);
                } else {
                    setError(data.error || 'Failed to fetch user data');
                }
            } catch (err) {
                setError('An error occurred while fetching the profile');
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="profile-container">
            <h2>User Profile</h2>
            <img
                src={user.profilePicture || 'default-profile-pic.png'}
                alt="Profile"
                className="profile-picture"
            />
            <div className="profile-details">
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                {/* Add more fields as needed */}
            </div>
        </div>
    );
};

export default Profile;
