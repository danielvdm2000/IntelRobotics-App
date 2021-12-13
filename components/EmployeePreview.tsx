import React from 'react';

interface Props {
    name: string;
    title: string;
    imageUrl: string;
}

const EmployeePreview: React.FC<Props> = ({ name, title, imageUrl }) => (
    <div>
        <img
            src={imageUrl}
            alt={`${name} - ${title}`}
            style={{
                display: 'block',
                width: '100%',
                height: '200px',
                objectFit: 'contain',
                paddingBottom: '10px',
            }}
        />
        <p style={{ textAlign: 'center', margin: 0, fontWeight: 600 }}>{title}</p>
        <p style={{ textAlign: 'center', margin: 0 }}>{name}</p>
    </div>
);

export default EmployeePreview;