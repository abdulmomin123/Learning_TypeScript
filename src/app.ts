const names: Array<string> = ['momin'];

const timer = new Promise(resolve => {
  setTimeout(() => {
    resolve('hi');
  }, 2000);
});

timer.then(data => console.log(data));
