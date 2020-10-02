#!/usr/bin/node

const log = console.log,
      argv = process.argv[2];
  try {
    log(`${argv} = ${eval(argv)}`);
  } catch(e) {
    log(`${argv} 不是合法的数学表达式！`);
  } 


