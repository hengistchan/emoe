const { dtsPlugin } = require('esbuild-plugin-d.ts');

const config = {
	entryPoints: ['src/index.ts'],
	bundle: true,
	external: ['vue'],
	format: 'esm',
	plugins: [dtsPlugin()],
};

module.exports = config;
