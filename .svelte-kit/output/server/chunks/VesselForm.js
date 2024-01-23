import { c as create_ssr_component, f as each, e as escape, b as createEventDispatcher, v as validate_component } from "./index2.js";
import { I as Input } from "./Input.js";
import { B as Button } from "./Button.js";
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
  let { start_value = [
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
  ] } = $$props;
  let { vesselName = "" } = $$props;
  let { isError = false } = $$props;
  let { isErrorName = false } = $$props;
  let { wasNameFocused = false } = $$props;
  let { isCreate = false } = $$props;
  let { redirect = "" } = $$props;
  let { disabled = false } = $$props;
  let { errors = [""] } = $$props;
  if ($$props.start_value === void 0 && $$bindings.start_value && start_value !== void 0)
    $$bindings.start_value(start_value);
  if ($$props.vesselName === void 0 && $$bindings.vesselName && vesselName !== void 0)
    $$bindings.vesselName(vesselName);
  if ($$props.isError === void 0 && $$bindings.isError && isError !== void 0)
    $$bindings.isError(isError);
  if ($$props.isErrorName === void 0 && $$bindings.isErrorName && isErrorName !== void 0)
    $$bindings.isErrorName(isErrorName);
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
	<div class="relative grid grid-cols-2 gap-4 pt-2">${each(start_value, ({ name, value, wasfocusedCount }) => {
      return `${validate_component(Input, "Input").$$render(
        $$result,
        {
          id: name,
          label: name,
          type: "number",
          disabled,
          isError: !wasfocusedCount && isError,
          wasfocused: wasfocusedCount,
          valueN: value
        },
        {
          wasfocused: ($$value) => {
            wasfocusedCount = $$value;
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
export {
  VesselForm as V
};
