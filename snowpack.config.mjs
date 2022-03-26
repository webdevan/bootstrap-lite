export default {
  root: './src',
  buildOptions: {
    out: './dist',
  },
  optimize: {
    bundle: false,
    minify: false,
    target: 'es2018',
  },
  plugins: [
    '@snowpack/plugin-sass',
  ],
};