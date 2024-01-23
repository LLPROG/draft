import { c as create_ssr_component, e as escape, n as null_to_empty } from "./index2.js";
import clsx from "clsx";
const Transition_svelte_svelte_type_style_lang = "";
const css = {
  code: ".svelte-v3m6cj:blobal(.box){filter:blur(10px)}",
  map: null
};
const Transition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let init = false;
  $$result.css.add(css);
  return `<main class="${escape(null_to_empty(clsx("opacity-0 transition-opacity duration-500", { "opacity-100": init })), true) + " svelte-v3m6cj"}">${slots.default ? slots.default({}) : ``}
</main>`;
});
export {
  Transition as T
};
