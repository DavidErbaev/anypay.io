# getPayments

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    apiKey: process.env.API_KEY
})
```

Получение списка транзакций
```js
    await payment.api.getPayments(projectId, count) // => Promise<Object>
```
| Параметр | Тип | Описание |
|------------------|-------|------------------|
| projectId | Number | Id проекта |
|------------------|-------|------------------|
| count | Number | Кол-во выводимых объектов |

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|--------|------------------|
| result | object | Возвращает объект с транзакциями |