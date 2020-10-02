#!/usr/bin/node

var user={
  name:'wangding',
  age:43,
  qq:'123'
};
const log=console.log;

log('name:%s',user.name);
log('age:%d',user.age);
log('user:%j',user);

console.error('Error! something wrong');


log('qq:',user.qq);
log('qq:'+user.qq);
log(`qq:${user.qq}`);
