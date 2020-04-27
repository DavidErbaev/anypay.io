# getRates

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    apiKey: process.env.API_KEY
})
```

Получение курсов валют
```js
await payment.api.getRates() // => Promise<Object>
```
Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|--------|------------------|
| result | object | возращает объект с курсом валют |