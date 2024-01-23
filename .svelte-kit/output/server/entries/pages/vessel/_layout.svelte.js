import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { T as Transition } from "../../../chunks/Transition.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Transition, "Transition").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}`;
});
export {
  Layout as default
};
