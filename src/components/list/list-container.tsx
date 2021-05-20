import { Switch } from '@material-ui/core';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { useStore } from '../../stores';
import { ListView } from './list-view';

export const ListContainer = observer(() => {
  const store = useStore();
  const [list, setList] = useState(store.textSegmentStore.textSegments);
  const handleBack = () => {
    store.textSegmentStore.back();
  };

  // Would have made this less redundant but I was pressed for time.
  function compareText(a: any, b: any) {
    const thingA = a.text.toUpperCase();
    const thingB = b.text.toUpperCase();
    let comparison = 0;
    if (thingA > thingB) {
      comparison = 1;
    } else if (thingA < thingB) {
      comparison = -1;
    }
    return comparison;
  }

  function compareRecords(a: any, b: any) {
    const thingA = a.records;
    const thingB = b.records;
    let comparison = 0;
    if (thingA > thingB) {
      comparison = -1;
    } else if (thingA < thingB) {
      comparison = 1;
    }
    return comparison;
  }

  function comparePosition(a: any, b: any) {
    const thingA = a.records;
    const thingB = b.records;
    let comparison = 0;
    if (thingA > thingB) {
      comparison = -1;
    } else if (thingA < thingB) {
      comparison = 1;
    }
    return comparison;
  }
  // End of redundant function

  const sortList = (sort: string) => {
    switch (sort) {
      case 'Position':
        setList(store.textSegmentStore.textSegments.sort(comparePosition));
        break;
      case 'Alphabetical':
        setList(store.textSegmentStore.textSegments.sort(compareText));
        break;
      case 'Records':
        setList(store.textSegmentStore.textSegments.sort(compareRecords));
        break;
      default:
        setList(store.textSegmentStore.textSegments.sort(comparePosition));
        break;
    }
  };
  return <ListView test={list} handleBack={handleBack} sortList={sortList} />;
});
