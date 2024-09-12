function showtype(arg) {
    var type = typeof (arg);

    switch (type) {
        case 'null':
            if (!!arg == true) {
                console.log('Отсутствие значения')
                break
            }
        case 'string':
            if (!!arg == true) {
                console.log('Строка')
                break
            }
        case 'object':
            if (!!arg == true) {
                console.log('Объект')
                break
            }
        case 'number':
            if (!!arg == true) {
                console.log('Число')
                break
            }
        case 'boolean':
            if (!!arg == true) {
                console.log('Логический тип')
                break
            }
        case 'function':
            if (!!arg == true) {
                console.log('Функция')
                break
            }
    }

}

showtype('');