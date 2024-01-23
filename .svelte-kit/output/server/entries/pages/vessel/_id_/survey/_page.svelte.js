import { c as create_ssr_component, f as each, e as escape, n as null_to_empty, d as add_attribute, a as subscribe, v as validate_component, b as createEventDispatcher } from "../../../../../chunks/index2.js";
import { p as page } from "../../../../../chunks/stores.js";
import { V as VesselsStorage, d as defaultValue } from "../../../../../chunks/store.js";
import { B as Button } from "../../../../../chunks/Button.js";
import { I as Input } from "../../../../../chunks/Input.js";
import { L as LogoBigSheep } from "../../../../../chunks/LogoBigSheep.js";
import clsx from "clsx";
import "papaparse";
const RadioList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".radio.svelte-vm48ny{border:5px solid #485544;box-shadow:inset 0px 4px 4px rgba(0, 0, 0, 0.25)}",
  map: null
};
const RadioList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options = [""] } = $$props;
  let { selectedOption = options[0] } = $$props;
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.selectedOption === void 0 && $$bindings.selectedOption && selectedOption !== void 0)
    $$bindings.selectedOption(selectedOption);
  $$result.css.add(css$1);
  return `<div class="w-full flex flex-col gap-3 py-2">${each(options, (option) => {
    return `<button class="w-full flex justify-start items-center gap-2"><div class="${escape(
      null_to_empty(clsx("radio w-5 h-5 rounded-full border-[4px] border-gray-300 bg-[#485544] outline-none text-transparent", {
        "bg-greenAccent": selectedOption === option
      })),
      true
    ) + " svelte-vm48ny"}"${add_attribute("id", option, 0)}></div>
			<div class="${escape(
      null_to_empty(clsx({
        "text-greenAccent": selectedOption === option
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
  let { options = ["Initial", "Intermediate", "Final"] } = $$props;
  let { selectedOption = "Initial" } = $$props;
  let { data = { voy: NaN, year: NaN, Port: "" } } = $$props;
  let isError = false;
  let vesselId = $page.params.id;
  $VesselsStorage.findIndex((v) => v.id === vesselId);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.selectedOption === void 0 && $$bindings.selectedOption && selectedOption !== void 0)
    $$bindings.selectedOption(selectedOption);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $VesselsStorage.find((v) => v.id === vesselId) || void 0;
    $$rendered = `<div class="w-full text-white text-center p-2 relative"><h1 class="w-full p-2 py-4 text-[2rem]">NEW SURVEY</h1>

	<div class="w-full p-2 py-4 flex justify-center items-center gap-6"><div class="basis-2/3 flex flex-col gap-8">
			<div class="form grid grid-cols-2 gap-4 text-start">${validate_component(Input, "Input").$$render(
      $$result,
      {
        label: "Voy Nr",
        className: "w-full",
        id: "name",
        type: "number",
        valueN: data.voy,
        isError
      },
      {
        valueN: ($$value) => {
          data.voy = $$value;
          $$settled = false;
        },
        isError: ($$value) => {
          isError = $$value;
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
        valueN: data.year,
        isError
      },
      {
        valueN: ($$value) => {
          data.year = $$value;
          $$settled = false;
        },
        isError: ($$value) => {
          isError = $$value;
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
        valueT: data.Port,
        isError
      },
      {
        valueT: ($$value) => {
          data.Port = $$value;
          $$settled = false;
        },
        isError: ($$value) => {
          isError = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div>

			
			<div class="level w-full">${validate_component(RadioList, "RadioList").$$render(
      $$result,
      { options, selectedOption },
      {
        options: ($$value) => {
          options = $$value;
          $$settled = false;
        },
        selectedOption: ($$value) => {
          selectedOption = $$value;
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
const Select = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { classProps = "" } = $$props;
  let { value = "" } = $$props;
  let { array = [""] } = $$props;
  if ($$props.classProps === void 0 && $$bindings.classProps && classProps !== void 0)
    $$bindings.classProps(classProps);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.array === void 0 && $$bindings.array && array !== void 0)
    $$bindings.array(array);
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
  let { selectedOption = "Quarter Mean" } = $$props;
  let { openMean: openMean2 = false } = $$props;
  let { array = ["Quarter Mean", "Mean of Mean", "Mean of Mean of mean"] } = $$props;
  let { customClass = "" } = $$props;
  if ($$props.selectedOption === void 0 && $$bindings.selectedOption && selectedOption !== void 0)
    $$bindings.selectedOption(selectedOption);
  if ($$props.openMean === void 0 && $$bindings.openMean && openMean2 !== void 0)
    $$bindings.openMean(openMean2);
  if ($$props.array === void 0 && $$bindings.array && array !== void 0)
    $$bindings.array(array);
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0)
    $$bindings.customClass(customClass);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div${add_attribute("class", clsx("w-full relative", customClass), 0)}>${validate_component(Button, "Button").$$render(
      $$result,
      {
        message: selectedOption,
        chooseType: "secondary",
        icon: "arrow",
        size: "sm",
        classProp: "w-full !py-4"
      },
      {},
      {}
    )}

	${openMean2 ? `${validate_component(Select, "Select").$$render(
      $$result,
      {
        classProps: "absolute top-18 z-50",
        array,
        value: selectedOption
      },
      {
        array: ($$value) => {
          array = $$value;
          $$settled = false;
        },
        value: ($$value) => {
          selectedOption = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div>`;
  } while (!$$settled);
  return $$rendered;
});
const ResultCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".result.svelte-l1y7jz{background:rgba(224, 231, 241, 0.02);box-shadow:0px 0px 4px 3px rgba(255, 255, 255, 0.05)}",
  map: null
};
const ResultCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { options } = $$props;
  let { unit } = $$props;
  const addCaracter = (value) => {
    let precise = value?.toPrecision(4);
    var precValue = parseFloat(precise);
    let result = `${precValue} ${unit}`;
    return result;
  };
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  $$result.css.add(css);
  return `<div class="w-full rounded-2xl result py-4 svelte-l1y7jz"><ul class="w-full">${each(options, (option) => {
    return `<li class="w-full grid grid-cols-2 gap-2 text-[rgba(235,255,229,0.8)]"><label class="text-end w-full max-w-[11rem] truncate" for="name">${escape(`${option.label}:`)}</label>
				<input${add_attribute("value", addCaracter(option.value), 0)} class="text-start bg-transparent" id="name" type="text" ${"disabled"}>
			</li>`;
  })}</ul>
</div>`;
});
let openMean = false;
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let vessel;
  let draftLeft;
  let draftRight;
  let weight;
  let vesselStatus;
  let trimResult;
  let displacementResult;
  let correctionsResult;
  let finalDisplacementResult;
  let weightResult;
  let constantR;
  let $VesselsStorage, $$unsubscribe_VesselsStorage;
  let $page, $$unsubscribe_page;
  $$unsubscribe_VesselsStorage = subscribe(VesselsStorage, (value) => $VesselsStorage = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let waterDensityValue = 0;
  let selectedMean = "Quarter Mean";
  let vesselId = $page.params.id;
  $VesselsStorage.findIndex((v) => v.id === vesselId);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    vessel = $VesselsStorage.find((v) => v.id === vesselId) || void 0;
    [
      vessel?.start_value[1]?.value,
      vessel?.start_value[3]?.value,
      vessel?.start_value[5]?.value
    ];
    vessel?.categories || defaultValue.categories;
    draftLeft = vessel?.draftLeft || defaultValue.draftLeft;
    draftRight = vessel?.draftRight || defaultValue.draftRight;
    weight = vessel?.weight || defaultValue.weight;
    waterDensityValue = defaultValue.waterDensityValue || 0;
    vesselStatus = vessel?.status || "undefined";
    trimResult = vessel?.results?.trimResult || defaultValue.results.trimResult;
    displacementResult = vessel?.results?.displacementResult || defaultValue.results.displacementResult;
    correctionsResult = vessel?.results?.correctionsResult || defaultValue.results.correctionsResult;
    finalDisplacementResult = vessel?.results?.finalDisplacementResult || defaultValue.results.finalDisplacementResult;
    weightResult = vessel?.results?.weightResult || defaultValue.results.weightResult;
    constantR = vessel?.results?.constantR || defaultValue.results.constantR;
    $$rendered = `${vesselStatus === "undefined" ? `${validate_component(InitSurvey, "InitSurvey").$$render($$result, {}, {}, {})}` : `<div class="w-full text-center text-whitePrimary px-4 pb-56">
		<div class="w-full flex justify-around items-center"><button class="w-[6rem] py-1 font-bold bg-white rounded-xl text-black text-[1.5rem]">calc
			</button>
			<input placeholder="" type="file" accept=".csv"></div>

		
		<h2 class="text-[2em] font-bold py-4">Drafts</h2>
		<div class="w-full flex justify-around"><div class="flex flex-col gap-4">${each(draftLeft, (A) => {
      return `${validate_component(Input, "Input").$$render(
        $$result,
        {
          className: "w-[6rem]",
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

			<div>${validate_component(LogoBigSheep, "LogoBigSheep").$$render($$result, { divisor: 1.5 }, {}, {})}</div>

			<div class="flex flex-col gap-4">${each(draftRight, (B) => {
      return `${validate_component(Input, "Input").$$render(
        $$result,
        {
          className: "w-[6rem]",
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

		
		<h2 class="text-[2em] font-bold py-4">Water Density</h2>
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

		
		<h2 class="text-[2em] font-bold">Weight</h2>
		<div class="w-full grid grid-cols-2 gap-4 place-items-center pb-4">${each(weight, (w) => {
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

		

		${validate_component(Mean, "Mean").$$render(
      $$result,
      {
        customClass: "my-4",
        openMean,
        selectedOption: selectedMean
      },
      {
        selectedOption: ($$value) => {
          selectedMean = $$value;
          $$settled = false;
        }
      },
      {}
    )}

		
		<div class="w-full flex flex-col justify-center items-center gap-4">${validate_component(ResultCard, "ResultCard").$$render(
      $$result,
      { unit: "m", options: trimResult },
      {
        options: ($$value) => {
          trimResult = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(ResultCard, "ResultCard").$$render(
      $$result,
      { unit: "M", options: displacementResult },
      {
        options: ($$value) => {
          displacementResult = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(ResultCard, "ResultCard").$$render(
      $$result,
      { unit: "M", options: correctionsResult },
      {
        options: ($$value) => {
          correctionsResult = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(ResultCard, "ResultCard").$$render(
      $$result,
      {
        unit: "M",
        options: finalDisplacementResult
      },
      {
        options: ($$value) => {
          finalDisplacementResult = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(ResultCard, "ResultCard").$$render(
      $$result,
      { unit: "M", options: weightResult },
      {
        options: ($$value) => {
          weightResult = $$value;
          $$settled = false;
        }
      },
      {}
    )}
			${validate_component(ResultCard, "ResultCard").$$render(
      $$result,
      { unit: "M", options: constantR },
      {
        options: ($$value) => {
          constantR = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`}`;
  } while (!$$settled);
  $$unsubscribe_VesselsStorage();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
