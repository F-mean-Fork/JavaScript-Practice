// Теория 
// Объявнение переменных и констант

/* Как правильно писать название пременных

    let num = 10 // создание перемернной
    let firstName = 'Ivan'
    const isProgrammer = true
    let $ = 'test'
    let $num = 10
    let num$ = 10
    let _ = 10
    let _num = 10
    let num_ = 10
    let firstName = 10  // Чаще в JS используется camel-case
*/

/* Как НЕправильно писать название пременных

    let 42num = 10
    let num-num = 10
    let false \ true \ let \ const и другие зарезервированные слова
*/

// alert(firstName) не удобно, т.к. постоянно выскакивает дополнительное окно
// console.log('Test:', firstName) удобно!

/*console.log(num) // -> консоль log выводит математические операции с числами, как int, так и float
                      // -> не меняет значение переменной, т.к. не было операции присвоения
    
                      let num2 = num + 30
    num = num2-num
    console.log(num, num2) 

    const fulName = firstName + ' ' + 'Lukiev'
    console.log(fulName)
*/

/* Operators

    a +=
    a -=
    a *=
    a /=
    a**2 
*/

/* data tipes

    1. const a = 10 - int
    2. const a = 10.2 - float 
    3. const a = 'ivan' - str
    4. isProgrammer = false      // с const переопределение не работает
    5. let x   -> undefined
    6. null
    7. 1/x     -> NaN (not a number)


*/

/* Приоритеты
    const fullAge = 26
    cont birthYear = 1998
    cont currentYear = 2024

    cont isFullAge = currentYear - birthYear => / <=

    если сравниваем строчку и число:
    const num1 = 42
    const num2 = '42'
    console.log(num1 == num2)  -> сравниваем только значения
    console.log(num1 === num2)  -> сравниваем и значения, и тип данных
*/