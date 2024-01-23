import { c as create_ssr_component, v as validate_component, a as subscribe, b as createEventDispatcher, d as add_attribute, s as setContext } from "../../chunks/index2.js";
import { b as base } from "../../chunks/paths.js";
import { p as page } from "../../chunks/stores.js";
import clsx from "clsx";
import { P as Popup } from "../../chunks/Popup.js";
import { B as Button } from "../../chunks/Button.js";
import { w as writable } from "../../chunks/index.js";
const Menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { openPopup = false } = $$props;
  if ($$props.openPopup === void 0 && $$bindings.openPopup && openPopup !== void 0)
    $$bindings.openPopup(openPopup);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${openPopup ? `${validate_component(Popup, "Popup").$$render(
      $$result,
      { variant: "menu", isOpen: openPopup },
      {
        isOpen: ($$value) => {
          openPopup = $$value;
          $$settled = false;
        }
      },
      {
        body: () => {
          return `<div class="w-full" slot="body">${validate_component(Button, "Button").$$render(
            $$result,
            {
              href: `${base}/instructons`,
              isButton: false,
              chooseType: "tertiary",
              icon: "arrowBlack",
              size: "md",
              message: "Instrunctions"
            },
            {},
            {}
          )}
			${validate_component(Button, "Button").$$render(
            $$result,
            {
              href: `${base}/bot-plan`,
              isButton: false,
              chooseType: "tertiary",
              icon: "arrowBlack",
              size: "md",
              message: "Get Surveyor-Bot"
            },
            {},
            {}
          )}</div>`;
        },
        header: () => {
          return `<div slot="header" class="flex items-center"><h2 class="text-blackPrimary text-base font-bold text-center">Menu</h2>
			${validate_component(Button, "Button").$$render(
            $$result,
            {
              chooseType: "only-icon",
              icon: "close",
              size: "sm",
              classProp: "ms-auto !w-fit"
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}` : ``}`;
  } while (!$$settled);
  return $$rendered;
});
const LogoNavbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_400_1185)"><path d="M26 32H11.3968V19.6395M26 7.27897H12.547C11.9118 7.27897 11.3968 7.79394 11.3968 8.42918V19.6395M11.3968 19.6395H26M11.3968 19.6395V2H2" stroke="#E0E7F1" stroke-opacity="0.5" stroke-width="3" stroke-miterlimit="16" stroke-linecap="square"></path></g><defs><filter id="filter0_b_400_1185" x="-49.5" y="-49.5" width="127" height="133" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="25"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_400_1185"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_400_1185" result="shape"></feBlend></filter></defs></svg>`;
});
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let route;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  let { isEditable = false } = $$props;
  let init = false;
  let openMenu = false;
  if ($$props.isEditable === void 0 && $$bindings.isEditable && isEditable !== void 0)
    $$bindings.isEditable(isEditable);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    route = $page.url.pathname;
    $$rendered = `<nav${add_attribute("class", clsx("w-full px-4 text-grayPrimary bg-blackPrimary bg-opacity-60 backdrop-blur-md z-50 opacity-0 fixed top-0 left-0", { "opacity-100": init }), 0)}><div class="flex border-b-[1px] border-green border-opacity-40 py-4"><button>${validate_component(LogoNavbar, "LogoNavbar").$$render($$result, {}, {}, {})}</button>

		${route.includes("/home") ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        spaceAll: false,
        chooseType: "only-icon",
        icon: "hamb",
        size: "md",
        classProp: "ml-auto"
      },
      {},
      {}
    )}` : ``}

		${route.includes("/create-vessel") ? `${validate_component(Button, "Button").$$render(
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
    )}` : ``}

		${route.includes("/vessel") ? `${!isEditable ? `${validate_component(Button, "Button").$$render(
      $$result,
      {
        spaceAll: false,
        chooseType: "only-icon",
        icon: "modify",
        size: "md",
        classProp: "ml-auto"
      },
      {},
      {}
    )}` : `${validate_component(Button, "Button").$$render(
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
    )}`}` : ``}</div></nav>

${validate_component(Menu, "Menu").$$render(
      $$result,
      { openPopup: openMenu },
      {
        openPopup: ($$value) => {
          openMenu = $$value;
          $$settled = false;
        }
      },
      {}
    )}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
const global = "";
const BgVectorGreen = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg${add_attribute("class", className, 0)} width="138" height="153" viewBox="0 0 138 153" xmlns="http://www.w3.org/2000/svg"><path d="M95.062 150.63C79.3181 158.674 58.9293 144.685 43.1672 131.992C27.4051 119.299 0.838988 95.3294 0.489387 74.4734C0.139786 53.6174 22.5742 17.2372 41.0696 6.85587C59.5651 -3.52548 95.3686 -0.626556 111.462 12.1853C127.556 24.9971 140.364 60.6526 137.631 83.7267" fill="url(#paint0_linear_410_529)"></path><defs><linearGradient id="paint0_linear_410_529" x1="69.2427" y1="0.551758" x2="69.2427" y2="153" gradientUnits="userSpaceOnUse"><stop stop-color="#9980FF"></stop><stop offset="1" stop-color="#FF80E6"></stop></linearGradient></defs></svg>`;
});
const BgVectorViolet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { className = "" } = $$props;
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  return `<svg${add_attribute("class", className, 0)} width="124" height="147" viewBox="0 0 124 147" xmlns="http://www.w3.org/2000/svg"><path d="M112.849 38.4842C123.827 55.0023 125.957 81.4306 120.358 99.1167C114.76 116.803 96.3946 139.545 79.2585 144.601C62.1225 149.657 30.4191 144.763 17.5423 129.45C4.66541 114.137 -4.16042 74.2985 1.9975 52.7248C8.15542 31.151 36.0145 2.3812 54.4898 0.00776351" fill="url(#paint0_linear_410_528)"></path><defs><linearGradient id="paint0_linear_410_528" x1="1.46544" y1="90.1332" x2="120.88" y2="57.377" gradientUnits="userSpaceOnUse"><stop stop-color="#80FF82"></stop><stop offset="1" stop-color="#80FDFF"></stop></linearGradient></defs></svg>`;
});
const Provider = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-blackPrimary min-h-[100svh] relative pt-[10svh] z-50">${validate_component(BgVectorViolet, "BgVectorViolet").$$render(
    $$result,
    {
      className: "absolute top-[20%] left-[20%] z-0 blur-[120px]"
    },
    {},
    {}
  )}
	${validate_component(BgVectorGreen, "BgVectorGreen").$$render(
    $$result,
    {
      className: "absolute bottom-[20%] right-[20%] z-0 blur-[120px]"
    },
    {},
    {}
  )}
	${slots.default ? slots.default({}) : ``}</div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let indexVelles = writable(0);
  let selectedVessel = writable({ name: "defaultValue" });
  setContext("indexVelles", indexVelles);
  setContext("selectedVessel", selectedVessel);
  $$unsubscribe_page();
  return `${validate_component(Provider, "Provider").$$render($$result, {}, {}, {
    default: () => {
      return `${$page.url.pathname !== `${base}/` ? `${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}` : ``}
	${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
