import React from 'react';
import BasePage from './BasePage';

export interface Office {
    city: string;
    country: string;
    continent: string;
    phoneNumber: string;
    email: string;
}

export interface Employee {
    id: string;
    name: string;
    title: string;
    imageUrl: string;
}

interface Props {
    office: Office;
    employees: Employee[];
}

const OfficePage: React.FC<Props> = ({ office }) => (
    <BasePage title={office.city}>
        <pre>{JSON.stringify(office)}</pre>
    </BasePage>
);

export default OfficePage;