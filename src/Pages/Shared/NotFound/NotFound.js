import React from 'react';

const NotFound = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
           <div className="text-center">
           <h1 className='text-8xl font-extrabold text-violet-800'>404</h1>
            <div className="text-4xl">sorry, Page not found!</div>
           </div>
        </div>
    );
};

export default NotFound;