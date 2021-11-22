interface Media {
    url: string;
}

export function getStrapiURL(path = ''): string {
    const base = process.env.NEXT_PUBLIC_STRAPI_URL;
    return `${base}${path}`;
}

export function getStrapiMedia(media: Media) {
    return media.url.startsWith('/')
        ? getStrapiURL(media.url)
        : media.url;
}