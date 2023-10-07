// @ts-nocheck

export const trimmingPositive = (A, D, trimApparente, LBM) => {
	let result = A + (D * trimApparente) / LBM;
	return result;
};

export const trimmingNegative = (A, D, trimApparente, LBM) => {
	let result = A - (D * trimApparente) / LBM;
	return result;
};

export const calcResult = (AB1, AB2, AB3, D, trimApparente, LBM, callback) => {
	let Ifwd = callback(AB1, D, trimApparente, LBM);
	let Imid = callback(AB2, D, trimApparente, LBM);
	let Iaft = callback(AB3, D, trimApparente, LBM);
	let result = [Ifwd, Imid, Iaft];
	console.log('result', result);

	let trim = Iaft - Ifwd;
	let flessione = Imid - [(Iaft + Ifwd) / 2];

	return {
		result,
		trim,
		flessione
	};
};

export const calc = (A1, A2, A3, B1, B2, B3, D, LBM) => {
	let AB1 = (A1 + B1) / 2;
	let AB2 = (A2 + B2) / 2;
	let AB3 = (A3 + B3) / 2;

	let trimApparente = AB3 - AB1;

	let result;

	if (trimApparente >= 0) {
		result = calcResult(AB1, AB2, AB3, D, trimApparente, LBM, trimmingPositive);
	} else {
		result = calcResult(AB1, AB2, AB3, D, trimApparente, LBM, trimmingNegative);
	}

	return result;
};
