const pizzaBase = document.getElementById('pizza-base');
const onionImage = document.getElementById('onion-image');
const capsicumImage = document.getElementById('capsicum-image');
const tomatoImage = document.getElementById('tomato-image');
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

    // Check if the dropped item is the onion image
    if (color === 'onion') {
        const onionImageClone = onionImage.cloneNode(true);
        onionImageClone.classList.add('dot', color + '-dot');

        const xPos = e.clientX - pizzaBase.getBoundingClientRect().left - 10;
        const yPos = e.clientY - pizzaBase.getBoundingClientRect().top - 10;

        onionImageClone.style.left = xPos + 'px';
        onionImageClone.style.top = yPos + 'px';

        pizzaBase.appendChild(onionImageClone);
    }
    if (color === 'capsicum') {
        const capsicumImageClone = capsicumImage.cloneNode(true);
        capsicumImageClone.classList.add('dot', color + '-dot');

        const xPos = e.clientX - pizzaBase.getBoundingClientRect().left - 10;
        const yPos = e.clientY - pizzaBase.getBoundingClientRect().top - 10;

        capsicumImageClone.style.left = xPos + 'px';
        capsicumImageClone.style.top = yPos + 'px';

        pizzaBase.appendChild(capsicumImageClone);
    }
    if (color === 'tomato') {
        const tomatoImageClone = tomatoImage.cloneNode(true);
        tomatoImageClone.classList.add('dot', color + '-dot');

        const xPos = e.clientX - pizzaBase.getBoundingClientRect().left - 10;
        const yPos = e.clientY - pizzaBase.getBoundingClientRect().top - 10;

        tomatoImageClone.style.left = xPos + 'px';
        tomatoImageClone.style.top = yPos + 'px';

        pizzaBase.appendChild(tomatoImageClone);
    }
});