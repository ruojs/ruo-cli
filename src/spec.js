const fs = require('fs')
const {rc} = require('ruo')
const parser = require('ruo-swagger-parser')

module.exports = () => {
  const root = rc.source
  const cachePath = root + '/spec/swagger.json'

  parser(
    root,
    '**/*' + rc.suffix.spec,
    rc.suffix.spec,
    'api',
    rc.shadow
  ).then((spec) => {
    fs.writeFileSync(cachePath, JSON.stringify(spec, null, 2), 'utf8')
    console.log(`generate swagger.json in ${cachePath} success`); // eslint-disable-line
  }).catch((err) => {
    console.log(err.stack); // eslint-disable-line
  })
}
