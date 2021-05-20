import { Box, Button, Card, CardActions, CardContent, TextareaAutosize, CircularProgress } from '@material-ui/core';
import React from 'react';

import useStyles from './form-styles';

export interface FormViewProps {
  text: string;
  loading: Boolean;
  onChangeText: (text: string) => void;
  onSubmit: () => void;
}

export function FormView(props: FormViewProps) {
  const { text, loading, onChangeText, onSubmit } = props;
  const classes = useStyles();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => onChangeText(e.currentTarget.value);

  return (
    <Box className={classes.root}>
      <Card>
        <CardContent className={classes.cardContent}>
          {loading ? (
            <TextareaAutosize className={classes.textarea} rowsMin={5} rowsMax={10} value={text} disabled />
          ) : (
            <TextareaAutosize
              className={classes.textarea}
              rowsMin={5}
              rowsMax={10}
              value={text}
              onChange={handleChange}
            />
          )}
        </CardContent>
        <CardActions className={classes.cardActions}>
          {loading && <CircularProgress />}
          <Box flex={1} />
          {loading ? (
            <Button className={classes.button} variant="contained" color="primary" disabled>
              Analyze
            </Button>
          ) : (
            <Button className={classes.button} variant="contained" color="primary" onClick={onSubmit}>
              Analyze
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
}
