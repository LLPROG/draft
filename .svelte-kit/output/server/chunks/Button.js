import { c as create_ssr_component, b as createEventDispatcher, e as escape, n as null_to_empty, v as validate_component, d as add_attribute } from "./index2.js";
import clsx from "clsx";
import { I as IconsRender } from "./IconsRender.js";
const Button_svelte_svelte_type_style_lang = "";
const css = {
  code: ".secondary.svelte-piyljr{background:linear-gradient(\r\n			95.14deg,\r\n			rgba(133, 233, 108, 0.1) 0%,\r\n			rgba(61, 186, 111, 0.1) 100%\r\n		);box-shadow:0px 1px 3px rgba(0, 0, 0, 0.25)}.for-form.svelte-piyljr{background:linear-gradient(\r\n			95.14deg,\r\n			rgba(133, 233, 108, 0.7) 0%,\r\n			rgba(61, 186, 111, 0.7) 100%\r\n		);backdrop-filter:blur(10px);box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25), inset -4px -4px 4px rgba(0, 0, 0, 0.25),\r\n			inset 4px 4px 4px rgba(255, 255, 255, 0.25)}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { message = "" } = $$props;
  let { chooseType = "primary" } = $$props;
  let { classProp = "" } = $$props;
  let { icon = "" } = $$props;
  let { size = "sm" } = $$props;
  let { disabled = false } = $$props;
  let { isButton = true } = $$props;
  let { href = "" } = $$props;
  let { spaceAll = true } = $$props;
  createEventDispatcher();
  const style = {
    "px-4 flex justify-center items-center z-20": true,
    "w-full": spaceAll,
    "text-grayPrimary rounded-[12px] py-8": chooseType == "primary",
    "text-white secondary rounded-[12px] py-8": chooseType == "secondary",
    "text-blackPrimary font-[700] border-b border-b-black py-8": chooseType == "tertiary",
    "h-[56px] w-full absolute bottom-0 p-4 rounded-md bg-green bg-opacity-[10%] shadoww text-center text-white for-form": chooseType == "for-form",
    "w-fit": chooseType == "only-icon",
    "text-[1em]": size == "sm",
    "text-[1.5em]": size == "md",
    "text-[2.5em]": size == "lg",
    "pointer-events-none": disabled,
    [classProp]: true
  };
  if ($$props.message === void 0 && $$bindings.message && message !== void 0)
    $$bindings.message(message);
  if ($$props.chooseType === void 0 && $$bindings.chooseType && chooseType !== void 0)
    $$bindings.chooseType(chooseType);
  if ($$props.classProp === void 0 && $$bindings.classProp && classProp !== void 0)
    $$bindings.classProp(classProp);
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.isButton === void 0 && $$bindings.isButton && isButton !== void 0)
    $$bindings.isButton(isButton);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.spaceAll === void 0 && $$bindings.spaceAll && spaceAll !== void 0)
    $$bindings.spaceAll(spaceAll);
  $$result.css.add(css);
  return `${isButton ? `<button ${disabled ? "disabled" : ""} class="${escape(null_to_empty(clsx(style)), true) + " svelte-piyljr"}"><span class="${escape(null_to_empty(clsx({ hidden: chooseType == "only-icon" })), true) + " svelte-piyljr"}">${escape(message)}</span>
		${validate_component(IconsRender, "IconsRender").$$render($$result, { icon }, {}, {})}</button>` : `<a${add_attribute("href", href, 0)} class="${escape(null_to_empty(clsx(style)), true) + " svelte-piyljr"}"><span class="${escape(null_to_empty(clsx({ hidden: chooseType == "only-icon" })), true) + " svelte-piyljr"}">${escape(message)}</span>
		${validate_component(IconsRender, "IconsRender").$$render($$result, { icon }, {}, {})}</a>`}`;
});
export {
  Button as B
};
