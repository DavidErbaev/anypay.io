# anypay.io

## Description

>[EN] Module for using the payment system API AnyPay.
>[RU] Модуль для использования платежной системы API AnyPay.

## Installation

```bash
npm i anypay.io
```

## Example

```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
    apiId: process.env.API_ID,
    secretKey: process.env.SECRET_KEY,
    apiKey: process.env.API_KEY
})

(async () => {
     let balance = await payment.api.getBalance()
    
     console.log(balance)
})
```

## README

* [RU](docs/ru)
* [EN](docs/en)
