import React, { useEffect, useState } from 'react';
import useStyles from './style';
import Web3Service from '../../services/Web3service';
import { withWeb3 } from 'react-web3-provider';
import {
  Grid,
  Card,
  Button,
} from '@material-ui/core';
import { SortTable } from './components';
const Dashboard = ({ web3, ...rest }) => {

  const classes = useStyles();
  const [blockNumberList, setBlockNumberList] = useState([]);
  const [blockList, setBlockList] = useState([]);
  const [latestBlock, setLatestBlock] = useState(null);
  const [progressStatus, setProgressStatus] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (latestBlock != null) {
      getLatestBlock()
    }
  }, [latestBlock]);

  useEffect(() => {
    if (intervalId && !progressStatus) {
      clearInterval(intervalId);
    } else if (progressStatus) {
      setIntervalId(setInterval(searchBlockNumberHandler, 1000));
    }
  }, [progressStatus]);

  const getLatestBlock = async () => {
    let block = await Web3Service.getBlock(web3, latestBlock);
    setBlockList([...blockList, {miner: block.miner, totalDifficulty: block.totalDifficulty, transactionCount: block.transactions.length, number: latestBlock}]);
  }

  const searchBlockNumberHandler = async () => {
    let blockNumber = await Web3Service.getBlockNumber(web3);
    
    if (!(blockNumberList.length == 0 && blockNumberList[blockNumberList.length - 1] === blockNumber)) {
      setBlockNumberList([blockNumberList.push(blockNumber)]);
      setLatestBlock(blockNumber);
    }
  }

  const handleProgressStatus = () => {
    setProgressStatus(!progressStatus);
  }

  
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item md={3} sm={5} xs={12} >
          <Button variant="contained" color="secondary" className={classes.btn_progress} onClick={handleProgressStatus}>
            {progressStatus ? 'Pause' : 'Resume'}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <SortTable
              data={blockList}
            />
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default withWeb3(Dashboard);
