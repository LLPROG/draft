import { c as create_ssr_component, a as subscribe } from "../../../chunks/index2.js";
import "papaparse";
import { V as VesselsStorage } from "../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_VesselsStorage;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => value);
  $$unsubscribe_VesselsStorage();
  return `<input type="file" accept=".csv">
`;
});
export {
  Page as default
};
