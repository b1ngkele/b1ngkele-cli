#!/usr/bin/env node
'use strict';

const program = require('commander')
const utils = require('../utils/index')
const inquirer = require('../src/inquirer')
const create = require('../src/create')
const start = require('../src/start')
const { green, yellow, blue } = utils;

/* create a project */
program
  .command('create')
  .description('create a project ')
  .action(function () {
    green('👽 👽 👽 ' + '欢迎使用rux,轻松构建react ts项目～🎉🎉🎉')
    inquirer.create().then(res => {
      if (res.conf) {
        create(res)
      }
    })
  })

/* mycli start 运行项目 */
program
  .command('start')
  .description('start a project')
  .action(function () {
    green('--------运行项目-------')
    /* 运行项目 */
    start('start').then(() => {
      green('-------✅  ✅运行完成-------')
    })
  })

/* mycli build 打包项目 */
program
  .command('build')
  .description('build a project')
  .action(function () {
    green('--------构建项目-------')
  })

program.parse(process.argv)

