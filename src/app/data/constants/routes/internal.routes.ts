export const ROUTES_PATHS = {
	AUTH: {
		DEFAULT: `auth`,
		LOGIN: `sigin`,
		REGISTER: `sigup`,
	},
	ASESORI: {
		DEFAULT: ``,
		CREDIT: {
			DEFAULT: `credit`,
			RESULTS: `results`,
		},
		INSURANCE: {
			DEFAULT: `insurance`,
			RESULTS: `results`,
		},
	},
	SERVER: {
		ERROR_404: `404`,
		ERROR_400: `400`,
		ERROR_401: `401`,
		ERROR_403: `403`,
		ERROR_500: `500`,
	},
};

export const INTERNAL_PATHS = {
	/**
	 * Auth
	 */
	AUTH_DEFAULT: `${ROUTES_PATHS.AUTH.DEFAULT}`,
	AUTH_LOGIN: `${ROUTES_PATHS.AUTH.LOGIN}`,
	AUTH_REGISTER: `${ROUTES_PATHS.AUTH.REGISTER}`,
	/**
	 * ASESORI
	 */
	ASESORI_DEFAULT: `${ROUTES_PATHS.ASESORI.DEFAULT}`,
	/**
	 * ASESORI - CREDIT
	 */
	ASESORI_CREDIT_DEFAULT: `${ROUTES_PATHS.ASESORI.CREDIT.DEFAULT}`,
	ASESORI_CREDIT_RESULTS: `${ROUTES_PATHS.ASESORI.CREDIT.RESULTS}`,
	/**
	 * ASESORI - INSURANCE
	 */
	ASESORI_INSURANCE_DEFAULT: `${ROUTES_PATHS.ASESORI.INSURANCE.DEFAULT}`,
	ASESORI_INSURANCE_RESULTS: `${ROUTES_PATHS.ASESORI.INSURANCE.RESULTS}`,
	/**
	 * Server
	 */
	SERVER_ERROR_404: `${ROUTES_PATHS.SERVER.ERROR_404}`,
	SERVER_ERROR_401: `${ROUTES_PATHS.SERVER.ERROR_401}`,
	SERVER_ERROR_400: `${ROUTES_PATHS.SERVER.ERROR_400}`,
	SERVER_ERROR_403: `${ROUTES_PATHS.SERVER.ERROR_403}`,
	SERVER_ERROR_500: `${ROUTES_PATHS.SERVER.ERROR_500}`,
};

export const INTERNAL_ROUTES = {
	/**
	 * Auth
	 */
	AUTH_LOGIN: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_LOGIN}`,
	AUTH_REGISTER: `/${INTERNAL_PATHS.AUTH_DEFAULT}/${INTERNAL_PATHS.AUTH_REGISTER}`,
	/**
	 * Server
	 */
	SERVER_ERROR_404: `/${INTERNAL_PATHS.SERVER_ERROR_404}`,
	SERVER_ERROR_401: `/${INTERNAL_PATHS.SERVER_ERROR_401}`,
	SERVER_ERROR_400: `/${INTERNAL_PATHS.SERVER_ERROR_400}`,
	SERVER_ERROR_403: `/${INTERNAL_PATHS.SERVER_ERROR_403}`,
	SERVER_ERROR_500: `/${INTERNAL_PATHS.SERVER_ERROR_500}`,
	/**
	 * ASESORI
	 */
	ASESORI_DEFAULT: `/${INTERNAL_PATHS.ASESORI_DEFAULT}`,
	/**
	 * ASESORI - CREDIT
	 */
	ASESORI_CREDIT_DEFAULT: `/${INTERNAL_PATHS.ASESORI_CREDIT_DEFAULT}`,
	ASESORI_CREDIT_RESULTS: `/${INTERNAL_PATHS.ASESORI_CREDIT_DEFAULT}/${INTERNAL_PATHS.ASESORI_CREDIT_RESULTS}`,
	/**
	 * ASESORI - INSURANCE
	 */
	ASESORI_INSURANCE_DEFAULT: `/${INTERNAL_PATHS.ASESORI_INSURANCE_DEFAULT}`,
	ASESORI_INSURANCE_RESULTS: `/${INTERNAL_PATHS.ASESORI_INSURANCE_DEFAULT}/${INTERNAL_PATHS.ASESORI_INSURANCE_RESULTS}`,
};