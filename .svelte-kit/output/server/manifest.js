export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/bot-icon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.7bd60464.js","app":"_app/immutable/entry/app.0717636e.js","imports":["_app/immutable/entry/start.7bd60464.js","_app/immutable/chunks/index.d0e80578.js","_app/immutable/chunks/singletons.5a4eddb9.js","_app/immutable/chunks/index.851888f7.js","_app/immutable/chunks/paths.596503a7.js","_app/immutable/entry/app.0717636e.js","_app/immutable/chunks/index.d0e80578.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				id: "/vessel/[id]",
				pattern: /^\/vessel\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/vessel/[id]/survey",
				pattern: /^\/vessel\/([^/]+?)\/survey\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
