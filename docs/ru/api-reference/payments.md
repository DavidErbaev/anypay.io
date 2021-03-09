# getPayments

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    secretKey: process.env.SECRET_KEY,
    apiKey: process.env.API_KEY
})
```

Получение списка транзакций

```js
await payment.api.getPayments(projectId, count) // => Promise<Object>
```

| Параметр  | Тип      | Описание                  |
| --------- | -------- | ------------------------- |
| projectId | Number   | Id Проекта AnyPay         |
| count     | Number   | Кол-во выводимых объектов |

Возвращает следующие свойства

| Параметр  | Тип      | Описание                        |
| --------- | -------- | ------------------------------- |
| result    | object   | озвращает объект с транзакциями |
