import React from 'react';

interface Props {
    name: string;
}

const Header: React.FC<Props> = ({ children, name }) => (
    <header style={{
        display: 'flex',
        width: 4 * 80,
        justifyContent: 'space-between'
    }}>
        <span style={{ fontWeight: 500 }}>
            {name}
        </span>
        {children}
    </header>
);

export default Header;