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

export const getMean = (selectedMean, mean) => {
	switch (selectedMean) {
		case 'Quarter Mean':
			return mean.quarterMean;
		case 'Mean of Mean':
			return mean.meanOfMean;
		case 'Mean of Mean of mean':
			return mean.meanOfMeanOfMean;
		default:
			throw console.error('Error: Mean not found');
	}
};

export const getTableValues = (tableValue, meanCorrected, lessRow, moreRow, draft, index) => {
	let D_Draft = tableValue / draft;
	let D_Mean = meanCorrected - lessRow[0];
	let res = D_Draft * D_Mean;

	if (lessRow[index] < moreRow[index]) {
		return res + lessRow[index];
	} else {
		return lessRow[index] - res;
	}
};

export const getTableResult = (vessel, meanCorrected, isMtc) => {
	let DRAFT_COLUMN = vessel.tables.map((t) => t[0]).flat();
	// console.log('tables:', vessel.tables);

	let lessIndex = DRAFT_COLUMN.indexOf(DRAFT_COLUMN.filter((t) => t < meanCorrected).slice(-1)[0]);
	let moreIndex = DRAFT_COLUMN.indexOf(DRAFT_COLUMN.filter((t) => t > meanCorrected)[0]);

	// let absoluteRow = vessel?.tables[absoluteIndex];
	let lessRow = vessel.tables[lessIndex];
	let moreRow = vessel.tables[moreIndex];

	console.log('lessRow:', lessRow);
	console.log('moreRow:', moreRow);
	console.log('meanCorrected:', meanCorrected);

	let DRAFT = moreRow[0] - lessRow[0];

	let DISPLACEMENT = moreRow[1] - lessRow[1];
	let TPC = moreRow[2] - lessRow[2];
	let MTC = moreRow[3] - lessRow[3];
	let LCF = moreRow[4] - lessRow[4];

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

export const getFinalsFormule = (trim, TPC, LCF, LBP, MTC1, MTC2, DISPLACEMENT, waterDensity) => {
	let TRIM_CORRECTION_1 = (trim * TPC * LCF * 100) / LBP;
	let TRIM_CORRECTION_2 = (trim * trim * (MTC1 - MTC2) * 50) / LBP;

	let FINAL_DISPLACEMENT =
		((DISPLACEMENT + TRIM_CORRECTION_1 + TRIM_CORRECTION_2) * waterDensity) / 1.025;
	let DENSITY_CORRECTION =
		FINAL_DISPLACEMENT - (DISPLACEMENT + TRIM_CORRECTION_1 + TRIM_CORRECTION_2);

	return {
		TRIM_CORRECTION_1: TRIM_CORRECTION_1,
		TRIM_CORRECTION_2: TRIM_CORRECTION_2,
		FINAL_DISPLACEMENT: FINAL_DISPLACEMENT,
		DENSITY_CORRECTION: DENSITY_CORRECTION
	};
};

export const getFinals = (FINAL_DISPLACEMENT, LIGHTSHIP, COSTANT_USER, array) => {
	let DWT = FINAL_DISPLACEMENT - LIGHTSHIP;
	let DEDUCTIONS = getDeductions(array);

	let CARGO = DWT - DEDUCTIONS;
	let COSTANT = DWT - DEDUCTIONS;

	if (COSTANT_USER) CARGO = COSTANT - COSTANT_USER;

	return {
		DWT: DWT,
		CARGO: CARGO,
		COSTANT: COSTANT,
		DEDUCTIONS: DEDUCTIONS
	};
};

export const getDeductions = (array) => {
	return array.reduce((accumulator, current) => {
		return accumulator + current.value;
	}, 0);
};
