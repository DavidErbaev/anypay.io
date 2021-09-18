# createPaymentLink

```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
    api_id: process.env.API_ID,
    api_key: process.env.API_KEY,
    merchant_id: process.env.MERCHANT_ID,
    secretKey: process.env.SECRET_KEY,
})
```

Создаем ссылку на оплату

```js
await payment.api.createPaymentLink({
     amount: 10,
     currency: 'RUB',
     pay_id: 10863017,
     params: { field1: 1, field2: 2 }
 }) // => Promise<object>
```

Параметры

| Параметр  | Тип      | Описание                                        |
| --------- | -------- | ----------------------------------------------- |
| amount    | Number   | Сумма оплаты платежа                            |
| desc      | String   | Описание платежа                                |
| currency  | String   | Валюта оплаты                                   |
| pay_id    | Number   | Id Платежа                                      |
| params    | Object   | Параметры которые буду возвращены в обработчик  |

Возвращает следующие свойства

| Параметр  | Тип     | Описание                 |
| --------- | ------- | ------------------------ |
| url       | string  | Ссылка на оплату         |
