import { GetStaticPropsResult, NextPage } from 'next';
import React from 'react';
import OfficeOverviewPage, { Office } from '../../components/pages/OfficeOverviewPage';
import { notNullFilter } from '../../lib/client/utils';
import { sdk } from '../../lib/server/sdk';

interface Props {
    offices: Office[];
}

const OfficeOverview: NextPage<Props> = props => (
    <OfficeOverviewPage offices={props.offices} />
);

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const result = await sdk.OfficeOverview();

    if (result.offices == null) {
        throw new Error('No offices found');
    }

    const transformedOffices = result.offices.filter(notNullFilter);

    return {
        props: {
            offices: transformedOffices,
        }
    }
}

export default OfficeOverview;