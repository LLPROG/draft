import { c as create_ssr_component, e as escape, n as null_to_empty } from "./index2.js";
import clsx from "clsx";
const Popup_svelte_svelte_type_style_lang = "";
const css = {
  code: ".popup.svelte-b3q763{border-radius:12px 0px 0px 0px;background:linear-gradient(95deg, rgba(133, 233, 108, 0.9) 0%, rgba(61, 186, 111, 0.8) 100%);backdrop-filter:blur(20px)}",
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
  return `<div class="${escape(null_to_empty(clsx("w-full fixed h-[100svh] top-0 right-0 left-0 bottom-0 z-50", { "backdrop-blur-sm": isOpen })), true) + " svelte-b3q763"}"><div class="${escape(
    null_to_empty(clsx("fixed px-4 w-full rounded-t-3xl popup z-50", {
      "min-h-[50vh] bottom-0 left-0 ": variant === "classic",
      "min-h-[90svh] bottom-0 left-5": variant === "menu"
    })),
    true
  ) + " svelte-b3q763"}"><div class="w-full py-4">${slots.header ? slots.header({}) : ``}</div>
		<div class="w-full py-2">${slots.body ? slots.body({}) : ``}</div></div>
</div>`;
});
export {
  Popup as P
};
