const esbuild = require('esbuild');
const esbuildfConfig = require('./esbuild.config');

esbuild.build(Object.assign(esbuildfConfig, { format: 'cjs', outfile: 'dist/index.cjs.js' }));
