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
    secretKey: process.env.SECRET_KEY,
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
| secretKey | string | secretKey | null |
| apiKey | string | API Key | null |
