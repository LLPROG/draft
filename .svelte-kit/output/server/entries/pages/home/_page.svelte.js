import { c as create_ssr_component, a as subscribe, g as getContext, v as validate_component, f as each } from "../../../chunks/index2.js";
import { V as VesselsStorage } from "../../../chunks/store.js";
import { B as Button } from "../../../chunks/Button.js";
import { P as Popup } from "../../../chunks/Popup.js";
import { b as base } from "../../../chunks/paths.js";
const LogoMain = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg width="192" height="163" viewBox="0 0 192 163" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_b_121_159)"><path d="M135.5 107H84.9974V64.9742M135.5 22.9485H86.1476C85.5123 22.9485 84.9974 23.4635 84.9974 24.0987V64.9742M84.9974 64.9742H135.5M84.9974 64.9742V5H52.5" stroke="#E0E7F1" stroke-opacity="0.5" stroke-width="10" stroke-miterlimit="16" stroke-linecap="square"></path></g><g filter="url(#filter1_b_121_159)"><path d="M4.86078 146.64H18.7808V150.92H4.86078V146.64ZM5.26078 158.64H21.0608V163H0.0607814V135H20.5008V139.36H5.26078V158.64ZM26.5164 153.96V149.8H37.5164V153.96H26.5164ZM45.467 163V135H57.707C60.747 135 63.4137 135.587 65.707 136.76C68.0004 137.933 69.787 139.56 71.067 141.64C72.347 143.72 72.987 146.173 72.987 149C72.987 151.8 72.347 154.253 71.067 156.36C69.787 158.44 68.0004 160.067 65.707 161.24C63.4137 162.413 60.747 163 57.707 163H45.467ZM50.667 158.6H57.467C59.5737 158.6 61.387 158.2 62.907 157.4C64.4537 156.6 65.6404 155.48 66.467 154.04C67.3204 152.6 67.747 150.92 67.747 149C67.747 147.053 67.3204 145.373 66.467 143.96C65.6404 142.52 64.4537 141.4 62.907 140.6C61.387 139.8 59.5737 139.4 57.467 139.4H50.667V158.6ZM80.5139 163V135H92.0339C94.5139 135 96.6339 135.4 98.3939 136.2C100.181 137 101.554 138.147 102.514 139.64C103.474 141.133 103.954 142.907 103.954 144.96C103.954 147.013 103.474 148.787 102.514 150.28C101.554 151.747 100.181 152.88 98.3939 153.68C96.6339 154.453 94.5139 154.84 92.0339 154.84H83.3939L85.7139 152.48V163H80.5139ZM98.8339 163L91.7539 152.84H97.3139L104.434 163H98.8339ZM85.7139 153.04L83.3939 150.56H91.7939C94.0872 150.56 95.8072 150.067 96.9539 149.08C98.1272 148.093 98.7139 146.72 98.7139 144.96C98.7139 143.173 98.1272 141.8 96.9539 140.84C95.8072 139.88 94.0872 139.4 91.7939 139.4H83.3939L85.7139 136.84V153.04ZM107.812 163L120.412 135H125.532L138.172 163H132.732L121.892 137.76H123.972L113.172 163H107.812ZM113.612 156.52L115.012 152.44H130.132L131.532 156.52H113.612ZM148.493 147.88H162.453V152.28H148.493V147.88ZM148.933 163H143.733V135H164.173V139.36H148.933V163ZM177.077 163V139.4H167.797V135H191.557V139.4H182.277V163H177.077Z" fill="#E0E7F1" fill-opacity="0.5"></path></g><defs><filter id="filter0_b_121_159" x="-2.5" y="-50" width="193" height="212" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="25"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_121_159"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_121_159" result="shape"></feBlend></filter><filter id="filter1_b_121_159" x="-49.9392" y="85" width="291.496" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feGaussianBlur in="BackgroundImageFix" stdDeviation="25"></feGaussianBlur><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_121_159"></feComposite><feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_121_159" result="shape"></feBlend></filter></defs></svg>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $VesselsStorage, $$unsubscribe_VesselsStorage;
  let $$unsubscribe_indexVelles;
  let $selectedVessel, $$unsubscribe_selectedVessel;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => $VesselsStorage = value);
  let { openPopup = false } = $$props;
  let indexVelles = getContext("indexVelles");
  $$unsubscribe_indexVelles = subscribe(indexVelles, (value) => value);
  let selectedVessel = getContext("selectedVessel");
  $$unsubscribe_selectedVessel = subscribe(selectedVessel, (value) => $selectedVessel = value);
  if ($$props.openPopup === void 0 && $$bindings.openPopup && openPopup !== void 0)
    $$bindings.openPopup(openPopup);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="w-full text-green px-10">
	<div class="top-section flex justify-center items-center py-7">${validate_component(LogoMain, "LogoMain").$$render($$result, {}, {}, {})}</div>

	${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: openPopup,
        href: `${base}/create-vessel`,
        classProp: "flex w-full",
        message: "My Fleet",
        chooseType: "primary",
        icon: "plus",
        size: "md",
        isButton: false
      },
      {},
      {}
    )}

	${validate_component(Button, "Button").$$render(
      $$result,
      {
        classProp: "flex w-full",
        message: "ADD MOCK",
        chooseType: "secondary",
        icon: "",
        size: "md",
        isButton: true
      },
      {},
      {}
    )}

	<div class="w-full overflow-y-scroll max-h-[40vh] py-6 gap-2 px-5 flex flex-col justify-start">${each($VesselsStorage, (vessel, i) => {
      return `${vessel.name !== "defaultValue" ? `${validate_component(Button, "Button").$$render(
        $$result,
        {
          chooseType: "secondary",
          icon: "arrow",
          size: "md",
          message: vessel?.name
        },
        {},
        {}
      )}` : ``}`;
    })}</div>

	${openPopup && selectedVessel ? `${validate_component(Popup, "Popup").$$render(
      $$result,
      { isOpen: openPopup },
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
              href: `${base}/vessel/${$selectedVessel?.id}`,
              isButton: false,
              chooseType: "tertiary",
              icon: "arrowBlack",
              size: "md",
              message: "Open"
            },
            {},
            {}
          )}
				${validate_component(Button, "Button").$$render(
            $$result,
            {
              chooseType: "tertiary",
              icon: "arrowBlack",
              size: "md",
              message: "Delete"
            },
            {},
            {}
          )}</div>`;
        }
      }
    )}` : ``}</div>`;
  } while (!$$settled);
  $$unsubscribe_VesselsStorage();
  $$unsubscribe_indexVelles();
  $$unsubscribe_selectedVessel();
  return $$rendered;
});
export {
  Page as default
};
