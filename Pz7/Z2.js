function showtype(arg) {
    var type = typeof (arg);

    if (!!arg === true) {
        switch (type) {
            case 'null':
                console.log('Отсутствие значения')
                break
            case 'string':
                console.log('Строка')
                break

            case 'object':
                console.log('Объект')
                break

            case 'number':
                console.log('Число')
                break

            case 'boolean':
                console.log('Логический тип')
                break

            case 'function':
                console.log('Функция')
                break
        }
    }
}

showtype('2');