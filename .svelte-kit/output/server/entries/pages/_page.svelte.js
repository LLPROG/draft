import { c as create_ssr_component, e as escape, n as null_to_empty, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { L as LogoBigSheep } from "../../chunks/LogoBigSheep.js";
import clsx from "clsx";
const LoadingPage_svelte_svelte_type_style_lang = "";
const css = {
  code: "@keyframes svelte-1j25jg1-in{0%{transform:translateY(200%);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}65%{transform:translateY(-30%);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}100%{transform:translateY(0%);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}}@keyframes svelte-1j25jg1-out{100%{transform:translateY(-200%);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}35%{transform:translateY(30%);animation-timing-function:cubic-bezier(0.8, 0, 1, 1)}0%{transform:translateY(0%);animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}}.animate-in.svelte-1j25jg1{animation:svelte-1j25jg1-in 1s forwards}.animate-out.svelte-1j25jg1{animation:svelte-1j25jg1-out 1s forwards}",
  map: null
};
const LoadingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let logoRef;
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(clsx("z-50 w-full h-[100vh] relative bg-blackPrimary")), true) + " svelte-1j25jg1"}"><div class="animate-in absolute origin-center left-[40%] top-[30%] svelte-1j25jg1"${add_attribute("this", logoRef, 0)}>${validate_component(LogoBigSheep, "LogoBigSheep").$$render($$result, {}, {}, {})}</div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-full flex flex-col items-center justify-center">${validate_component(LoadingPage, "LoadingPage").$$render($$result, {}, {}, {})}</div>`;
});
export {
  Page as default
};
