# createPaymentLink

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    apiKey: process.env.API_KEY
})
```

Создаем ссылку на оплату
```js
await payment.api.createPaymentLink({
     merchant: 5195,
     secretKey: 'o7d0S9bQAAkjLW0WLabf138P',
     amount: 10,
     currency: 'RUB',
     pay_id: 10863017,
     params: { field1: 1, field2: 2 }
 }) // => Promise<object>
```
Параметры
| Параметр | Тип | Описание |
|-----------|-------|------------------|
| merchant | number | Id проекта |
| secretKey | string | Секретный ключ |
| amount | number | Сумма оплаты |
| currency | string | Валюта |
| pay_id | number | Id платежа |
| params | object | Параметры |

Возвращает следующие свойства
| Параметр | Тип | Описание |
|----------|--------|------------------|
| url | string | Ссылка на оплату |
| ping | string | скорость создание ссылки |