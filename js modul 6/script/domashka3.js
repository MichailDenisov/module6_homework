// Написать функцию, которая принимает число как аргумент и возвращает функцию,
//  которая также принимает число как аргумент и возвращает сумму этих двух чисел.
//  Выведите в консоль результат.

// function example(_func){
//     argFunc();
//     // func();

//     return function(){
//         console.log('internal function')
//     }
// }
// function argFunc(){
//     console.log('function from arguments')
// }
// const resultFunc = example(argFunc);
// console.log(resultFunc)
// resultFunc()

function func1(a) {//Выыодим аргумент а
    return function(b) {//Суммируем аргументы
        return a+b
    }
  };
  
  const sumFunction = func1(5);//присваиваем 2
  
  const sum = sumFunction(4)//присваиваем 4
  
  console.log(sum); // 9
