const pizzaBase = document.getElementById('pizza-base');
const draggableButtons = document.querySelectorAll('.draggable-button');

draggableButtons.forEach(button => {
    button.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('color', button.getAttribute('data-color'));
    });
});

pizzaBase.addEventListener('dragover', (e) => {
    e.preventDefault();
});

pizzaBase.addEventListener('drop', (e) => {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    const dot = document.createElement('div');
    dot.classList.add('dot', color + '-dot');
    const xPos = e.clientX - pizzaBase.getBoundingClientRect().left - 10; // 10 is half the dot size
    const yPos = e.clientY - pizzaBase.getBoundingClientRect().top - 10;
    dot.style.left = xPos + 'px';
    dot.style.top = yPos + 'px';
    pizzaBase.appendChild(dot);
});
