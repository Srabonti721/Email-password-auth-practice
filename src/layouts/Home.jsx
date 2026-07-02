import React, { useState } from 'react';

const Home = () => {
    const [show, setShow] = useState(false);
    return (
        <div>
            <h1>this is a home page</h1>
            <div className='relative'>
                <input type={show ? "text" : "password"} placeholder='text something' />
                <button onClick={() => setShow(!show)} className='absolute btn btn-sm '>{show ? "hide" : "show"}</button>
            </div>

        </div>
    );
};

export default Home;