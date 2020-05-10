const withBaseUrl = (site, url: string) =>
  `/${site.baseUrl}/${url}`.replace(/\/+/g, "/");

const withAssetUrl = (site, url: string) => withBaseUrl(site, site.assetsUrl + url);

export default {
  withBaseUrl,
  withAssetUrl,
};
