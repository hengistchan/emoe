const esbuild = require('esbuild');
const esbuildfConfig = require('./esbuild.config');

esbuild.build(Object.assign(esbuildfConfig, { format: 'esm', outfile: 'dist/index.esm.js' }));
