import { c as create_ssr_component, a as validate_store, b as subscribe } from "../../../../../chunks/index2.js";
import "clsx";
/* empty css                                                          *//* empty css                                                         */import { a as defaultInitialData, b as defaultCategories, c as defaultDraftsA, e as defaultDraftsB, f as defaultWeight, V as VesselsStorage } from "../../../../../chunks/store.js";
import { p as page } from "../../../../../chunks/stores.js";
const ResultCard_svelte_svelte_type_style_lang = "";
const RadioList_svelte_svelte_type_style_lang = "";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let vessel;
  let $VesselsStorage, $$unsubscribe_VesselsStorage;
  let $page, $$unsubscribe_page;
  validate_store(VesselsStorage, "VesselsStorage");
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => $VesselsStorage = value);
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let vesselName = $page.params.name;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    vessel = $VesselsStorage.find((v) => v.name === vesselName) || void 0;
    [
      vessel?.start_value[1]?.value,
      vessel?.start_value[3]?.value,
      vessel?.start_value[5]?.value
    ];
    vessel?.initialData || defaultInitialData;
    vessel?.categories || defaultCategories;
    vessel?.draftsA || defaultDraftsA;
    vessel?.draftsB || defaultDraftsB;
    vessel?.weight || defaultWeight;
    vessel?.waterDensityValue || 0;
    vessel?.stage ?? "";
    $$rendered = `${`<div>loading...</div>`}`;
  } while (!$$settled);
  $$unsubscribe_VesselsStorage();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
