# createPaymentLink

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    secretKey: process.env.SECRET_KEY,
    apiKey: process.env.API_KEY
})
```

Создаем ссылку на оплату

```js
await payment.api.createPaymentLink({
     merchant: 5195,
     amount: 10,
     currency: 'RUB',
     pay_id: 10863017,
     params: { field1: 1, field2: 2 }
 }) // => Promise<object>
```

Параметры

| Параметр  | Тип      | Описание                                        |
| --------- | -------- | ----------------------------------------------- |
| merchant  | Number   | Id Проекта AnyPay                               |
| amount    | Number   | Сумма оплаты платежа                            |
| desc      | String   | Описание платежа                                |
| currency  | String   | Валюта оплаты                                   |
| pay_id    | Number   | Id Платежа                                      |
| params    | Object   | Параметры которые буду возвращены в обработчик  |

Возвращает следующие свойства

| Параметр  | Тип     | Описание                 |
| --------- | ------- | ------------------------ |
| url       | String  | Ссылка на оплату         |
| ping      | String  | Скорость создание ссылки |
