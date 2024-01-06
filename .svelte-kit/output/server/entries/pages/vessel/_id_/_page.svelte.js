import { c as create_ssr_component, a as subscribe } from "../../../../chunks/index2.js";
import "clsx";
/* empty css                                                      *//* empty css                                                       */import { V as VesselsStorage } from "../../../../chunks/store.js";
import { p as page } from "../../../../chunks/stores.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $VesselsStorage, $$unsubscribe_VesselsStorage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => $VesselsStorage = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let vesselId = $page.params.id;
  $VesselsStorage.find((v) => v.id === vesselId);
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
