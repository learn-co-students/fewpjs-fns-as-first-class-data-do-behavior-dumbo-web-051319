const chai = require('chai')
global.expect = chai.expect
const fs = require('file-system')
const jsdom = require('mocha-jsdom')
const path = require('path')
const babel = require("@babel/core");
const url = "http://localhost"

const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf-8')

const babelResult = babel.transformFileSync(
  path.resolve(__dirname, '..', 'index.js'), {
    presets: ['@babel/env']
  }
);

// describe('Module loading', function () {
//     it('should load', function(done){
//         expect(module.default).to.not.be.undefined;
//         done();
//     });
// });

const src = babelResult.code

jsdom({
  html, src, url
});
