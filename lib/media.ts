import { getStrapiURL } from "./api";

interface Media {
    url: string;
}

export function getStrapiMedia(media: Media) {
    return media.url.startsWith('/')
        ? getStrapiURL(media.url)
        : media.url;
}