import { ethers } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import { contractAddress, lpAbi } from '../utils';

export default async () => {

    try {

        const provider = await new ethers.providers.EtherscanProvider('homestead', 'WSEBKEYQAFZ8AUGMFAKJR7GPCNYZ9Q3AIE');

        const contractDegov = await new ethers.Contract(contractAddress.degov, lpAbi, provider);
        const totalSupplyDegov = await contractDegov.totalSupply();
        const pool2BalanceDegov = await contractDegov.balanceOf(contractAddress.degovDaiLpPool);
        const degovCircSupply = formatEther(totalSupplyDegov.sub(pool2BalanceDegov));

        return degovCircSupply;

    } catch {
        
    }
};