import React from 'react';
import UseTitle from '../../../Hooks/useTitle';

const Dashboard = () => {
    UseTitle('Dashboard')
    return (
        <div>
            <div className="flex justify-center h-96 items-center">
        <button className="btn btn-outline btn-primary">Welcome to your dashboard.</button>
    </div>
        </div>
    );
};

export default Dashboard;