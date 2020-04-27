# getPayouts

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    apiKey: process.env.API_KEY
})
```

Получение списка выплат
```js
await payment.api.getPayouts() // => Promise<Object>
```
Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|--------|------------------|
| result | object | Возращает объект с выплатами |
