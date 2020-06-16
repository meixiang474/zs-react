/**
 * 函数式编程
 * 什么叫纯函数
 * 1. 不能改变传入的参数
 * 2. 相同的参数一定要返回相同的值
 * 3. 不能修改作用域变量之外的值
 */
function withdraw(account, amount){
  account.balance -= amount
}
withdraw({
  name: '张三',
  balance: 1000
}, 1000)

function sum(a, b){
  return a + b + Math.random()
}

function add(a, b){
  // global.x = 'a'
  let c = 10 // 可以修改在函数作用域声明的变量
  c = 20
  return a + b
}