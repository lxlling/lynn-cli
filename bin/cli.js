#! /usr/bin/env node
const { program } = require('commander');
const help = require('../lib/help.js');
const create = require('../lib/create.js');

help(program);
create(program);

program.parse(process.argv);