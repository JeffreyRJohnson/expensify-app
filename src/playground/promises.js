const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //  resolve('this is my resolved data');
    //  resolve('this is my other resolved data'); // no result only 1 promise
    reject('something went wrong'); // throws JS error message
  }, 1500);
});

console.log('before');

promise
  .then(data => {
    console.log('1', data);
  })
  .catch(error => {
    console.log('error:', error); // throws string in console of error message
  });

console.log('after');
