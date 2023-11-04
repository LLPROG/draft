import { c as create_ssr_component, a as validate_store, b as subscribe } from "../../../../chunks/index2.js";
import "clsx";
/* empty css                                                      *//* empty css                                                       */import { V as VesselsStorage } from "../../../../chunks/store.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $VesselsStorage, $$unsubscribe_VesselsStorage;
  let $page, $$unsubscribe_page;
  validate_store(VesselsStorage, "VesselsStorage");
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => $VesselsStorage = value);
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let vesselName = $page.params.name;
  $VesselsStorage.find((v) => v.name === vesselName);
  console.log("vesselName", vesselName);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="w-full h-fit bg-blackPrimary">${`<p>Loading...</p>`}</div>`;
  } while (!$$settled);
  $$unsubscribe_VesselsStorage();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
