import { ethers } from 'ethers';
import { formatEther } from 'ethers/lib/utils';
import { contractAddress, lpAbi } from '../utils';

export default async () => {

    try {

        const provider = await new ethers.providers.EtherscanProvider('homestead', 'WSEBKEYQAFZ8AUGMFAKJR7GPCNYZ9Q3AIE');

        const contract = await new ethers.Contract(contractAddress.debase, lpAbi, provider);
        const totalSupply = await contract.totalSupply();
        const stabilizerBalance = await contract.balanceOf(contractAddress.debasePolicy);
        const pool1Balance = await contract.balanceOf(contractAddress.debaseDaiPool);
        const pool2Balance = await contract.balanceOf(contractAddress.debaseDaiLpPool);
        const debaseCircSupply = formatEther(totalSupply.sub(stabilizerBalance).sub(pool1Balance).sub(pool2Balance));

        return debaseCircSupply;

    } catch {
        
    }

};