import { GetStaticPropsResult, NextPage } from "next"
import BasePage from "../components/pages/Basepage";
import { sdk } from "../lib/server/sdk";

interface Props {
    title: string;
    content: string;
}

const AboutPage: NextPage<Props> = props => (
    <BasePage title={props.title}>
        {props.content}
    </BasePage>
);

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const result = await sdk.AboutPage();

    if (result.aboutPage == null) {
        throw new Error("Can't find the content for the about page");
    }

    return {
        props: result.aboutPage,
    };
}

export default AboutPage;