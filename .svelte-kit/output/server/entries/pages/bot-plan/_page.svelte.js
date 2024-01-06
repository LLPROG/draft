import { c as create_ssr_component, b as createEventDispatcher, e as escape, n as null_to_empty, v as validate_component, d as add_attribute, f as each } from "../../../chunks/index2.js";
import { b as base } from "../../../chunks/paths.js";
import clsx from "clsx";
import { I as IconsRender } from "../../../chunks/IconsRender.js";
const BotPlanIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="50" height="65" viewBox="0 0 50 65" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_529_1763)"><g filter="url(#filter0_i_529_1763)"><rect width="50" height="65" rx="12" fill="#414540"></rect></g><path d="M0 51.5187H14.3333H25.5926M25.5926 51.5187C41 51.5187 41 29.0001 25.5926 29C10.1852 28.9999 9.59259 51.5187 25.5926 51.5187ZM25.5926 51.5187H50" stroke="url(#paint0_linear_529_1763)" stroke-width="3.55556" stroke-linecap="round"></path></g><defs><filter id="filter0_i_529_1763" x="0" y="0" width="50" height="67" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset dy="2"></feOffset><feGaussianBlur stdDeviation="1.5"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0.520125 0 0 0 0 0.9125 0 0 0 0 0.422031 0 0 0 0.3 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow_529_1763"></feBlend></filter><linearGradient id="paint0_linear_529_1763" x1="0" y1="29" x2="52.4072" y2="39.4727" gradientUnits="userSpaceOnUse"><stop stop-color="#85E96C"></stop><stop offset="1" stop-color="#3DBA6F"></stop></linearGradient><clipPath id="clip0_529_1763"><rect width="50" height="65" fill="white"></rect></clipPath></defs></svg>`;
});
const ButtonPlan_svelte_svelte_type_style_lang = "";
const css = {
  code: ".plan.svelte-52hhok{border-radius:0.75rem;background:linear-gradient(95deg, rgba(133, 233, 108, 0.1) 0%, rgba(61, 186, 111, 0.1) 100%)}.plan-active.svelte-52hhok{border-radius:0.75rem;color:black;background:linear-gradient(\r\n			95.14deg,\r\n			rgba(133, 233, 108, 0.7) 0%,\r\n			rgba(61, 186, 111, 0.7) 100%\r\n		);backdrop-filter:blur(10px);scale:1.08}",
  map: null
};
const ButtonPlan = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isActive = false } = $$props;
  createEventDispatcher();
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  $$result.css.add(css);
  return `<button class="${escape(null_to_empty(clsx("w-full flex items-center px-4 py-2 relative", { "plan-active": isActive, plan: !isActive })), true) + " svelte-52hhok"}"><div class="absolute left-4 -top-5">${validate_component(BotPlanIcon, "BotPlanIcon").$$render($$result, {}, {}, {})}</div>
	<div class="w-full">${slots.content ? slots.content({}) : ``}</div>
	${validate_component(IconsRender, "IconsRender").$$render($$result, { icon: "arrow" }, {}, {})}
</button>`;
});
const BotPlanCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let iconSecond;
  let iconThird;
  let { title = "3rd MATE PLAN" } = $$props;
  let { price = "10$" } = $$props;
  let { isSecondActive = false } = $$props;
  let { isThirdActive = false } = $$props;
  let { limitation = "" } = $$props;
  let { isActive = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.isSecondActive === void 0 && $$bindings.isSecondActive && isSecondActive !== void 0)
    $$bindings.isSecondActive(isSecondActive);
  if ($$props.isThirdActive === void 0 && $$bindings.isThirdActive && isThirdActive !== void 0)
    $$bindings.isThirdActive(isThirdActive);
  if ($$props.limitation === void 0 && $$bindings.limitation && limitation !== void 0)
    $$bindings.limitation(limitation);
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0)
    $$bindings.isActive(isActive);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    iconSecond = isSecondActive ? "check" : "uncheck";
    iconThird = isThirdActive ? "check" : "uncheck";
    $$rendered = `${validate_component(ButtonPlan, "ButtonPlan").$$render(
      $$result,
      { isActive },
      {
        isActive: ($$value) => {
          isActive = $$value;
          $$settled = false;
        }
      },
      {
        content: () => {
          return `<div class="w-full" slot="content"><div class="w-full flex items-center"><h3 class="pl-16">${escape(title)}</h3>
			<p class="pl-2 ml-auto text-[1.875em] font-bold">${escape(price)}</p></div>
		<div class="flex flex-col gap-4"><div class="flex items-center gap-2 text-[0.8125em]">${validate_component(IconsRender, "IconsRender").$$render($$result, { icon: "check" }, {}, {})}
				<p>Unlimited manual data entries</p></div>
			<div${add_attribute("class", clsx("flex items-center gap-2 text-[0.8125em]", { "opacity-50": !isSecondActive }), 0)}>${validate_component(IconsRender, "IconsRender").$$render($$result, { icon: iconSecond }, {}, {})}
				<p>Share Draft Survey results</p></div>
			<div${add_attribute("class", clsx("flex items-center gap-2 text-[0.8125em]", { "opacity-50": !isThirdActive }), 0)}>${validate_component(IconsRender, "IconsRender").$$render($$result, { icon: iconThird }, {}, {})}
				<div class="w-full text-start"><p>Upload CSV files for quick entry</p>
					${limitation !== "" ? `<p class="text-[0.5em]">${escape(`(${limitation})`)}</p>` : ``}</div></div></div></div>`;
        }
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let features = [
    {
      title: "3rd MATE PLAN",
      price: "10$",
      isSecondActive: false,
      isThirdActive: false
    },
    {
      title: "2rd MATE PLAN",
      price: "30$",
      isSecondActive: true,
      isThirdActive: true,
      limitation: "only for 3 vessels"
    },
    {
      title: "CH. MATE PLAN",
      price: "50$",
      isSecondActive: true,
      isThirdActive: true,
      limitation: "UNLIMITED"
    }
  ];
  return `<div class="w-full flex flex-col justify-center items-center gap-4 text-grayPrimary text-center px-12 bg-blackPrimary"><h1>Surveyor Plans</h1>
	<img${add_attribute("src", `${base}/images/bot-icon.png`, 0)} alt="bot-icon">
	<p>Enter the hydrostatic tables datas and calculate any draft survey quickly and easily.</p>
	<h2>Plans</h2>
	<div class="w-full flex flex-col gap-10 py-6 mb-20">${each(features, (feature, index) => {
    return `${validate_component(BotPlanCard, "BotPlanCard").$$render(
      $$result,
      {
        title: feature.title,
        price: feature.price,
        isSecondActive: feature.isSecondActive,
        isThirdActive: feature.isThirdActive,
        limitation: feature.limitation,
        isActive: index === 1
      },
      {},
      {}
    )}`;
  })}</div></div>`;
});
export {
  Page as default
};
