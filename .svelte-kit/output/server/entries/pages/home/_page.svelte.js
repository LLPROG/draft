import { c as create_ssr_component, a as subscribe, g as getContext, v as validate_component, d as each } from "../../../chunks/index2.js";
import { V as VesselsStorage } from "../../../chunks/store.js";
import { B as Button } from "../../../chunks/Button.js";
import { L as LogoMain } from "../../../chunks/LogoMain.js";
import { b as base } from "../../../chunks/paths.js";
const Popup_svelte_svelte_type_style_lang = "";
const css = {
  code: ".popup.svelte-372hok{background:linear-gradient(\r\n			95.14deg,\r\n			rgba(133, 233, 108, 0.7) 0%,\r\n			rgba(61, 186, 111, 0.7) 100%\r\n		);backdrop-filter:blur(10px)}",
  map: null
};
const Popup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOpen = false } = $$props;
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  $$result.css.add(css);
  return `<div class="w-full fixed top-0 right-0 left-0 bottom-0"><div class="fixed px-4 w-full min-h-[50vh] bottom-0 left-0 rounded-t-3xl popup svelte-372hok"><div class="w-full py-4">${slots.header ? slots.header({}) : ``}</div>
		<div class="w-full py-2">${slots.body ? slots.body({}) : ``}</div></div>
</div>`;
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
    $$rendered = `<div class="w-full text-green">
	<div class="top-section flex justify-center items-center py-12">${validate_component(LogoMain, "LogoMain").$$render($$result, {}, {}, {})}</div>

	${validate_component(Button, "Button").$$render(
      $$result,
      {
        disabled: openPopup,
        href: `${base}/create-vessel`,
        classProp: "flex w-full",
        message: "My Fleet",
        chooseType: "primary",
        icon: "plus",
        size: "lg",
        isButton: false
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
              href: `${base}/vessel/${$selectedVessel?.name}`,
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
