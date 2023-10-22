import { c as create_ssr_component, d as createEventDispatcher, e as escape, n as null_to_empty, f as add_attribute, g as each, v as validate_component, a as validate_store, b as subscribe } from "../../../chunks/index2.js";
import clsx from "clsx";
/* empty css                                                   */import { B as Button } from "../../../chunks/Button.js";
import { d as defaultValue, V as VesselsStorage } from "../../../chunks/store.js";
const css = {
  code: ".disabled-custom.s-kNPWhOPyQHCt{background:#e0e7f129;backdrop-filter:blur(10px)}.inner-sh.s-kNPWhOPyQHCt{-webkit-box-shadow:inset 5px 5px 15px -4px #ffffff;box-shadow:inset 5px 5px 8px -4px #00000070}",
  map: null
};
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let style;
  createEventDispatcher();
  let { label = "" } = $$props;
  let { className = "" } = $$props;
  let { id = "" } = $$props;
  let { valueN = NaN } = $$props;
  let { valueT = "" } = $$props;
  let { disabled = false } = $$props;
  let { type = "text" } = $$props;
  let { isError = false } = $$props;
  let { isErrorName = false } = $$props;
  let { wasfocused = false } = $$props;
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.valueN === void 0 && $$bindings.valueN && valueN !== void 0)
    $$bindings.valueN(valueN);
  if ($$props.valueT === void 0 && $$bindings.valueT && valueT !== void 0)
    $$bindings.valueT(valueT);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.isError === void 0 && $$bindings.isError && isError !== void 0)
    $$bindings.isError(isError);
  if ($$props.isErrorName === void 0 && $$bindings.isErrorName && isErrorName !== void 0)
    $$bindings.isErrorName(isErrorName);
  if ($$props.wasfocused === void 0 && $$bindings.wasfocused && wasfocused !== void 0)
    $$bindings.wasfocused(wasfocused);
  $$result.css.add(css);
  style = {
    "p-4 inner-sh rounded-xl bg-green bg-opacity-[10%] shadoww text-center border-0 focus:outline focus:outline-[2px] outline-greenAccent": true,
    "outline outline-[2px] outline-red-400": isError && !wasfocused || isErrorName,
    "disabled-custom": disabled
  };
  return `<div class="${escape(null_to_empty(clsx("flex flex-col gap-0 justify-start text-whitePrimary", className)), true) + " s-kNPWhOPyQHCt"}">${label ? `<label${add_attribute("for", id, 0)}>${escape(label)}</label>` : ``}
	${type === "text" ? `<input placeholder=""${add_attribute("id", id, 0)}${add_attribute("name", id, 0)} ${disabled ? "disabled" : ""} class="${escape(null_to_empty(clsx(style)), true) + " s-kNPWhOPyQHCt"}" type="text"${add_attribute("value", valueT, 0)}>` : `<input placeholder=""${add_attribute("id", id, 0)}${add_attribute("name", id, 0)} ${disabled ? "disabled" : ""} class="${escape(null_to_empty(clsx(style)), true) + " s-kNPWhOPyQHCt"}" type="number"${add_attribute("value", valueN, 0)}>`}
</div>`;
});
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
        disabled,
        id: "name",
        label: "Vessel",
        type: "text",
        wasfocused: wasNameFocused,
        isError,
        isErrorName,
        valueT: vesselName
      },
      {
        wasfocused: ($$value) => {
          wasNameFocused = $$value;
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
          disabled,
          type: "number",
          id: name,
          label: name,
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

	${isError ? `${validate_component(VesselFormErrors, "VesselFormErrors").$$render(
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
  validate_store(VesselsStorage, "VesselsStorage");
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
