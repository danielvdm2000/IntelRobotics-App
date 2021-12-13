import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/dist/client/router';

interface Props extends LinkProps {
    style?: React.CSSProperties;
    activeStyle?: React.CSSProperties;
    inavtiveStyle?: React.CSSProperties;
}

const NavLink: React.FC<Props> = props => {
    const router = useRouter();
    const isActive = router.pathname === props.href;

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