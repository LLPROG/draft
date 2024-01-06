import { c as create_ssr_component, e as escape, n as null_to_empty } from "./index2.js";
import clsx from "clsx";
const Popup_svelte_svelte_type_style_lang = "";
const css = {
  code: ".popup.svelte-372hok{background:linear-gradient(\r\n			95.14deg,\r\n			rgba(133, 233, 108, 0.7) 0%,\r\n			rgba(61, 186, 111, 0.7) 100%\r\n		);backdrop-filter:blur(10px)}",
  map: null
};
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  let { variant = "classic" } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  $$result.css.add(css);
  return `<div class="w-full fixed top-0 right-0 left-0 bottom-0 z-50"><div class="${escape(
    null_to_empty(clsx("fixed px-4 w-full rounded-t-3xl popup", {
      "min-h-[50vh] bottom-0 left-0 ": variant === "classic",
      "min-h-[90svh] bottom-0 left-5": variant === "menu"
    })),
    true
  ) + " svelte-372hok"}"><div class="w-full py-4">${slots.header ? slots.header({}) : ``}</div>
		<div class="w-full py-2">${slots.body ? slots.body({}) : ``}</div></div>
</div>`;
});
export {
  Popup as P
};
