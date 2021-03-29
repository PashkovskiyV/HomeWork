var userAge = prompt('How old are you?', '18');

switch (userAge % 10) {
    case 0:
        alert('Vam ' + userAge + ' let.');
        break;
    case 1:
        alert('Vam ' + userAge + ' god.');
        break;

    case 2:
    case 3:
    case 4:
        alert('Vam ' + userAge + ' goda.');
        break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
        alert('Vam ' + userAge + ' let.');
        break;
}


/*
1. false && true || true;    // true; false && true дает результат false, false || true - получаем true (по приоритету выполнения).
2. false && (true || true);  // false; (true || true) дает результат true, false && true - получаем false (по приоритету выполнения).
3. '10' + (5 === 6);         // '10false'; 5 не равно 6, то есть false, Строка '10' конкатенируется c false, получается строка '10false'. 
4. '10' - 5 === 6;           // false; Строка '10' при вычитании преобразуется в число, 10 - 5 результат 5. 5 не равняется 6, результат false.
5. (+null == false) < 1;     // false; унарный плюс преобразует null  в число 0, 0 равняется false, то есть результатом скобок будет true.
                                При сравнении true преобразуется в 1, 1 не меньше 1, по-этому, результат false. 
6. (+null == false) < 1 ** 5;// false; унарный плюс преобразует null  в число 0, 0 равняется false, то есть результатом скобок будет true.
                                1 в пятой степени дает 1. При сравнении true преобразуется в 1, 1 не меньше 1, по-этому, результат false. 
7. undefined + 5 > null + 1; // false; При сложении, undefined, пытаясь преобразоваться в число, становится NaN. При сложении NaN + 5, получаем NaN.
                                При сложении, null преобразуется в 0. 0 + 1, результат 1. При сравнении NaN > 1, получаем результат false, так как 
                                "не число" не может быть больше единицы.
*/