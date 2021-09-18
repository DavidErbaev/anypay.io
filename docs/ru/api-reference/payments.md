# getPayments

```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
    api_id: process.env.API_ID,
    api_key: process.env.API_KEY,
    merchant_id: process.env.MERCHANT_ID,
    secretKey: process.env.SECRET_KEY,
})
```

Получение списка транзакций

```js
await payment.api.getPayments({ offset: 10 }) // => Promise<Object>
```

| Параметр  | Тип      | Описание                  | По умолчанию |
| --------- | -------- | ------------------------- | ------------ |
| offset    | Number   | Кол-во выводимых объектов |      10      |

Возвращает следующие свойства

| Параметр  | Тип      | Описание                        |
| --------- | -------- | ------------------------------- |
| result    | object   | озвращает объект с транзакциями |
