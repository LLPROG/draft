import { c as create_ssr_component, b as createEventDispatcher, e as escape, n as null_to_empty, d as add_attribute } from "./index2.js";
import clsx from "clsx";
/* empty css                                     */const css = {
  code: ".disabled-custom.svelte-4stq26{background:#e0e7f129;backdrop-filter:blur(10px)}.inner-sh.svelte-4stq26{-webkit-box-shadow:inset 5px 5px 15px -4px #ffffff;box-shadow:inset 5px 5px 8px -4px #00000070}",
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
  return `<div class="${escape(null_to_empty(clsx("flex flex-col gap-0 justify-start text-whitePrimary", className)), true) + " svelte-4stq26"}">${label ? `<label${add_attribute("for", id, 0)}>${escape(label)}</label>` : ``}
	${type === "text" ? `<input placeholder=""${add_attribute("id", id, 0)}${add_attribute("name", id, 0)} ${disabled ? "disabled" : ""}${add_attribute("value", valueT, 0)} class="${escape(null_to_empty(clsx(style)), true) + " svelte-4stq26"}" type="text">` : `<input placeholder=""${add_attribute("id", id, 0)}${add_attribute("name", id, 0)} ${disabled ? "disabled" : ""}${add_attribute("value", valueN, 0)} class="${escape(null_to_empty(clsx(style)), true) + " svelte-4stq26"}" type="number">`}
</div>`;
});
export {
  Input as I
};
