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
| desc      | Number   | Описание платежа                                |
| currency  | Number   | Валюта оплаты                                   |
| pay_id    | Number   | Id Платежа                                      |
| params    | Number   | Параметры которые буду возвращены в обработчик  |

Возвращает следующие свойства

| Параметр  | Тип     | Описание                 |
| --------- | ------- | ------------------------ |
| url       | string  | Ссылка на оплату         |
| ping      | string  | Скорость создание ссылки |
