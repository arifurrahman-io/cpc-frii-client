import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';



const Dashboard = () => {
    const { user } = useContext(AuthContext);
    return (

        <div>{user?.name}</div>
    );
};

export default Dashboard;