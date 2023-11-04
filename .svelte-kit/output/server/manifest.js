export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ac3abbac.js","app":"_app/immutable/entry/app.8bf79c7b.js","imports":["_app/immutable/entry/start.ac3abbac.js","_app/immutable/chunks/index.3fc04f68.js","_app/immutable/chunks/singletons.d649963d.js","_app/immutable/chunks/index.0f40077f.js","_app/immutable/chunks/paths.6da3c254.js","_app/immutable/entry/app.8bf79c7b.js","_app/immutable/chunks/index.3fc04f68.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "/vessel/[name]",
				pattern: /^\/vessel\/([^/]+?)\/?$/,
				params: [{"name":"name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/vessel/[name]/survey",
				pattern: /^\/vessel\/([^/]+?)\/survey\/?$/,
				params: [{"name":"name","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
