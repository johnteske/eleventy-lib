const base = (baseUrl: string, url: string) =>
  `/${baseUrl}/${url}`.replace(/\/+/g, "/");

const asset = (baseUrl: string, url: string) => base(baseUrl, "assets" + url);

export default {
  base,
  asset,
};
