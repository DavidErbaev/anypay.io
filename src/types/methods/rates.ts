export default interface IRatesResponse {
	in: {
		uah: number;
		byn: number;
		kzt: number;
		usd: number;
		eur: number;
		btc: number;
		eth: number;
		bch: number;
		ltc: number;
	};
	out: {
		uah: number;
        usd: number;
    };
}