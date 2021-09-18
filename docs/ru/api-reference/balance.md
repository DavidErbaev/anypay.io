# getBalance

```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
    api_id: process.env.API_ID,
    api_key: process.env.API_KEY,
    merchant_id: process.env.MERCHANT_ID,
    secretKey: process.env.SECRET_KEY,
})
```

Узнаем баланс

```js
await payment.api.getBalance() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр | Тип    | Описание                   |
| -------- | ------ | -------------------------- |
| balance  | number | Отображает ваш баланс      |
