#! /usr/bin/env node
const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, '../src/xto.js'))+`
module.exports = x;
`;

fs.writeFileSync(path.join(__dirname, '../test/xto.js'), data);