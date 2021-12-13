import { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult, NextPage } from "next"
import OfficePage, { Employee, Office } from "../../components/pages/OfficePage";
import { notNullFilter } from "../../lib/client/utils";
import { sdk } from "../../lib/server/sdk";

interface Props {
    office: Office;
    employees: Employee[];
}

type Paths = {
    id: string;
}

const SingleOffice: NextPage<Props> = props => (
    <OfficePage 
        office={props.office}
        employees={props.employees}
    />
);

export async function getStaticPaths(): Promise<GetStaticPathsResult<Paths>> {
    const result = await sdk.OfficeIds();

    if (result.offices == null) {
        throw new Error('Could not get office ids');
    }

    const paths = result.offices.filter(notNullFilter).map(o => {
        return {
            params: {
                id: o.id,
            }
        }
    });

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps(context: GetStaticPropsContext<Paths>): Promise<GetStaticPropsResult<Props>> {
    const id = context.params?.id;

    if (typeof id !== 'string') {
        throw new Error('The requested route is not a valid office id');
    }

    const result = await sdk.OfficePage({ id });

    if (result.office == null) {
        throw new Error(`Can't get the office with the id of ${id}`);
    }

    if (result.employees == null) {
        throw new Error(`Can't get the employees of the office with the id of ${id}`);
    }

    const employees = result.employees.filter(notNullFilter).map(e => {
        const employee: Employee = {
            id: e.id,
            name: e.name,
            title: e.title,
            imageUrl: e.image?.url ?? '',
        };

        return employee;
    });

    return {
        props: {
            employees,
            office: result.office,
        }
    }
}

export default SingleOffice;