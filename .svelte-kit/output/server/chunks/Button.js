import { c as create_ssr_component, v as validate_component, b as createEventDispatcher, e as escape, n as null_to_empty, f as add_attribute } from "./index2.js";
import clsx from "clsx";
/* empty css                                      */const ArrowIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.8 1.89961L12.225 10.2996C12.325 10.3996 12.3957 10.5079 12.437 10.6246C12.479 10.7413 12.5 10.8663 12.5 10.9996C12.5 11.1329 12.479 11.2579 12.437 11.3746C12.3957 11.4913 12.325 11.5996 12.225 11.6996L3.8 20.1246C3.56667 20.3579 3.275 20.4746 2.925 20.4746C2.575 20.4746 2.275 20.3496 2.025 20.0996C1.775 19.8496 1.65 19.5579 1.65 19.2246C1.65 18.8913 1.775 18.5996 2.025 18.3496L9.375 10.9996L2.025 3.64961C1.79167 3.41628 1.675 3.12894 1.675 2.78761C1.675 2.44561 1.8 2.14961 2.05 1.89961C2.3 1.64961 2.59167 1.52461 2.925 1.52461C3.25833 1.52461 3.55 1.64961 3.8 1.89961Z" fill="url(#paint0_linear_562_1535)" stroke="url(#paint1_linear_562_1535)" stroke-width="2"></path><defs><linearGradient id="paint0_linear_562_1535" x1="12.5" y1="20.4746" x2="0.704821" y2="19.8668" gradientUnits="userSpaceOnUse"><stop stop-color="#85E96C"></stop><stop offset="1" stop-color="#3DBA6F"></stop></linearGradient><linearGradient id="paint1_linear_562_1535" x1="12.5" y1="20.4746" x2="0.704821" y2="19.8668" gradientUnits="userSpaceOnUse"><stop stop-color="#85E96C"></stop><stop offset="1" stop-color="#3DBA6F"></stop></linearGradient></defs></svg>`;
});
const ArrowIconBlack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.48553 20.6047C1.22202 20.3412 1.09027 20.0292 1.09027 19.6688C1.09027 19.309 1.22202 18.9974 1.48553 18.7339L9.20621 11.0132L1.45918 3.26614C1.21324 3.0202 1.09027 2.71278 1.09027 2.34387C1.09027 1.97497 1.22202 1.65876 1.48553 1.39526C1.74903 1.13175 2.06102 1 2.4215 1C2.78127 1 3.09291 1.13175 3.35641 1.39526L12.2102 10.2754C12.3156 10.3808 12.3904 10.4949 12.4347 10.6179C12.4782 10.7409 12.5 10.8726 12.5 11.0132C12.5 11.1537 12.4782 11.2855 12.4347 11.4084C12.3904 11.5314 12.3156 11.6456 12.2102 11.751L3.33006 20.6311C3.08412 20.877 2.78127 21 2.4215 21C2.06102 21 1.74903 20.8682 1.48553 20.6047Z" fill="#414540" stroke="#414540" stroke-width="2"></path></svg>`;
});
const LessIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="32" height="12" viewBox="0 0 32 12" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_420_1935)"><path d="M6 5H26" stroke="url(#paint0_linear_420_1935)" stroke-width="5" stroke-linecap="round"></path></g><defs><filter id="filter0_d_420_1935" x="0.5" y="0.5" width="31" height="11" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_420_1935"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_420_1935" result="shape"></feBlend></filter><linearGradient id="paint0_linear_420_1935" x1="6" y1="5" x2="11.1415" y2="14.2547" gradientUnits="userSpaceOnUse"><stop stop-color="#85E96C"></stop><stop offset="1" stop-color="#3DBA6F"></stop></linearGradient></defs></svg>`;
});
const PlusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_585_661)"><path d="M15.3117 11.2424H21.702C22.695 11.2424 23.5 12.0474 23.5 13.0404C23.5 14.0334 22.695 14.8384 21.702 14.8384H15.3117V21.1781C15.3117 22.1843 14.496 23 13.4898 23C12.4836 23 11.6679 22.1843 11.6679 21.1781V14.8384H5.29798C4.30498 14.8384 3.5 14.0334 3.5 13.0404C3.5 12.0474 4.30498 11.2424 5.29798 11.2424H11.6679V4.8219C11.6679 3.81569 12.4836 3 13.4898 3C14.496 3 15.3117 3.81569 15.3117 4.8219V11.2424Z" fill="url(#paint0_linear_585_661)"></path><path d="M15.3117 11.2424H21.702C22.695 11.2424 23.5 12.0474 23.5 13.0404C23.5 14.0334 22.695 14.8384 21.702 14.8384H15.3117V21.1781C15.3117 22.1843 14.496 23 13.4898 23C12.4836 23 11.6679 22.1843 11.6679 21.1781V14.8384H5.29798C4.30498 14.8384 3.5 14.0334 3.5 13.0404C3.5 12.0474 4.30498 11.2424 5.29798 11.2424H11.6679V4.8219C11.6679 3.81569 12.4836 3 13.4898 3C14.496 3 15.3117 3.81569 15.3117 4.8219V11.2424Z" stroke="url(#paint1_linear_585_661)" stroke-width="0.5"></path></g><defs><filter id="filter0_d_585_661" x="0.25" y="0.75" width="26.5" height="26.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_585_661"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_585_661" result="shape"></feBlend></filter><linearGradient id="paint0_linear_585_661" x1="3.5" y1="3" x2="25.1248" y2="4.94624" gradientUnits="userSpaceOnUse"><stop stop-color="#85E96C"></stop><stop offset="1" stop-color="#3DBA6F"></stop></linearGradient><linearGradient id="paint1_linear_585_661" x1="3.5" y1="3" x2="25.1248" y2="4.94624" gradientUnits="userSpaceOnUse"><stop stop-color="#85E96C"></stop><stop offset="1" stop-color="#3DBA6F"></stop></linearGradient></defs></svg>`;
});
const SaveIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="33" height="36" viewBox="0 0 33 36" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_d_518_1062)"><g filter="url(#filter1_d_518_1062)"><path d="M13.3201 21.1367V28.8036C13.3201 29.7217 14.4247 30.2036 15.1133 29.5861L27.6491 18.344C28.102 17.9379 28.1188 17.2408 27.686 16.8139L15.1502 4.44856C14.4748 3.7824 13.3201 4.2542 13.3201 5.19629V13.2174C5 13.2174 5 21.1367 5 21.1367" stroke="url(#paint0_linear_518_1062)" stroke-width="4" stroke-linecap="round"></path></g></g><defs><filter id="filter0_d_518_1062" x="0" y="0.138184" width="33" height="35.7236" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_518_1062"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_518_1062" result="shape"></feBlend></filter><filter id="filter1_d_518_1062" x="0" y="0.138184" width="33" height="35.7236" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="1"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="out"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_518_1062"></feBlend><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_518_1062" result="shape"></feBlend></filter><linearGradient id="paint0_linear_518_1062" x1="5" y1="4.13672" x2="29.9087" y2="6.14093" gradientUnits="userSpaceOnUse"><stop stop-color="#85E96C"></stop><stop offset="1" stop-color="#3DBA6F"></stop></linearGradient></defs></svg>`;
});
const StarIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L14.6942 8.2918H23.4127L16.3593 13.4164L19.0534 21.7082L12 16.5836L4.94658 21.7082L7.64074 13.4164L0.587322 8.2918H9.30583L12 0Z" fill="#85E96C"></path></svg>`;
});
const IconsRender = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "plus" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  return `${icon === "plus" ? `<span class="ms-auto">${validate_component(PlusIcon, "PlusIcon").$$render($$result, {}, {}, {})}</span>` : ``}
${icon === "star" ? `<span class="ms-auto">${validate_component(StarIcon, "StarIcon").$$render($$result, {}, {}, {})}</span>` : ``}
${icon === "arrow" ? `<span class="ms-auto">${validate_component(ArrowIcon, "ArrowIcon").$$render($$result, {}, {}, {})}</span>` : ``}
${icon === "arrowBlack" ? `<span class="ms-auto">${validate_component(ArrowIconBlack, "ArrowIconBlack").$$render($$result, {}, {}, {})}</span>` : ``}
${icon === "less" ? `<span class="ms-auto">${validate_component(LessIcon, "LessIcon").$$render($$result, {}, {}, {})}</span>` : ``}
${icon === "save" ? `<span class="ms-auto">${validate_component(SaveIcon, "SaveIcon").$$render($$result, {}, {}, {})}</span>` : ``}`;
});
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
    "px-4 flex justify-center items-center": true,
    "w-full": spaceAll,
    "text-grayPrimary rounded-[12px] py-8": chooseType == "primary",
    "text-white secondary rounded-[12px] py-8": chooseType == "secondary",
    "text-black border-b border-b-black py-8": chooseType == "tertiary",
    "h-[56px] w-full absolute bottom-0 p-4 rounded-md bg-green bg-opacity-[10%] shadoww text-center text-white for-form": chooseType == "for-form",
    "w-fit": chooseType == "only-icon",
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
