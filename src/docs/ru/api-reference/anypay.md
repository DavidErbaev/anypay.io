# AnyPay

```js
const AnyPay = require('anypay.io')

// OR

const { AnyPay } = require('anypay.io')
```

## Constructor
Инициализация новой инстанции
```js
    new AnyPay([options])
```

Пример
```js
   new AnyPay({
        apiId: process.env.API_ID,
        apiKey: process.env.API_KEY
   })
```

| Параметр | Тип | Описание |
|----------|--------|-------------------|
| options  | string | [Опции](#options) |

## Options
### Общие опции

| Опция | Тип | Описание | По умолчанию |
|----------|--------|-----------------------------------|--------------|
| apiId    | string | API ID | null |
| apiKey | string | API Key | null |
