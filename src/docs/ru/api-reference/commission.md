# getCommissions

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    apiKey: process.env.API_KEY
})
```

Узнаем комиссии проекта.
```js
await payment.api.getCommissions(projectId); // => Promise<Object>
```
| Параметр | Тип | Описание |
|----------|--------|------------------|
| projectId | Number | Id проекта |

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|--------|------------------|
| result | object | Выводит объект с комиссиями |