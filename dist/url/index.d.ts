interface Site {
    baseUrl: string;
}
declare const _default: {
    withBaseUrl: (site: Site, url: string) => string;
    withAssetUrl: (site: Site, url: string) => string;
};
export default _default;
