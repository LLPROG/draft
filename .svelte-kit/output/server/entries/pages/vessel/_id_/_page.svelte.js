import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/index2.js";
import { b as base } from "../../../../chunks/paths.js";
import { p as page } from "../../../../chunks/stores.js";
import { V as VesselForm } from "../../../../chunks/VesselForm.js";
import { B as Button } from "../../../../chunks/Button.js";
import { d as defaultValue, V as VesselsStorage } from "../../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let vessel;
  let $VesselsStorage, $$unsubscribe_VesselsStorage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => $VesselsStorage = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let vesselId = $page.params.id;
  let isError = false;
  let isErrorName = false;
  let errors = [""];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    vessel = $VesselsStorage.find((v) => v.id === vesselId) || defaultValue;
    $$rendered = `<div class="w-full">${validate_component(VesselForm, "VesselForm").$$render(
      $$result,
      {
        isCreate: true,
        start_value: vessel.start_value,
        isError,
        isErrorName,
        vesselName: vessel.name,
        errors
      },
      {
        start_value: ($$value) => {
          vessel.start_value = $$value;
          $$settled = false;
        },
        isError: ($$value) => {
          isError = $$value;
          $$settled = false;
        },
        isErrorName: ($$value) => {
          isErrorName = $$value;
          $$settled = false;
        },
        vesselName: ($$value) => {
          vessel.name = $$value;
          $$settled = false;
        },
        errors: ($$value) => {
          errors = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	${validate_component(Button, "Button").$$render(
      $$result,
      {
        isButton: false,
        href: `${base}/vessel/${vesselId}/survey`,
        classProp: "flex w-full",
        message: "Survey",
        chooseType: "primary",
        icon: "plus",
        size: "lg"
      },
      {},
      {}
    )}</div>`;
  } while (!$$settled);
  $$unsubscribe_VesselsStorage();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
