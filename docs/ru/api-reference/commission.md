# getCommissions

```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
    api_id: process.env.API_ID,
    api_key: process.env.API_KEY,
    merchant_id: process.env.MERCHANT_ID,
    secretKey: process.env.SECRET_KEY,
})
```

Узнаем комиссии проекта.

```js
await payment.api.getCommissions(projectId); // => Promise<Object>
```

| Параметр   | Тип      | Описание          |
| ---------- | -------- | ----------------- |
| projectId  | Number   | Id проекта AnyPay |

Возвращает следующие свойства

| Параметр   | Тип      | Описание                    |
| ---------- | -------- | --------------------------- |
| result     | object   | Выводит объект с комиссиями |
