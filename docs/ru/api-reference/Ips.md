# getIps

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    secretKey: process.env.SECRET_KEY,
    apiKey: process.env.API_KEY
})
```

Список IP адресов сервиса

```js
await payment.api.getIps() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр  | Тип      | Описание                                             |
| --------- | -------- | ---------------------------------------------------- |
| result    | object   | Выводит объект с IP Адресами сервиса                 |
