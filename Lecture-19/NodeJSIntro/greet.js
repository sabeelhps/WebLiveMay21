
const names = process.argv.slice(2);

for (let person of names) {
    console.log(`Hello from ${person}`);
}