import React from 'react';

export interface Office {

}

interface Props {
    office: Office;
}

const OfficePage: React.FC<Props> = ({ office }) => (
    <pre>{JSON.stringify(office)}</pre>
);

export default OfficePage;