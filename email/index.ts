/**
 * @param {string} email - email address
 * @param {string} fingerprint - as listed on keys.openpgp.org
 */
export default (email: string, fingerprint: string) => {
  `<a href="${email}">${email}</a>
  (<a href="https://keys.openpgp.org/vks/v1/by-fingerprint/${fingerprint}" rel="publickey" title="${email}" type="text/plain">PGP</a>)`;
};
