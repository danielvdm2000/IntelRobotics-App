import React from 'react';
import Link, { LinkProps } from '../bindings/Link';
import usePathname from '../bindings/usePathname';

const NavLink: React.FC<LinkProps> = props => {
    const pathname = usePathname();
    const isActive = pathname === props.href;

    return (
        <Link {...props}>
            <a style={{
                color: '#000',
                fontWeight: isActive ? 600 : 400,
            }}>{props.children}</a>
        </Link>
    );
}

export default NavLink;