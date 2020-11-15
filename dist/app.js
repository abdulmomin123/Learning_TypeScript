"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case 'bird':
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
    }
    console.log('animal running at ' + speed);
}
moveAnimal({ type: 'horse', runningSpeed: 33 });
//# sourceMappingURL=app.js.map