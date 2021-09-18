# createSession

```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
    api_id: process.env.API_ID,
    api_key: process.env.API_KEY,
    merchant_id: process.env.MERCHANT_ID,
    secretKey: process.env.SECRET_KEY,
})
```

Разворачиваем сервер для принятия запросов с anypay.io

```js
payment.api.createSession({
   url: 'payment',
   port: 3333,
   method: "POST",
   logging: false,
   handler: (req, res) => {
      res.json(req.body)
      console.log(req.body)
   }
}) // => Promise<Object>
```

| Параметр  | Тип      | Описание                                             | По умолчанию |
| --------- | -------- | ---------------------------------------------------- | ------------ |
| port      | Number   | Порт для создание web-сервера                        | 3888         |
| url       | string   | Ссылка на которую будут отпраляться запросы          | undefined    |
| logging   | Boolean  | Параметр с дефолтными логами URL, METHOD, PING       | True         |
| method    | string   | Метод GET/POST для принятие запросов с сервера       | POST         |
| handler   | function | Обработчик для обработки запросов req.body/req.query | undefined    |
