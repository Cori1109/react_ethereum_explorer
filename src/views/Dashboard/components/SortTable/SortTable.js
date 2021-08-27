import React from 'react';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import useStyles from './style';

const SortTable = (props) => {
  const classes = useStyles();
  const { data, ...rest } = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>
            <TableSortLabel>
              Number
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel>
              Miner
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel>
              Transactions
            </TableSortLabel>
          </TableCell>
          <TableCell>
            <TableSortLabel>
              Difficulty
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, indx) => {
          return (
            <TableRow key={indx} className={classes.root}>
              <TableCell>{item.number}</TableCell>
              <TableCell>{item.miner}</TableCell>
              <TableCell>{item.transactionCount}</TableCell>
              <TableCell>{item.totalDifficulty}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default withRouter(SortTable);
