//FlyerService.js

import { db } from '../config/firebase.app';

var item = {
  title:this.refs.title.value.trim(),
  description:this.refs.description.value.trim(),
  start: Date(),
  end: Date(),

}

export const addFlyer = (item) => {
  db.ref().child('items').push({
    title: item,
    description: item,

  });
}
