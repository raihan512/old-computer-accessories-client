import React from 'react';

const Title = ({ Children }) => {
    return (
        <div className='title'>
            <h3 className='text-5xl font-bold uppercase text-black text-center mb-8'>Categories</h3>
            {Children}
        </div>
    );
};

export default Title;