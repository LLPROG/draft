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
	let Dfwd = D[0];
	let Dmid = D[1];
	let Daft = D[2];

	let Ifwd = callback(AB1, Dfwd, trimApparente, LBM);
	let Imid = callback(AB2, Dmid, trimApparente, LBM);
	let Iaft = callback(AB3, Daft, trimApparente, LBM);

	let result = {
		Ifwd: Ifwd,
		Imid: Imid,
		Iaft: Iaft
	};

	let trim = Iaft - Ifwd >= 0 ? true : false;
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
