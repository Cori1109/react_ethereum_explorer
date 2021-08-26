import Web3 from 'web3';
import { PROJECT_ID } from '../configs/web3';

class Web3service {
  getWeb3Provider = () => {
    let web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${PROJECT_ID}`));
    return web3;
  }

  getBlock = async (web3) => {
    let block = await web3.eth.getBlock('latest');
    return block;
  }

  getBlockNumber = async (web3) => {
    let blockNumber = await web3.eth.getBlockNumber();
    return blockNumber;
  }

  getBatchRequest = (web3) => {
    let batch = new web3.eth.BatchRequest();
    return batch;
  }


}
export default new Web3service();