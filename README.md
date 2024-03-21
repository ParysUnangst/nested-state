React UserProfile Component
A React component for managing user profile information with nested address details. This component demonstrates best practices for managing nested state updates while ensuring immutability.

Features
User Information: Allows users to input and update their name and email.
Address Information: Supports input and modification of street, city, and country fields.
Real-Time Updates: Displays changes to the user profile and address fields in real-time.
Immutability: Utilizes immutable state updates for efficient rendering and React state management.

Usage
Install the component:
npm install react-user-profile

Import the component into your application:
import UserProfile from 'react-user-profile';

Incorporate the UserProfile component into your JSX code:
<UserProfile />


How It Works
The UserProfile component manages user profile information and nested address details using React state. Immutability is maintained during state updates through the use of the spread syntax (...) to create shallow copies of state objects. When updating nested objects, such as the address details, the spread syntax is employed to selectively update specific fields while preserving existing properties. Functional state updates ensure that operations are performed on the most up-to-date state, promoting accurate change detection by React and efficient re-renders. Direct mutation of state is avoided, guaranteeing that new state objects are created with updated values, thereby maintaining immutability throughout the process.