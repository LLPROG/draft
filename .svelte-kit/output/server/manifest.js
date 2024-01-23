export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/bot-icon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b605bc26.js","app":"_app/immutable/entry/app.e9b1505e.js","imports":["_app/immutable/entry/start.b605bc26.js","_app/immutable/chunks/index.d4a696fd.js","_app/immutable/chunks/singletons.8475464b.js","_app/immutable/chunks/index.3c64980d.js","_app/immutable/chunks/paths.71cd8553.js","_app/immutable/entry/app.e9b1505e.js","_app/immutable/chunks/index.d4a696fd.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js')
		],
		routes: [
			{
				id: "/vessel/[id]",
				pattern: /^\/vessel\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/vessel/[id]/survey",
				pattern: /^\/vessel\/([^/]+?)\/survey\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
