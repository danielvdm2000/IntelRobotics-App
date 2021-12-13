import React from "react";
import Link from 'next/link';
import BasePage from "./BasePage";

export interface Office {
    id: string;
    city: string;
    country: string;
    phoneNumber: string;
    email: string;
}

interface Props {
    offices: Office[];
}

const OfficeOverviewPage: React.FC<Props> = ({ offices }) => (
    <BasePage title="Offices">
        <>
            <p style={{ textAlign: 'center', paddingBottom: 30, paddingTop: 10 }}>Please get in touch with one of our global offices below.</p>
            <div className="office-grid">
                {offices.map(o => (
                    <div key={o.id}>
                        <h3>{o.country} - {o.city}</h3>
                        <a href={'mailto:'+o.email}>{o.email}</a>
                        <p>Phone: {o.phoneNumber}</p>
                        <Link href={`offices/${o.id}`}>View Office</Link>
                    </div>
                ))}
            </div>
        </>
    </BasePage>
);

export default OfficeOverviewPage;