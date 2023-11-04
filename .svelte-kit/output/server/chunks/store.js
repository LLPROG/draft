import { w as writable } from "./index.js";
const DEFAULT_OPTIONS = Object.freeze({
  serialize: JSON.stringify,
  deserialize: JSON.parse
});
function persistent(options) {
  const _options = { ...DEFAULT_OPTIONS, ...options };
  const { key, storage_type, start_value, serialize, deserialize } = _options;
  const storage = typeof window !== "undefined" ? window[storage_type] ?? void 0 : void 0;
  const store = writable(start_value, function start() {
    function storage_handler(event) {
      if (event.key === key)
        sync();
    }
    if (!storage)
      return;
    sync();
    window.addEventListener("storage", storage_handler);
    return function stop() {
      window.removeEventListener("storage", storage_handler);
    };
  });
  function set(value) {
    store.set(value);
    storage?.setItem(key, serialize(value));
  }
  function update(updater) {
    store.update((current_value) => {
      const new_value = updater(current_value);
      storage?.setItem(key, serialize(new_value));
      return new_value;
    });
  }
  function sync() {
    const stored_data = storage?.getItem(key);
    if (stored_data === null || stored_data === void 0) {
      set(start_value);
    } else {
      store.set(deserialize(stored_data));
    }
  }
  return {
    set,
    update,
    subscribe: store.subscribe
  };
}
let defaultInitialData = {
  voy: NaN,
  year: NaN,
  Port: ""
};
let defaultCategories = [
  {
    name: "Mean Corrected",
    total: 0,
    left: NaN,
    right: NaN
  },
  {
    name: "Displacement",
    total: 0,
    left: NaN,
    right: NaN
  },
  {
    name: "TPC",
    total: 0,
    left: NaN,
    right: NaN
  },
  {
    name: "LCF",
    total: 0,
    left: NaN,
    right: NaN
  },
  {
    name: "1° MTC (Mean + 0.5m)",
    total: 0,
    left: NaN,
    right: NaN
  },
  {
    name: "2° MTC (Mean - 0.5m)",
    total: 0,
    left: NaN,
    right: NaN
  }
];
let defaultDraftsA = [
  {
    name: "Fwd",
    value: NaN
  },
  {
    name: "Mid",
    value: NaN
  },
  {
    name: "Aft",
    value: NaN
  }
];
let defaultDraftsB = [
  {
    name: "Fwd",
    value: NaN
  },
  {
    name: "Mid",
    value: NaN
  },
  {
    name: "Aft",
    value: NaN
  }
];
let defaultWeight = [
  {
    name: "Ballast",
    value: NaN
  },
  {
    name: "Fresh water",
    value: NaN
  },
  {
    name: "Fuel Oil",
    value: NaN
  },
  {
    name: "Diesel Oil",
    value: NaN
  },
  {
    name: "Lube Oil",
    value: NaN
  },
  {
    name: "Other",
    value: NaN
  },
  {
    name: "Other Cargo",
    value: NaN
  },
  {
    name: "Constant",
    value: NaN
  }
];
const defaultValue = {
  name: "defaultValue",
  wasNameFocused: false,
  start_value: [
    { name: "light-ship", value: NaN, wasfocusedCount: false },
    { name: "d-fwd-pp", value: NaN, wasfocusedCount: false },
    { name: "lbp", value: NaN, wasfocusedCount: false },
    { name: "d-mid-pp", value: NaN, wasfocusedCount: false },
    { name: "lbm", value: NaN, wasfocusedCount: false },
    { name: "d-aft-pp", value: NaN, wasfocusedCount: false },
    { name: "keel-thk", value: NaN, wasfocusedCount: false }
  ],
  status: "Initial",
  stage: "new",
  initialData: { ...defaultInitialData },
  categories: [...defaultCategories],
  draftsA: [...defaultDraftsA],
  draftsB: [...defaultDraftsB],
  weight: [...defaultWeight],
  waterDensityValue: 0
};
const VesselsStorage = persistent({
  start_value: [defaultValue],
  key: "Vessels",
  // key to save as in Storage
  storage_type: "sessionStorage"
  // Storage object to use
});
export {
  VesselsStorage as V,
  defaultInitialData as a,
  defaultCategories as b,
  defaultDraftsA as c,
  defaultValue as d,
  defaultDraftsB as e,
  defaultWeight as f
};
