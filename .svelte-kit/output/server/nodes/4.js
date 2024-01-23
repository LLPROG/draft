import * as universal from '../entries/pages/vessel/_id_/_layout.js';

export const index = 4;
export const component = async () => (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/vessel/[id]/+layout.js";
export const imports = ["_app/immutable/nodes/4.3c496948.js","_app/immutable/chunks/index.d4a696fd.js"];
export const stylesheets = [];
export const fonts = [];
