# createSession

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    secretKey: process.env.SECRET_KEY,
    apiKey: process.env.API_KEY
})
```

Разворачиваем сервер для принятия запросов с anypay.io

```js
payment.api.createSession(port, {
   url: 'payment',
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
| port      | Number   | Порт для создание web-сервера                        | 3000         |
| url       | string   | Ссылка на которую будут отпраляться запросы          | undefined    |
| logging   | Boolean  | Параметр с дефолтными логами URL, METHOD, PING       | True         |
| method    | string   | Метод GET/POST для принятие запросов с сервера       | POST         |
| handler   | function | Обработчик для обработки запросов req.body/req.query | undefined    |
