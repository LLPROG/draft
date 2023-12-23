// @ts-nocheck

export const trimmingPositive = (A, D, trimApparente, LBM) => {
	let result = A + (D * trimApparente) / LBM;
	return result;
};

export const trimmingNegative = (A, D, trimApparente, LBM) => {
	let result = A - (D * trimApparente) / LBM;
	return result;
};

export const calcResult = (FWD, MID, AFT, D, trimApparente, LBM, setImmersion) => {
	let DfwdPP = D[0];
	let DmidPP = D[1];
	let DaftPP = D[2];

	let IM_FWD = setImmersion(FWD, DfwdPP, trimApparente, LBM);
	let IM_MID = setImmersion(MID, DmidPP, trimApparente, LBM);
	let IM_AFT = setImmersion(AFT, DaftPP, trimApparente, LBM);

	let trim = IM_AFT - IM_FWD;
	let flessione = IM_MID - (IM_AFT + IM_FWD) / 2;
	let quarterMean = (IM_AFT + IM_FWD + IM_MID * 6) / 8;
	let meanOfMean = (IM_MID + (IM_AFT + IM_FWD) / 2) / 2;
	let meanOfMeanOfMean = (quarterMean + meanOfMean) / 2;

	let mean = {
		quarterMean,
		meanOfMean,
		meanOfMeanOfMean
	};

	return {
		trim,
		flessione,
		mean
	};
};

export const calc = (A1, A2, A3, B1, B2, B3, D, LBM) => {
	let FWD = (A1 + B1) / 2;
	let MID = (A2 + B2) / 2;
	let AFT = (A3 + B3) / 2;

	let trimApparente = AFT - FWD;

	if (trimApparente >= 0) {
		return calcResult(FWD, MID, AFT, D, trimApparente, LBM, trimmingPositive);
	} else {
		return calcResult(FWD, MID, AFT, D, trimApparente, LBM, trimmingNegative);
	}
};

export const getMeanCorrected = (mean, selectedMean, keelThx) => {
	switch (selectedMean) {
		case 'Quarter Mean':
			return mean.quarterMean - keelThx;
		case 'Mean of Mean':
			return mean.meanOfMean - keelThx;
		case 'Mean of Mean of mean':
			return mean.meanOfMeanOfMean - keelThx;
		default:
			throw console.error('Error: Mean not found');
	}
};

export const getTableValues = (tableValue, meanCorrected, lessRow, moreRow, draft, index) => {
	let D_Draft = tableValue / draft;
	let D_Mean = meanCorrected - parseFloat(lessRow[0]);

	let res = D_Draft * D_Mean;

	if (lessRow[index] < moreRow[index]) {
		return res + parseFloat(lessRow[index]);
	} else {
		return parseFloat(lessRow[index]) - res;
	}
};

export const getTableResult = (vessel, meanCorrected, isMtc) => {
	let DRAFT_COLUMN = vessel?.tables.map((t) => t[0]).flat();
	let lessIndex = DRAFT_COLUMN.indexOf(
		DRAFT_COLUMN.filter((t) => parseFloat(t) < meanCorrected).slice(-1)[0]
	);
	let moreIndex = DRAFT_COLUMN.indexOf(
		DRAFT_COLUMN.filter((t) => parseFloat(t) > meanCorrected)[0]
	);
	console.log('meanCorrected:', meanCorrected);

	// let absoluteRow = vessel?.tables[absoluteIndex];
	let lessRow = vessel?.tables[lessIndex];
	let moreRow = vessel?.tables[moreIndex];

	let DRAFT = parseFloat(moreRow[0]) - parseFloat(lessRow[0]);

	let DISPLACEMENT = parseFloat(moreRow[1]) - parseFloat(lessRow[1]);
	let TPC = parseFloat(moreRow[2]) - parseFloat(lessRow[2]);
	let MTC = parseFloat(moreRow[3]) - parseFloat(lessRow[3]);
	let LCF = parseFloat(moreRow[4]) - parseFloat(lessRow[4]);

	if (isMtc) {
		return getTableValues(MTC, meanCorrected, lessRow, moreRow, DRAFT, 3);
	} else {
		return {
			DIS: getTableValues(DISPLACEMENT, meanCorrected, lessRow, moreRow, DRAFT, 1),
			TPC: getTableValues(TPC, meanCorrected, lessRow, moreRow, DRAFT, 2),
			LCF: getTableValues(LCF, meanCorrected, lessRow, moreRow, DRAFT, 4)
		};
	}
};
