import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles({
  root : {
  width: '100%',
  margin: 10,
  }
});

export default function LetterAvatars() {
  const classes = useStyles();
  
  return (
    <div>
    <strong>
      実績一覧
    </strong>
    <List className={classes.root}>
      <ListItem>
        <ListItemText primary="ITストラテジスト試験" secondary="2019/10/23 不合格" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="応用情報技術者試験" secondary="2018/10/22 合格" />
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText primary="基本情報技術者試験" secondary="2017/4/19 合格" />
      </ListItem>
      <Divider />
    </List>
    </div>
  );
}