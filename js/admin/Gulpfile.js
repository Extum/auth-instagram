var gulp = require('flarum-gulp');

gulp({
  modules: {
    'extum/flarum-ext-auth-instagram': [
      'src/**/*.js',
    ]
  }
});
