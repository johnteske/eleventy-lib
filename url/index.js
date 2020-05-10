const withBaseUrl = (site, url) =>
  `/${site.baseUrl}/${url}`.replace(/\/+/g, "/");

const withAssetUrl = (site, url) => withBaseUrl(site, site.assetsUrl + url);

export default {
  withBaseUrl,
  withAssetUrl,
};
