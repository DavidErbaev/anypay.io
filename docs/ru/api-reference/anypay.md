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
| options  | Object | [Опции](#options) |

## Options

### Общие опции

| Параметр  | Тип    | Описание                          |
| --------- | ------ | --------------------------------- |
| apiId     | Number | API ID Profile - anypay.io        |
| secretKey | String | SecretKey Project - anypay.io     |
| apiKey    | String | API Key Profile - anypay.io       |
