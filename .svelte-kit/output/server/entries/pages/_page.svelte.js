import { c as create_ssr_component, f as add_attribute, v as validate_component } from "../../chunks/index2.js";
import { L as LogoMain } from "../../chunks/LogoMain.js";
const LogoBigSheep = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { divisor = 1 } = $$props;
  if ($$props.divisor === void 0 && $$bindings.divisor && divisor !== void 0)
    $$bindings.divisor(divisor);
  return `<div class="h-full"><svg${add_attribute("width", 107 / divisor, 0)}${add_attribute("height", 400 / divisor, 0)} viewBox="0 0 107 400" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M63.0814 384.221V342.284H44.5174V384.221H63.0814Z" fill="#85E96C"></path><path d="M97.8139 296.154C98.0136 248.227 98.293 140.271 97.8139 91.8638C97.3349 43.4572 68.8702 11.7852 54.6977 2C20.2047 25.9637 10.7829 71.8941 10.3837 91.8638V296.154M97.8139 296.154H105V320.118L97.8139 323.113M97.8139 296.154H10.3837M63.0814 384.221H73.2616L82.2442 326.109L97.8139 323.113M63.0814 384.221V342.284H44.5174V384.221M63.0814 384.221H44.5174M44.5174 384.221H34.3372L24.7558 326.109L10.3837 323.113M10.3837 296.154H2V320.118L10.3837 323.113M97.8139 323.113C97.2151 341.086 88.4721 381.225 82.2442 398H24.7558C20.9632 382.024 10.3837 344.681 10.3837 323.113M24.157 117.325V91.8638H82.843V117.325M24.157 117.325V142.787H82.843V117.325M24.157 117.325H82.843M24.157 185.322V159.561H82.843V185.322M24.157 185.322V211.083H82.843V185.322M24.157 185.322H82.843M82.843 250.923V276.983H24.157V250.923M82.843 250.923V224.862H24.157V250.923M82.843 250.923H24.157" stroke="#85E96C" stroke-width="2.66868"></path></svg></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="w-full h-full flex flex-col items-center justify-center gap-2"><a data-sveltekit-preload-data="tap" href="/home" class="z-50 flex flex-col gap-2 items-center">${validate_component(LogoBigSheep, "LogoBigSheep").$$render($$result, {}, {}, {})}
		${validate_component(LogoMain, "LogoMain").$$render($$result, {}, {}, {})}</a></div>`;
});
export {
  Page as default
};
