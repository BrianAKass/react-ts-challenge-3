import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { useStore } from '../../stores';
import { FormView } from './form-view';

const testText = `I rated this app a one star in the past due to how tragically slow it was but with recent updates I need to change my rating to four stars. 

It's still a little laggy in some spots, even on a brand new S10+, but it's way better than it was before. I just wish there was a way to open the app with messages as the first menu you see rather than the photo mode.`;

export const FormContainer = observer(() => {
  const store = useStore();
  const [text, setText] = useState(testText); // TODO: change this to an empty string and test with various texts

  const onSubmit = async () => {
    await store.textSegmentStore.processText(text);
    console.log(store.textSegmentStore.textSegments);
  };

  return <FormView text={text} onChangeText={setText} onSubmit={onSubmit} />;
});
