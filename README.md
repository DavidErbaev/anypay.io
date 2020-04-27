# anypay.io

## Description
>[EN] Module for using the payment system API AnyPay.<br/>
>[RU] Модуль для использования платежной системы API AnyPay.

## Installation
```bash
npm i vk-io-longpoll
```

## Example
```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
   apiId: process.env.API_ID
   apiKey: process.env.API_KEY
})

(async () => {
     let balance = await payment.api.getBalance()
    
     console.log(balance)
})
```

## README
   * [RU](src/docs/ru/README.md)
   * [EN](src/docs/en/README.md)
# anypay.io
# anypay.io
