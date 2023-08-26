const base1 = document.getElementById('base1');
const base2 = document.getElementById('base2');
const draggableButtons = document.querySelectorAll('.draggable-button');

draggableButtons.forEach(button => {
    button.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('color', button.getAttribute('data-color'));
    });
});

const createDots = (base, color, xPos, yPos, dotCount) => {
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot', color + '-dot');
        const xOffset = Math.random() * 20 - 10; // Random x offset within a 20px range
        const yOffset = Math.random() * 20 - 10; // Random y offset within a 20px range
        dot.style.left = xPos + xOffset + 'px';
        dot.style.top = yPos + yOffset + 'px';
        base.appendChild(dot);
    }
};

const handleDrop = (base) => (e) => {
    e.preventDefault();
    const color = e.dataTransfer.getData('color');
    const xPos = e.clientX - base.getBoundingClientRect().left - 10; // 10 is half the dot size
    const yPos = e.clientY - base.getBoundingClientRect().top - 10;
    createDots(base, color, xPos, yPos, 10); // Change 10 to the desired number of dots
};

base1.addEventListener('dragover', (e) => {
    e.preventDefault();
});

base1.addEventListener('drop', handleDrop(base1));

base2.addEventListener('dragover', (e) => {
    e.preventDefault();
});

base2.addEventListener('drop', handleDrop(base2));



// const base1 = document.getElementById('base1');
// const base2 = document.getElementById('base2');
// const draggableButtons = document.querySelectorAll('.draggable-button');

// draggableButtons.forEach(button => {
//     button.addEventListener('dragstart', (e) => {
//         e.dataTransfer.setData('color', button.getAttribute('data-color'));
//     });
// });

// const handleDrop = (base) => (e) => {
//     e.preventDefault();
//     const color = e.dataTransfer.getData('color');
//     const dot = document.createElement('div');
//     dot.classList.add('dot', color + '-dot');
//     const xPos = e.clientX - base.getBoundingClientRect().left - 10; // 10 is half the dot size
//     const yPos = e.clientY - base.getBoundingClientRect().top - 10;
//     dot.style.left = xPos + 'px';
//     dot.style.top = yPos + 'px';
//     base.appendChild(dot);
// };

// base1.addEventListener('dragover', (e) => {
//     e.preventDefault();
// });

// base1.addEventListener('drop', handleDrop(base1));

// base2.addEventListener('dragover', (e) => {
//     e.preventDefault();
// });

// base2.addEventListener('drop', handleDrop(base2));