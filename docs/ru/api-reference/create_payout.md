# createPayout

```js
const { AnyPay } = require('anypay.io')
const payment = new AnyPay({
    api_id: process.env.API_ID,
    api_key: process.env.API_KEY,
    merchant_id: process.env.MERCHANT_ID,
    secretKey: process.env.SECRET_KEY,
})
```

Создание выплаты

```js
await payment.api.createPayout({ ... }) // => Promise<Object>
```

| Параметр    | Тип      | Описание                                    |
| ---------   | -------- | ------------------------------------------- |
| payout_id   | Number   | Уникальный номер выплаты в системе продавца |
| payout_type | String   | Платежная система                           |
| amount      | Number   | Сумма выплаты в рублях                      |
| wallet      | String   | Кошелек/Номер карты получателя              |

Платёжные системы:

- `qiwi` — Qiwi Wallet;
- `ym` — Яндекс.Деньги;
- `wm`— Webmoney (WMZ);
- `mc` — Мобильный платеж;
- `card` — Visa/Mastercard/Мир

Возвращает следующие свойства

| Параметр  | Тип      | Описание                                |
| --------- | -------- | --------------------------------------- |
| result    | object   | Возращает объект с выполненным запросом |
