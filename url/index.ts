interface Site {
  baseUrl: string;
}

const withBaseUrl = (site: Site, url: string) =>
  `/${site.baseUrl}/${url}`.replace(/\/+/g, "/");

const withAssetUrl = (site: Site, url: string) =>
  withBaseUrl(site, "assets" + url);

export default {
  withBaseUrl,
  withAssetUrl,
};
