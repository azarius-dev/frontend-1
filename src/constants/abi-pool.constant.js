const ABI_POOL = [
	'function earned(address account) public view returns (uint256)',
	'function rewardDistributed() public view returns(uint256)',
	'function poolEnabled() public view returns(bool)',
	'function periodFinish() public view returns(uint256)',
	'function maxReward() public view returns(uint256)',
	'function initReward() public view returns(uint256)',
	'function rewardRate() public view returns(uint256)',
	'function stake(uint256 amount)',
	'function withdraw(uint256 amount)',
	'function exit()',
	'function getReward()',
	'function balanceOf(address account) public view returns (uint256)'
];

export default ABI_POOL;
