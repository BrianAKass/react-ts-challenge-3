import React from 'react';
import { List } from '../list';
import { Form } from '../form';

export interface AppViewProps {}

export function AppView(props: AppViewProps) {
  // TODO: display form or list view depending on state
  //return <Form />;
  return <List />;
}
