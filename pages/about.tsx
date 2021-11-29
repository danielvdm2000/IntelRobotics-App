import { GetStaticPropsResult, NextPage } from "next"
import TextPage, { TextPageProps } from "../components/pages/TextPage";
import { sdk } from "../lib/server/sdk";

interface Props {
    title: string;
    content: string;
}

const AboutPage: NextPage<Props> = TextPage;

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
    const result = await sdk.AboutPage();

    console.log(result);

    if (result.aboutPage == null) {
        throw new Error("Can't find the content for the about page");
    }

    return {
        props: result.aboutPage,
    };
}

export default AboutPage;