# createPayout

```js
var { AnyPay } = require('anypay.io')
var payment = new AnyPay({
    apiId: process.env.API_ID,
    apiKey: process.env.API_KEY
})
```

Создание выплаты
```js
await payment.api.createPayout({ ... }) // => Promise<Object>
```
| Параметр | Тип | Описание |
|----------|--------|------------------|
| payout_id | Number | Уникальный номер выплаты в системе продавца |
| payout_type | String | Платежная система |
| amount | Number | Сумма выплаты в рублях |
| wallet | String | Кошелек/Номер карты получателя |

Платёжные системы:
- `qiwi` — Qiwi Wallet;
- `ym` — Яндекс.Деньги;
- `wm`— Webmoney (WMZ);
- `mc` — Мобильный платеж;
- `card` — Visa/Mastercard/Мир

Возвращает следующие свойства

| Параметр | Тип | Описание |
|----------|--------|------------------|
| result | object | Возращает объект с выполненным запросом |