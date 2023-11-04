import { c as create_ssr_component, d as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { L as LogoBigSheep } from "../../chunks/LogoBigSheep.js";
import { L as LogoMain } from "../../chunks/LogoMain.js";
import { b as base } from "../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-full flex flex-col items-center justify-center gap-2"><a data-sveltekit-preload-data="tap"${add_attribute("href", `${base}/home`, 0)} class="z-50 flex flex-col gap-2 items-center">${validate_component(LogoBigSheep, "LogoBigSheep").$$render($$result, {}, {}, {})}
		${validate_component(LogoMain, "LogoMain").$$render($$result, {}, {}, {})}</a></div>`;
});
export {
  Page as default
};
