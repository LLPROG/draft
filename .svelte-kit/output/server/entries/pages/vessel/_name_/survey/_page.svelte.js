import { c as create_ssr_component, b as createEventDispatcher, d as add_attribute, f as each, v as validate_component, e as escape, n as null_to_empty, a as subscribe } from "../../../../../chunks/index2.js";
import { B as Button } from "../../../../../chunks/Button.js";
import clsx from "clsx";
import { I as Input } from "../../../../../chunks/Input.js";
import { L as LogoBigSheep } from "../../../../../chunks/LogoBigSheep.js";
import { V as VesselsStorage, d as defaultValue } from "../../../../../chunks/store.js";
import { p as page } from "../../../../../chunks/stores.js";
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { classProps = "" } = $$props;
  let { value = "" } = $$props;
  let array = ["Quarter Mean", "Mean of Mean", "Mean of Mean of mean"];
  if ($$props.classProps === void 0 && $$bindings.classProps && classProps !== void 0)
    $$bindings.classProps(classProps);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  return `<div${add_attribute("class", clsx("w-full p-1 py-2 flex flex-col gap-2 rounded-xl px-1 bg-[#e0e7f14c] backdrop-blur-sm text-black", { [classProps]: true }), 0)}>${each(array, (el) => {
    return `${validate_component(Button, "Button").$$render(
      $$result,
      {
        message: el,
        chooseType: "secondary",
        icon: "",
        size: "sm",
        classProp: "!py-4 text-white !bg-blackPrimary"
      },
      {},
      {}
    )}`;
  })}</div>`;
});
const Mean = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { selectedOption: selectedOption2 = "Quarter Mean" } = $$props;
  let { openMean: openMean2 = false } = $$props;
  if ($$props.selectedOption === void 0 && $$bindings.selectedOption && selectedOption2 !== void 0)
    $$bindings.selectedOption(selectedOption2);
  if ($$props.openMean === void 0 && $$bindings.openMean && openMean2 !== void 0)
    $$bindings.openMean(openMean2);
  return `<div class="w-full relative">${validate_component(Button, "Button").$$render(
    $$result,
    {
      message: selectedOption2,
      chooseType: "secondary",
      icon: "arrow",
      size: "sm",
      classProp: "w-full !py-4"
    },
    {},
    {}
  )}

	${openMean2 ? `${validate_component(Select, "Select").$$render($$result, { classProps: "absolute top-18 z-50" }, {}, {})}` : ``}</div>`;
});
const ResultCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".result.svelte-l1y7jz{background:rgba(224, 231, 241, 0.02);box-shadow:0px 0px 4px 3px rgba(255, 255, 255, 0.05)}",
  map: null
};
const ResultCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isOption = 1 } = $$props;
  let options1 = [
    { label: "True Trim", value: 1 },
    { label: "Hoggin", value: 0 },
    { label: "Mean", value: 19 },
    { label: "Keel THK", value: 15 },
    { label: "Mean Corrected", value: 0 }
  ];
  let options2 = [
    { label: "Displacement", value: 92 },
    { label: "TPC", value: 5 },
    { label: "LCF", value: 6 },
    { label: "1°MTC(Mean + 0.5m)", value: 94 },
    { label: "2°MTC(Mean - 0.5m)", value: 30 },
    { label: "Mean Corrected", value: 0 }
  ];
  let options3 = [
    { label: "1° Trim Correction", value: 4 },
    { label: "2° Trim Correction", value: 0 },
    { label: "Density Correction", value: 20 }
  ];
  let options4 = [
    { label: "Final Displacement", value: 0 },
    { label: "Light Ship", value: 0 },
    { label: "DWT", value: 0 }
  ];
  let options5 = [
    { label: "Ballast", value: 0 },
    { label: "Fresh Water", value: 0 },
    { label: "Fuel Oil", value: 0 },
    { label: "Diesel Oil", value: 2 },
    { label: "Lube Oil", value: 22 },
    { label: "Other Tanks", value: 0 },
    { label: "Other Cargo", value: 18 },
    { label: "Deductions", value: 0 }
  ];
  let options6 = [{ label: "Costant", value: 15 }];
  let options = [{ label: "Displacement", value: 0 }];
  const addCaracter = (cha, value) => {
    let result = `${value} ${cha}`;
    return result;
  };
  if ($$props.isOption === void 0 && $$bindings.isOption && isOption !== void 0)
    $$bindings.isOption(isOption);
  $$result.css.add(css$1);
  {
    {
      if (isOption === 1)
        options = options1;
      if (isOption === 2)
        options = options2;
      if (isOption === 3)
        options = options3;
      if (isOption === 4)
        options = options4;
      if (isOption === 5)
        options = options5;
      if (isOption === 6)
        options = options6;
    }
  }
  return `<div class="w-full rounded-2xl result py-4 svelte-l1y7jz"><ul class="w-full">${each(options, (option) => {
    return `<li class="w-full grid grid-cols-2 gap-2 text-[rgba(235,255,229,0.8)]"><label class="text-end w-full max-w-[11rem] truncate" for="name">${escape(addCaracter(":", option.label))}</label>
				<input${add_attribute("value", addCaracter(" M", option.value), 0)} class="text-start bg-transparent" id="name" type="text" ${"disabled"}>
			</li>`;
  })}</ul>
</div>`;
});
const RadioList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".radio.svelte-vm48ny{border:5px solid #485544;box-shadow:inset 0px 4px 4px rgba(0, 0, 0, 0.25)}",
  map: null
};
const RadioList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [""] } = $$props;
  let { selectedOption: selectedOption2 = options[0] } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.selectedOption === void 0 && $$bindings.selectedOption && selectedOption2 !== void 0)
    $$bindings.selectedOption(selectedOption2);
  $$result.css.add(css);
  return `<div class="w-full flex flex-col gap-3 py-2">${each(options, (option) => {
    return `<button class="w-full flex justify-start items-center gap-2"><div class="${escape(
      null_to_empty(clsx("radio w-5 h-5 rounded-full border-[4px] border-gray-300 bg-[#485544] outline-none text-transparent", {
        "bg-greenAccent": selectedOption2 === option
      })),
      true
    ) + " svelte-vm48ny"}"${add_attribute("id", option, 0)}></div>
			<div class="${escape(
      null_to_empty(clsx({
        "text-greenAccent": selectedOption2 === option
      })),
      true
    ) + " svelte-vm48ny"}">${escape(option)}</div>
		</button>`;
  })}
</div>`;
});
const InitSurvey = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $VesselsStorage, $$unsubscribe_VesselsStorage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => $VesselsStorage = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  createEventDispatcher();
  let { options = ["Initial", "Intermediate", "Final"] } = $$props;
  let { selectedOption: selectedOption2 = "Initial" } = $$props;
  let { data = { voy: NaN, year: NaN, Port: "" } } = $$props;
  let vesselName = $page.params.name;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.selectedOption === void 0 && $$bindings.selectedOption && selectedOption2 !== void 0)
    $$bindings.selectedOption(selectedOption2);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $VesselsStorage.find((v) => v.name === vesselName) || void 0;
    $$rendered = `<div class="w-full text-white text-center p-2 relative"><h1 class="w-full p-2 py-4 text-[2rem]">NEW SURVEY</h1>

	<div class="w-full p-2 py-4 flex justify-center items-center gap-6"><div class="basis-2/3 flex flex-col gap-8">
			<div class="form grid grid-cols-2 gap-4 text-start">${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Voy Nr",
        className: "w-full",
        id: "name",
        type: "number",
        valueN: data.voy
      },
      {
        valueN: ($$value) => {
          data.voy = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Year",
        className: "w-full",
        id: "name",
        type: "number",
        valueN: data.year
      },
      {
        valueN: ($$value) => {
          data.year = $$value;
          $$settled = false;
        }
      },
      {}
    )}
				${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Port",
        className: "w-full col-span-2",
        id: "name",
        type: "text",
        valueT: data.Port
      },
      {
        valueT: ($$value) => {
          data.Port = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

			
			<div class="level w-full">${validate_component(RadioList, "RadioList").$$render(
      $$result,
      { options, selectedOption: selectedOption2 },
      {
        options: ($$value) => {
          options = $$value;
          $$settled = false;
        },
        selectedOption: ($$value) => {
          selectedOption2 = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

			
			${validate_component(Button, "Button").$$render(
      $$result,
      {
        spaceAll: false,
        chooseType: "for-form",
        icon: "",
        size: "md",
        message: "Next",
        classProp: "max-w-[10rem] !static"
      },
      {},
      {}
    )}</div>
		<div class="basis-1/3 flex justify-center items-center">${validate_component(LogoBigSheep, "LogoBigSheep").$$render($$result, {}, {}, {})}</div></div></div>`;
  } while (!$$settled);
  $$unsubscribe_VesselsStorage();
  $$unsubscribe_page();
  return $$rendered;
});
let openMean = false;
let selectedOption = "Quarter Mean";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let vessel;
  let categories;
  let draftsA;
  let draftsB;
  let weight;
  let $VesselsStorage, $$unsubscribe_VesselsStorage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => $VesselsStorage = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let waterDensityValue = 0;
  let vesselName = $page.params.name;
  let isNew = vessel?.isNew || defaultValue.isNew;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    vessel = $VesselsStorage.find((v) => v.name === vesselName) || void 0;
    [
      vessel?.start_value[1]?.value,
      vessel?.start_value[3]?.value,
      vessel?.start_value[5]?.value
    ];
    categories = vessel?.categories || defaultValue.categories;
    draftsA = vessel?.draftsA || defaultValue.draftsA;
    draftsB = vessel?.draftsB || defaultValue.draftsB;
    weight = vessel?.weight || defaultValue.weight;
    waterDensityValue = defaultValue.waterDensityValue || 0;
    $$rendered = `${isNew ? `${validate_component(InitSurvey, "InitSurvey").$$render($$result, {}, {}, {})}` : `<div class="w-full text-center text-whitePrimary bg-blackPrimary px-4 pb-56"><button class="w-[6rem] py-1 font-bold bg-white rounded-xl text-black text-[1.5rem]">calc
		</button>
		
		<h2 class="text-[2em] py-4">Drafts</h2>
		<div class="w-full flex justify-around"><div class="flex flex-col gap-4">${each(draftsA, (A) => {
      return `${validate_component(Input, "Input").$$render(
        $$result,
        {
          className: "w-[6rem]",
          id: "name",
          type: "number",
          valueN: A.value
        },
        {
          valueN: ($$value) => {
            A.value = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div>

			<div>${validate_component(LogoBigSheep, "LogoBigSheep").$$render($$result, { divisor: 2 }, {}, {})}</div>

			<div class="flex flex-col gap-4">${each(draftsB, (B) => {
      return `${validate_component(Input, "Input").$$render(
        $$result,
        {
          className: "w-[6rem]",
          id: "name",
          type: "number",
          valueN: B.value
        },
        {
          valueN: ($$value) => {
            B.value = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div></div>

		
		<h2 class="text-[2em] py-4">Water Density</h2>
		<div class="w-full flex justify-center items-center gap-4">${validate_component(Button, "Button").$$render(
      $$result,
      {
        spaceAll: false,
        chooseType: "only-icon",
        icon: "less",
        size: "md"
      },
      {},
      {}
    )}
			${validate_component(Input, "Input").$$render(
      $$result,
      {
        className: "w-[8rem] ",
        disabled: false,
        id: "name",
        type: "number",
        valueN: waterDensityValue
      },
      {
        valueN: ($$value) => {
          waterDensityValue = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(Button, "Button").$$render(
      $$result,
      {
        spaceAll: false,
        chooseType: "only-icon",
        icon: "plus",
        size: "md"
      },
      {},
      {}
    )}</div>

		
		<h2 class="text-[2em] py-4">Weight</h2>
		<div class="w-full grid grid-cols-2 gap-4 place-items-center">${each(weight, (w) => {
      return `${validate_component(Input, "Input").$$render(
        $$result,
        {
          label: w.name,
          className: "w-[8rem]",
          id: "name",
          type: "number",
          valueN: w.value
        },
        {
          valueN: ($$value) => {
            w.value = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</div>

		
		<h2 class="text-[2em] py-8">HYDROSTATIC TABLE INTERPOLATOR</h2>

		${validate_component(Mean, "Mean").$$render($$result, { openMean, selectedOption }, {}, {})}

		<div class="w-full py-4">${each(categories, (category) => {
      return `<div class="w-full"><div class="w-full pt-6 pb-1 text-greenAccent m-auto">${escape(category.name)}</div>
					<div class="w-full flex justify-between items-center gap-1">${validate_component(Input, "Input").$$render(
        $$result,
        {
          className: "min-w-[6rem] max-w-[9rem]",
          id: "name",
          type: "number",
          valueN: category.left
        },
        {
          valueN: ($$value) => {
            category.left = $$value;
            $$settled = false;
          }
        },
        {}
      )}
						${validate_component(Input, "Input").$$render(
        $$result,
        {
          className: "min-w-[6rem] max-w-[9rem]",
          disabled: true,
          id: "name",
          type: "number",
          valueN: category.total
        },
        {
          valueN: ($$value) => {
            category.total = $$value;
            $$settled = false;
          }
        },
        {}
      )}
						${validate_component(Input, "Input").$$render(
        $$result,
        {
          className: "min-w-[6rem] max-w-[9rem]",
          id: "name",
          type: "number",
          valueN: category.right
        },
        {
          valueN: ($$value) => {
            category.right = $$value;
            $$settled = false;
          }
        },
        {}
      )}</div>
				</div>`;
    })}</div>

		
		<h2 class="text-[2em] py-8">SURVEY</h2>

		${validate_component(Mean, "Mean").$$render($$result, { openMean, selectedOption }, {}, {})}

		<div class="w-full py-6 text-greenAccent"><h1 class="text-[1.3em]">SURVEY</h1>
			<p>(detailed)</p></div>

		
		<div class="w-full flex flex-col justify-center items-center gap-4">${validate_component(ResultCard, "ResultCard").$$render($$result, { isOption: 1 }, {}, {})}
			${validate_component(ResultCard, "ResultCard").$$render($$result, { isOption: 2 }, {}, {})}
			${validate_component(ResultCard, "ResultCard").$$render($$result, { isOption: 3 }, {}, {})}
			${validate_component(ResultCard, "ResultCard").$$render($$result, { isOption: 4 }, {}, {})}
			${validate_component(ResultCard, "ResultCard").$$render($$result, { isOption: 5 }, {}, {})}
			${validate_component(ResultCard, "ResultCard").$$render($$result, { isOption: 6 }, {}, {})}</div></div>`}`;
  } while (!$$settled);
  $$unsubscribe_VesselsStorage();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
