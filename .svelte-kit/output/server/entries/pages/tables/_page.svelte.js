import { c as create_ssr_component, b as createEventDispatcher, f as each, v as validate_component, d as add_attribute, a as subscribe } from "../../../chunks/index2.js";
import { B as Button } from "../../../chunks/Button.js";
import clsx from "clsx";
import "papaparse";
import { V as VesselsStorage } from "../../../chunks/store.js";
const CtaTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let ctas = [
    {
      icon: "edit-row",
      action: () => dispatch("edit:row")
    },
    {
      icon: "delete-row",
      action: () => dispatch("delete:row")
    },
    {
      icon: "add-row",
      action: () => dispatch("add:row")
    },
    {
      icon: "load-csv",
      action: () => dispatch("load:csv")
    }
  ];
  return `<div class="flex justify-between px-4">${each(ctas, (cta) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        spaceAll: false,
        chooseType: "only-icon",
        icon: cta.icon,
        size: "md"
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const InputTable = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value = NaN } = $$props;
  let { disabled = true } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  return `<li class="w-full"><input${add_attribute("class", clsx("bg-transparent w-16 px-2 py-1", { "pointer-events-none": disabled }), 0)} type="number"${add_attribute("value", value, 0)}></li>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { row = {
    draft: NaN,
    displ: NaN,
    tpc: NaN,
    mtc: NaN,
    lcf: NaN
  } } = $$props;
  let { rowContainer = [row] } = $$props;
  let { disabled = true } = $$props;
  let { selectedRow = 0 } = $$props;
  let { editable = false } = $$props;
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.rowContainer === void 0 && $$bindings.rowContainer && rowContainer !== void 0)
    $$bindings.rowContainer(rowContainer);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.selectedRow === void 0 && $$bindings.selectedRow && selectedRow !== void 0)
    $$bindings.selectedRow(selectedRow);
  if ($$props.editable === void 0 && $$bindings.editable && editable !== void 0)
    $$bindings.editable(editable);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="p-4"><div class="header"><ul class="flex justify-between"><li class="w-full border-2 px-2 py-1 border-greenAccent">Draft</li>
			<li class="w-full border-2 px-2 py-1 border-greenAccent">Displ.</li>
			<li class="w-full border-2 px-2 py-1 border-greenAccent">TPC</li>
			<li class="w-full border-2 px-2 py-1 border-greenAccent">MTC</li>
			<li class="w-full border-2 px-2 py-1 border-greenAccent">LCF</li></ul></div>
	<div class="py-4 space-y-2 max-h-[60vh] overflow-y-scroll">${each(rowContainer, (row2, index) => {
      return `<button class="w-full"><ul${add_attribute(
        "class",
        clsx("flex justify-between", {
          "border border-greenAccent": selectedRow === index,
          "border-red-500": editable && selectedRow === index
        }),
        0
      )}>${validate_component(InputTable, "InputTable").$$render(
        $$result,
        { disabled, value: row2.draft },
        {
          disabled: ($$value) => {
            disabled = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            row2.draft = $$value;
            $$settled = false;
          }
        },
        {}
      )}
					${validate_component(InputTable, "InputTable").$$render(
        $$result,
        { disabled, value: row2.displ },
        {
          disabled: ($$value) => {
            disabled = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            row2.displ = $$value;
            $$settled = false;
          }
        },
        {}
      )}
					${validate_component(InputTable, "InputTable").$$render(
        $$result,
        { disabled, value: row2.tpc },
        {
          disabled: ($$value) => {
            disabled = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            row2.tpc = $$value;
            $$settled = false;
          }
        },
        {}
      )}
					${validate_component(InputTable, "InputTable").$$render(
        $$result,
        { disabled, value: row2.mtc },
        {
          disabled: ($$value) => {
            disabled = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            row2.mtc = $$value;
            $$settled = false;
          }
        },
        {}
      )}
					${validate_component(InputTable, "InputTable").$$render(
        $$result,
        { disabled, value: row2.lcf },
        {
          disabled: ($$value) => {
            disabled = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            row2.lcf = $$value;
            $$settled = false;
          }
        },
        {}
      )}</ul>
			</button>`;
    })}</div></div>`;
  } while (!$$settled);
  return $$rendered;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_VesselsStorage;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => value);
  let selectedRow = 0;
  let editable = false;
  let disabled = true;
  let rowContainer = [];
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="w-full text-center text-grayPrimary"><h1 class="pb-6">Hydrostatic Tables</h1>
	${validate_component(Table, "Table").$$render(
      $$result,
      {
        rowContainer,
        selectedRow,
        editable,
        disabled
      },
      {
        rowContainer: ($$value) => {
          rowContainer = $$value;
          $$settled = false;
        },
        selectedRow: ($$value) => {
          selectedRow = $$value;
          $$settled = false;
        },
        editable: ($$value) => {
          editable = $$value;
          $$settled = false;
        },
        disabled: ($$value) => {
          disabled = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	<div>${validate_component(CtaTable, "CtaTable").$$render($$result, {}, {}, {})}</div>
	<input placeholder="" type="file" accept=".csv"></div>`;
  } while (!$$settled);
  $$unsubscribe_VesselsStorage();
  return $$rendered;
});
export {
  Page as default
};
