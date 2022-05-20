import * as firestore from 'firebase/firestore';
import {
  collection,
  doc,
  documentId,
  DocumentSnapshot,
  getDocs,
  onSnapshot,
  query,
  where
} from 'firebase/firestore';
import { pick } from 'lodash-es';
import { db } from '../../utils/firebase';
import schema from './schema';

export class DBModel {
  type: string;
  db: any;
  constructor(type: string) {
    this.type = type;
    this.db = collection(db, type);
  }

  _call(method: string, id: string, ...args) {
    return firestore[method](doc(this.db, id), ...args).then(resolveDoc);
  }

  get(id: string) {
    return this._call('getDoc', id);
  }

  getAll() {
    return getDocs(query(this.db)).then((docs) => resolveMultiple(docs));
  }

  getAllById(ids) {
    return this.getWhere(documentId(), 'in', ids);
  }

  getWhere(key, comparator, value) {
    return getDocs(query(this.db, where(key, comparator, value))).then(
      (result) => resolveMultiple(result.docs)
    );
  }

  create(id, payload) {
    return this._call('setDoc', id, {
      ...this.pick(payload),
      created: Date.now(),
      updated: Date.now()
    });
  }

  update(id, payload) {
    return this._call(
      'setDoc',
      id,
      { ...this.pick(payload), updated: Date.now() },
      { merge: true }
    );
  }

  delete(id) {
    return this._call('deleteDoc', id);
  }

  sub(func) {
    return onSnapshot(query(this.db), (querySnapshot) => {
      func(resolveMultiple(querySnapshot.docs));
    });
  }

  subByKey(func, ...args) {
    return onSnapshot(doc(this.db, ...args), (doc) => func(resolveDoc(doc)));
  }

  pick(payload) {
    payload.timestamp_updated = Date.now();
    return { ...pick(payload, schema[this.type]) };
  }
}
const resolveMultiple = (d) => d.map((doc) => resolveDoc(doc));

function resolveDoc(docRef) {
  if (docRef && docRef.exists()) {
    return { ...docRef.data(), docRef };
  }
  return false;
}
