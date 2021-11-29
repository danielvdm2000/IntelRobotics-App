import React from 'react';

interface Props {
    style?: React.CSSProperties;
}

const ContentContainer: React.FC<Props> = ({ style, children }) => (
    <div style={{
        ...style,
        maxWidth: 1080,
        paddingLeft: 20,
        paddingRight: 20,
        margin: 'auto',
    }}>
        {children}
    </div>
);

export default ContentContainer;