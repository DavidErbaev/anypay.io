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
   handler: (req, res) => {
      res.json(req.query)
      console.log(req.query)
   }
}) // => Promise<Object>
```

| Параметр | Тип | Описание |
|------------------|-------|------------------|
| port | Number | Порт |
| url | string | Ссылка на которую будут приходить post запросы |
| handler | function | Обработчик |
