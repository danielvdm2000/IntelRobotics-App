import React from "react";

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
    <pre>{JSON.stringify(offices)}</pre>
);

export default OfficeOverviewPage;