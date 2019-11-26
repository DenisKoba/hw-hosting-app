import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class DatabaseService {
  constructor(private db: AngularFirestore) {}

  createHomeworkRecord(data) {
    return this.db.collection(`homeworks`).add({
      ...data
    });
  }

  fetchCollection(fieldName, id: string) {
    const ref = this.db.firestore.collection('homeworks');
    return ref.where(fieldName, '==', id)
      .get()
      .then((querySnapshot) => {
        const docsArr = []
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          docsArr.push(doc.data());
        });
        return docsArr;
      });
  }
}
