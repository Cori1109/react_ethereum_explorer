import React, { useEffect, useState } from 'react';
import useStyles from './style';
import Web3Service from '../../services/Web3service';
import { withWeb3 } from 'react-web3-provider';

const Dashboard = ({ web3, ...rest }) => {

  const classes = useStyles();
  const [blockNumberList, setBlockNumberList] = useState([]);
  const [blockList, setBlockList] = useState([]);
  const [latestBlock, setLatestBlock] = useState(null);
  
  useEffect(() =>  {
    setInterval(searchBlockNumberHandler, 1000);
  }, []);

  useEffect(() => {
    if (latestBlock) {
      getLatestBlock()
    }
  }, [latestBlock]);

  const getLatestBlock = async () => {
      console.log(await Web3Service.getBlock(latestBlock));    
  }

  const searchBlockNumberHandler = async () => {
    let blockNumber = await Web3Service.getBlockNumber(web3);
    if (blockNumberList.length != 0 && blockNumberList[blockNumberList.length - 1] !== blockNumber) {
      setBlockNumberList([blockNumberList.push(blockNumber)]);
      setLatestBlock(blockNumber);
    }
  }

  
  return (
    <>
      a
    </>
  );
};

export default withWeb3(Dashboard);
