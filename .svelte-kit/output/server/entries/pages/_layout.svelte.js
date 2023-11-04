import { c as create_ssr_component, a as subscribe, b as createEventDispatcher, v as validate_component, s as setContext } from "../../chunks/index2.js";
import { p as page } from "../../chunks/stores.js";
import { B as Button } from "../../chunks/Button.js";
import { w as writable } from "../../chunks/index.js";
const global = "";
const LogoNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div><svg width="29" height="35" viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 32.8201H12.3175C12.0252 32.8201 11.7884 32.5832 11.7884 32.291V20.1217M27 7.42328H12.3175C12.0252 7.42328 11.7884 7.66017 11.7884 7.95238V20.1217M11.7884 20.1217H27M11.7884 20.1217V2.5291C11.7884 2.23689 11.5515 2 11.2593 2H2" stroke="#85E96C" stroke-opacity="0.6" stroke-width="2.76001" stroke-linecap="round"></path></svg></div>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let route;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  console.log("route", route);
  route = $page.url.pathname;
  $$unsubscribe_page();
  return `<nav class="w-full h-[12vh] p-4 text-grayPrimary"><div class="flex border-b-[1px] border-green border-opacity-40 py-2"><button>${validate_component(LogoNavbar, "LogoNavbar").$$render($$result, {}, {}, {})}</button>
		${route.includes("/survey") ? `${validate_component(Button, "Button").$$render(
    $$result,
    {
      spaceAll: false,
      chooseType: "only-icon",
      icon: "save",
      size: "md",
      classProp: "ml-auto"
    },
    {},
    {}
  )}` : ``}</div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let indexVelles = writable(0);
  let selectedVessel = writable({ name: "defaultValue" });
  setContext("indexVelles", indexVelles);
  setContext("selectedVessel", selectedVessel);
  $$unsubscribe_page();
  return `<div class="bg-blackPrimary h-[100vh]">${$page.url.pathname !== "/" ? `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}` : ``}
	${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
