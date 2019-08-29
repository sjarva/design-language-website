import './src/styles/index.scss';

// import with "$font-prefix: /fonts" in dev and deploy previews
if (process.env.NODE_ENV !== 'production' || process.env.PULL_REQUEST) {
  require('./src/styles/plex-variants.scss');
} else {
  // import with "$font-prefix: /design/language/fonts"
  require('./src/styles/plex-variants-production.scss');
}
