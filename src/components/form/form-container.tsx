import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { useStore } from '../../stores';
import { FormView } from './form-view';

export const FormContainer = observer(() => {
  const store = useStore();
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState('');
  const onSubmit = async () => {
    setLoading(true);
    await store.textSegmentStore.processText(text);
    console.log(store.textSegmentStore.textSegments);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return <FormView text={text} loading={loading} onChangeText={setText} onSubmit={onSubmit} />;
});
