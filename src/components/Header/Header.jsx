import React from 'react';
import { Link , NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div className='md:flex justify-between my-container text-center'>
            <div>
              <h1 className='text-3xl font-bold'>JobHive</h1>
            </div>
            <div className='flex gap-5'>
                <NavLink
                to='/'
                className={({ isActive }) => (isActive ? 'active' : 'default')}
                
                >Home</NavLink>
                <NavLink to="/statistics" className={({ isActive }) => (isActive ? 'active' : 'default')}>Statistics</NavLink>
                <NavLink to="/appliedjob" className={({ isActive }) => (isActive ? 'active' : 'default')}>Applied Jobs</NavLink>
                <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : 'default')}>Blog</NavLink>
            </div>
            <div>
            <button className="btn btn-primary">Start Applying</button>
            </div>
        </div>
    );
};

export default Header;