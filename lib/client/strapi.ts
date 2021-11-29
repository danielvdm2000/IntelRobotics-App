import { SingleProductQuery } from "../../graphql";

export function getStrapiURL(path = ''): string {
    const base = process.env.NEXT_PUBLIC_STRAPI_URL;
    return `${base}${path}`;
}

export function getStrapiMedia(url: string) {
    return url.startsWith('/')
        ? `${process.env.FILE_SPACE_URL}${url}` 
        : url;
}

type StrapiImage = {
    url: string;
    alternativeText?: string | undefined | null;
}

export function prepareImage(img: StrapiImage) {
    return {
        src: getStrapiMedia(img.url),
        alt: img.alternativeText ?? undefined,
    }
}
