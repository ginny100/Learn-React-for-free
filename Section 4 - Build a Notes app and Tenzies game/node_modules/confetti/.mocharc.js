module.exports = {
  spec: 'test/**/*.js',
  diff: true,
  extension: ['js'],
  package: './package.json',
  timeout: 5000,
  exit: true,
  'watch-files': ['test/**/*.js', 'src/**/*.js']
}
