function greet(name: string, callback: (name: string) => void): void {
  const userName = name;

  callback(userName);
}

greet('momin', name => {
  console.log('helloo' + name);
});
