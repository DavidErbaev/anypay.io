# getIps

```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
    api_id: process.env.API_ID,
    api_key: process.env.API_KEY,
    merchant_id: process.env.MERCHANT_ID,
    secretKey: process.env.SECRET_KEY,
})
```

Список IP адресов сервиса

```js
await payment.api.getServiceIP() // => Promise<Object>
```

Возвращает следующие свойства

| Параметр  | Тип      | Описание                                             |
| --------- | -------- | ---------------------------------------------------- |
| result    | array   | Выводит объект с IP Адресами сервиса                  |
