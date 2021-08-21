const lis = document.querySelectorAll('#list li');

for (let item of lis) {
    item.addEventListener('click', () => {
        item.style.textDecoration = 'line-through';
    })
}