#!/usr/bin/env node

const log = console.log,
      argv = process.argv[2];

if(argv.length!==3) {
   log('cmd exit-code');
  process.exit(1);
}

if(isNaN(Number(argv[2]))) {
   log('argv must be number')
  process.exit(2);
}
if(Number(argv[2])<0){
  log('argv must >=0');
  process.exit(3);
}
process.exit(argv);
