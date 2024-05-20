//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(JSON.stringify(args)); // получаем правильный хеш c помощью функции md5
        let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache) { // если элемент найден
            console.log("Из кеша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кеша: " + objectInCache.value;
        }
    
        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push({hash: hash, value: result}) ; // добавляем элемент с правильной структурой
        if (cache.length > 5) { 
          cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timeoutId = null; 
  let count = 0;
  let allCount = 0;

  function wrapper(...args) {
    if (timeoutId) {
        console.log("Уже есть таймаут", args);
        clearTimeout(timeoutId);
        allCount++;
    }

    if (!timeoutId) {
        console.log("Отправлен первый сигнал", args);
        func.apply(this, args);
        count++;
    }

    timeoutId = setTimeout(() => {
        console.log("Сработал таймаут", args);
        count++;
        func.apply(this, args);
        wrapper.count = count;
    }, delay);
    
    wrapper.allCount = allCount;
  }

  return wrapper;
}
