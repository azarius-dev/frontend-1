const ABI_SEED = [
	'function priceAtLaunch() external view returns(uint256)',
	'function tokenExchangeRate() external view returns(uint256)',
	'function BNBCap() external view returns(uint256)',
	'function walletBNBCap() external view returns(uint256)',
	'function walletCap() external view returns',
	'function UwUDistribution() external view returns(uint256)',
	'function seedDuration() external view returns(uint256)',
	'function seedEndsAt() external view returns(uint256)',
	'function seedEnabled() external view returns(bool)',
	'function remainingUwUDistributionDuration() external view returns(uint256)',
	'function remainingUwUDistributionEndsAt() external view returns(uint256)',
	'function remainingUwUDistributionEnabled() external view returns(bool)',
	'function BNBDeposited() external view returns(uint256)',
	'function UwUDistributed() external view returns(uint256)',
	'function Users(address) external view returns(uint256,uint256,uint256)'
];

export default ABI_SEED;
