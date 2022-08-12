// https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec
// 10 JavaScript Promise Challenges Before You Start an Interview

//| Remember, the JavaScript engine always executes synchronous code first, then asynchronous code.   (executed sequentially from top to bottom.)
//| While encountering any problem, we only need to distinguish between synchronous code and asynchronous code.

              // Challenge 1: Promise Construtor
              // console.log('start');
              // const promise1 = new Promise((resolve, reject) => {
              //   console.log(1)
              // })
              // console.log('end');             //this code is to sequentially output start, 1, end.

                     // Challenge 2: .then()
                     // console.log('start');
                     // const promise1 = new Promise((resolve, reject) => {
                     //   console.log(1)
                     //   resolve(2)
                     // })
                     // promise1.then(res => {
                     //   console.log(res)
                     // })
                     // console.log('end');                        //the output is start , 1 , end and 2 .
                     //                                            //In this code snippet, a piece of asynchronous code appears. That is, the callback function in .then().

              //  Challenge 3: resolve()                    
              //  console.log('start');
              //  const promise1 = new Promise((resolve, reject) => {
              //    console.log(1)
              //    resolve(2)
              //    console.log(3)
              //  })
              //  promise1.then(res => {
              //    console.log(res)
              //  })
              //  console.log('end');              //the output result is start , 1 , 3, end and 2 .
              //                                   //This code snippet,is almost the same as the previous code

                     // Challenge 4: resolve() isn’t called  [IMPORTANT]
                     // console.log('start');
                     // const promise1 = new Promise((resolve, reject) => {
                     //   console.log(1)
                     // })
                     // promise1.then(res => {
                     //   console.log(2)                       
                     // })                                     //the output result is start , 1 , end .
                     // console.log('end');                    //In this code, the resolve method has never been called, so promise1 is always in the pending state. 
                     //                                        //So promise1.then(…) has never been executed. 2 is not printed out in the console.
                                     
              //  Challenge 6: The One With a Fulfilling Promise
              // console.log('start')
              // Promise.resolve(1).then((res) => {
              //   console.log(res)
              // })
              // Promise.resolve(2).then((res) => {
              //   console.log(res)
              // })                                        //Here Promise.resolve(1) will return a Promise object whose state is fulfilled and the result is 1 . It is synchronous code.
              // console.log('end')                        // the output result is start , end , 1 and 2.
______________________________________________________________________________________________________________________________________________________________________________________________________________
// Challenge 7: setTimeout vs Promise
console.log('start')

setTimeout(() => {
  console.log('setTimeout')
})

Promise.resolve().then(() => {
  console.log('resolve')
})

console.log('end')
// what if two async tasks complete at the same time?
// For example, in the above code, the timer of setTimeout is 0 second, and Promise.resolve() will also return a fulfilled Promise object immediately after execution.
// Both asynchronous tasks (setTimeout fn AND Promise.resolve) are completed immediately, so whose callback function will be executed first?
// In JavaScript EventLoop, there is also the concept of priority.
//                     Tasks with higher priority are called microtasks.----> Includes: Promise, ObjectObserver, MutationObserver, process.nextTick, async/await .
//                     Tasks with lower priority are called macrotasks. ----> Includes: setTimeout , setInterval and XHR .

// the output result is start , end , resolve and setTimeout.
______________________________________________________________________________________________________________________________________________________________________________________________________________
