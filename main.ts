#!/usr/bin/env node

import { program } from 'commander'
import fs from 'fs/promises'

program.option('--input <value>').option('--var <value>').option('--output <value>')

program.parse()
const options = program.opts()

const filePath = options?.input
const variableName = options?.var
const outputFile = options?.output

if (!filePath) throw new Error('no file path provided')
if (!variableName) throw new Error('no variable name provided')
if (!outputFile) throw new Error('no output file provided')

import(filePath)
  .then((mod) => {
    const v = mod[variableName]
    const vstring = JSON.stringify(v, null, 2)
    fs.writeFile(outputFile, vstring)
      .then(() => {
        console.info(filePath, variableName, v)
      })
      .catch((err) => {
        console.error(err)
        process.exit(1)
      })
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
