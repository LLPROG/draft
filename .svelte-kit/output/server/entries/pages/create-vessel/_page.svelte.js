import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../chunks/index2.js";
import { V as VesselForm } from "../../../chunks/VesselForm.js";
import { V as VesselsStorage } from "../../../chunks/store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_VesselsStorage;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => value);
  let isError = false;
  let isErrorName = false;
  let errors = [""];
  let vesselName = "";
  let start_value = [
    {
      name: "light-ship",
      value: 0,
      wasfocusedCount: false
    },
    {
      name: "d-fwd-pp",
      value: 0,
      wasfocusedCount: false
    },
    {
      name: "lbp",
      value: 0,
      wasfocusedCount: false
    },
    {
      name: "d-mid-pp",
      value: 0,
      wasfocusedCount: false
    },
    {
      name: "lbm",
      value: 0,
      wasfocusedCount: false
    },
    {
      name: "d-aft-pp",
      value: 0,
      wasfocusedCount: false
    },
    {
      name: "keel-thk",
      value: 0,
      wasfocusedCount: false
    }
  ];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    start_value.every((v) => v.wasfocusedCount === true);
    $$rendered = `${validate_component(VesselForm, "VesselForm").$$render(
      $$result,
      {
        isCreate: true,
        isError,
        isErrorName,
        vesselName,
        start_value,
        errors
      },
      {
        isError: ($$value) => {
          isError = $$value;
          $$settled = false;
        },
        isErrorName: ($$value) => {
          isErrorName = $$value;
          $$settled = false;
        },
        vesselName: ($$value) => {
          vesselName = $$value;
          $$settled = false;
        },
        start_value: ($$value) => {
          start_value = $$value;
          $$settled = false;
        },
        errors: ($$value) => {
          errors = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_VesselsStorage();
  return $$rendered;
});
export {
  Page as default
};
