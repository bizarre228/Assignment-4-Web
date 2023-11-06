const objects = document.querySelectorAll('.object');
const boxes = document.querySelectorAll('.container-box');

objects.forEach(object => {
    object.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

boxes.forEach(box => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('drop', (e) => {
        e.preventDefault();
        const objectId = e.dataTransfer.getData('text/plain');
        const draggedObject = document.getElementById(objectId);
        const textElement = box.querySelector('.container-text');

        if (box.id === `box${objectId.charAt(objectId.length - 1)}`) {
            box.appendChild(draggedObject);
            if (textElement) {
                textElement.remove(); 
            }
            checkGameCompletion();
        }
    });
});

function checkGameCompletion() {
    const objectsInBoxes = Array.from(boxes).map(box => box.children[0]);
    const isGameComplete = objectsInBoxes.every(object => object !== null);
    let sound = new Audio('Sounds/yes.mp3');

    if (isGameComplete) {
        sound.play();
        alert('You are doing right!');
    }
}