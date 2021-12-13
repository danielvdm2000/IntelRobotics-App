import React from 'react';
import NextLink from 'next/link';

export interface LinkProps {
    href: string;
}

const Link: React.FC<LinkProps> = props => (
    <NextLink href={props.href}>{props.children}</NextLink>
);

export default Link;