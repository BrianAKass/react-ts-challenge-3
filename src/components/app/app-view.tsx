import React from 'react';
import { List } from '../list';
import { Form } from '../form';

export interface AppViewProps {
  loaded: Boolean;
}

export const AppView = (props: AppViewProps) => {
  const { loaded } = props;

  if (loaded) {
    return <List />;
  } else {
    return <Form />;
  }
};
