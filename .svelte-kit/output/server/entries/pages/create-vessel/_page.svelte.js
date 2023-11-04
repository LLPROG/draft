import { c as create_ssr_component, d as each, e as escape, b as createEventDispatcher, v as validate_component, a as subscribe } from "../../../chunks/index2.js";
import { I as Input } from "../../../chunks/Input.js";
import { B as Button } from "../../../chunks/Button.js";
import { d as defaultValue, V as VesselsStorage } from "../../../chunks/store.js";
const VesselFormErrors = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { errors = [""] } = $$props;
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  return `<div class="w-full p-2 flex flex-col gap-2 items-center">${each(errors, (error) => {
    return `<p class="text-red-500 text-sm">${escape(error)}</p>`;
  })}</div>`;
});
const VesselForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { vessel = defaultValue } = $$props;
  let { isError = false } = $$props;
  let { isErrorName = false } = $$props;
  let { vesselName = "" } = $$props;
  let { wasNameFocused = false } = $$props;
  let { isCreate = false } = $$props;
  let { redirect = "" } = $$props;
  let { disabled = false } = $$props;
  let { errors = [""] } = $$props;
  if ($$props.vessel === void 0 && $$bindings.vessel && vessel !== void 0)
    $$bindings.vessel(vessel);
  if ($$props.isError === void 0 && $$bindings.isError && isError !== void 0)
    $$bindings.isError(isError);
  if ($$props.isErrorName === void 0 && $$bindings.isErrorName && isErrorName !== void 0)
    $$bindings.isErrorName(isErrorName);
  if ($$props.vesselName === void 0 && $$bindings.vesselName && vesselName !== void 0)
    $$bindings.vesselName(vesselName);
  if ($$props.wasNameFocused === void 0 && $$bindings.wasNameFocused && wasNameFocused !== void 0)
    $$bindings.wasNameFocused(wasNameFocused);
  if ($$props.isCreate === void 0 && $$bindings.isCreate && isCreate !== void 0)
    $$bindings.isCreate(isCreate);
  if ($$props.redirect === void 0 && $$bindings.redirect && redirect !== void 0)
    $$bindings.redirect(redirect);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.errors === void 0 && $$bindings.errors && errors !== void 0)
    $$bindings.errors(errors);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form class="w-full p-4">${validate_component(Input, "Input").$$render(
      $$result,
      {
        id: "name",
        label: "Vessel",
        type: "text",
        disabled,
        wasfocused: wasNameFocused,
        isError: isErrorName,
        valueT: vesselName
      },
      {
        wasfocused: ($$value) => {
          wasNameFocused = $$value;
          $$settled = false;
        },
        isError: ($$value) => {
          isErrorName = $$value;
          $$settled = false;
        },
        valueT: ($$value) => {
          vesselName = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	<div class="relative grid grid-cols-2 gap-4 pt-2">${each(vessel.start_value, ({ name, value, wasfocusedCount }) => {
      return `${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: name,
          label: name,
          type: "number",
          disabled,
          wasfocused: wasfocusedCount,
          isError,
          valueN: value
        },
        {
          wasfocused: ($$value) => {
            wasfocusedCount = $$value;
            $$settled = false;
          },
          isError: ($$value) => {
            isError = $$value;
            $$settled = false;
          },
          valueN: ($$value) => {
            value = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}

		<div class="w-full relative">${isCreate ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        spaceAll: false,
        chooseType: "for-form",
        message: "Save",
        icon: ""
      },
      {},
      {}
    )}` : ``}

			${redirect ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        isButton: false,
        spaceAll: false,
        href: redirect,
        chooseType: "for-form",
        message: "Go back",
        icon: ""
      },
      {},
      {}
    )}` : ``}</div></div>

	${isError || isErrorName ? `${validate_component(VesselFormErrors, "VesselFormErrors").$$render(
      $$result,
      { errors },
      {
        errors: ($$value) => {
          errors = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</form>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_VesselsStorage;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => value);
  let vesselName = "";
  let isError = false;
  let isErrorName = false;
  let errors = [""];
  let vessel = defaultValue;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    vessel.start_value.every((v) => v.wasfocusedCount === true);
    $$rendered = `${validate_component(VesselForm, "VesselForm").$$render(
      $$result,
      {
        isCreate: true,
        isError,
        isErrorName,
        vesselName,
        vessel,
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
        vessel: ($$value) => {
          vessel = $$value;
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
