# getRates

```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
    api_id: process.env.API_ID,
    api_key: process.env.API_KEY,
    merchant_id: process.env.MERCHANT_ID,
    secretKey: process.env.SECRET_KEY,
})
```

Получение курсов валют

```js
await payment.api.getRates() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр  | Тип      | Описание                                             |
| --------- | -------- | ---------------------------------------------------- |
| result    | object   | Возращает объект с курсом валют                      |
