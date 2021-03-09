# getBalance

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    secretKey: process.env.SECRET_KEY,
    apiKey: process.env.API_KEY
})
```

Узнаем баланс

```js
await payment.api.getBalance() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр | Тип    | Описание                   |
| -------- | ------ | -------------------------- |
| result   | object | Выводить объект с балансом |
