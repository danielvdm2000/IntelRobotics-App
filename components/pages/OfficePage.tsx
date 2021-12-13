import React from 'react';
import EmployeePreview from '../EmployeePreview';
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

const OfficePage: React.FC<Props> = ({ office, employees }) => {
    const title = `${office.continent} - ${office.country} - ${office.city}`;

    return (
        <BasePage title={title}>
            <div>
                <a href={'mailto:' + office.email}>{office.email}</a>
                <p>Phone: {office.phoneNumber}</p>

                <h3 style={{ paddingBottom: 20 }}>Our employees</h3>

                <div className="employee-grid">
                    {employees.map(e => (
                        <EmployeePreview
                            key={e.id}
                            name={e.name}
                            title={e.title}
                            imageUrl={e.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </BasePage>
    );
};

export default OfficePage;