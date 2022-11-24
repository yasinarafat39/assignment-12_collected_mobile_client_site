import React, { useContext } from 'react';
import { AuthContext } from '../../../../Contexts/AuthProvider/AuthProvider';

const Navbar = () => {
    const { email } = useContext(AuthContext);
    return (
        <div>
            This is Navbar.
            {email && <p>{email}</p>}
        </div>
    );
};

export default Navbar;