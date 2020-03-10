// process.stdout.write("hello from spinner1.js... \rheyyy\n");

const bar = ["\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   ", "\r/   ", "\r-   ", "\r\\   ", "\r|   "];
let time = 100;

for (const symbol of bar) {
  setTimeout(() => {
    process.stdout.write(symbol)
  }, time) 
  time += 200;
}

setTimeout(() => {
  process.stdout.write('\n');
}, 1700);