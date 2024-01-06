const prerender = true;
const trailingSlash = "always";
function load({ url }) {
  return {
    url: url.pathname
  };
}
export {
  load,
  prerender,
  trailingSlash
};
