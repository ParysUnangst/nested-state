import React, { useState } from 'react';

function UserProfile() {
  // State initialization
  const [userProfile, setUserProfile] = useState({
    name: '',
    email: '',
    address: {
      street: '',
      city: '',
      country: ''
    }
  });

  // Function to update address information
  const updateAddress = (updatedFields) => {
    setUserProfile(prevProfile => ({
      ...prevProfile,
      address: {
        ...prevProfile.address,
        ...updatedFields
      }
    }));
  };

  // Event handler for input changes in user information
  const handleUserInputChange = (e) => {
    const { name, value } = e.target;
    setUserProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  // Event handler for input changes in address information
  const handleAddressInputChange = (e) => {
    const { name, value } = e.target;
    updateAddress({ [name]: value }); // Update the corresponding field in address
  };

  return (
    <div>
      <h2>User Profile</h2>
      {/* Input fields for user information */}
      <label>Name: </label>
      <input type="text" name="name" value={userProfile.name} onChange={handleUserInputChange} />
      <br />
      <label>Email: </label>
      <input type="email" name="email" value={userProfile.email} onChange={handleUserInputChange} />
      <br />
      {/* Input fields for address information */}
      <label>Street: </label>
      <input type="text" name="street" value={userProfile.address.street} onChange={handleAddressInputChange} />
      <br />
      <label>City: </label>
      <input type="text" name="city" value={userProfile.address.city} onChange={handleAddressInputChange} />
      <br />
      <label>Country: </label>
      <input type="text" name="country" value={userProfile.address.country} onChange={handleAddressInputChange} />
      <br />
      {/* Display current user profile information */}
      <div>
        <h3>Current Profile</h3>
        <p>Name: {userProfile.name}</p>
        <p>Email: {userProfile.email}</p>
        <p>Address: {userProfile.address.street}, {userProfile.address.city}, {userProfile.address.country}</p>
      </div>
    </div>
  );
}

export default UserProfile;
