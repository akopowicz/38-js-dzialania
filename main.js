function calculation(num1, num2) {
    let sum = num1 + num2;
    let difference = num1 - num2;
    let product = num1 * num2;

    if (sum >= 0) {
        console.log('Wynik dodawania wynosi ' + sum);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }

    if (difference >= 0) {
        console.log('Wynik odejmowania wynosi ' + difference);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }

    if (product >= 0) {
        console.log('Wynik mnożenia wynosi ' + product);
    } else {
        console.log('Wynik jest nieprawidłowy');
    }
}

calculation(5, 7);
