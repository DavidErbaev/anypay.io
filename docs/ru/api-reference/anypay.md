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

| Параметр  | Тип    | Описание                          |
| --------- | ------ | --------------------------------- |
| apiId     | string | API ID Profile - anypay.io        |
| secretKey | string | SecretKey Project - anypay.io     |
| apiKey    | string | API Key Profile - anypay.io       |
