export function getStrapiURL(path = ''): string {
    const base = process.env.NEXT_PUBLIC_STRAPI_URL;
    return `${base}${path}`;
}

export function getStrapiMedia(url: string) {
    const [superDomain, subDomain, fileName] = url.split('/');
    const result = `https://${subDomain}.${superDomain}/${fileName}`;
    return result;
}