import React from 'react';
import img from '../assets/spinner.png'

const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden"><img src={img} alt=''></img></span>
            </div>
        </div>
    );
};

export default Loading;