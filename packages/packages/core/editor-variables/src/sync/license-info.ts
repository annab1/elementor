export function getLicenseInfo() {
	return {
		hasPro: !! window.elementorPro,
		isExpiredPro: !! ( window.elementorCommon as any )?.config?.library_connect?.is_expired,
	};
}
