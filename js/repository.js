class IndexedDBRepository {
  constructor(dbName, version = 1) {
    this.dbName = dbName;
    this.version = version;
    this.db = null;
  }

  async init(storeNames) {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName, this.version);

      request.onupgradeneeded = (event) => {
        this.db = event.target.result;
        storeNames.forEach(storeName => {
          if (!this.db.objectStoreNames.contains(storeName)) {
            this.db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
          }
        });
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        reject(`Erro ao abrir o IndexedDB: ${event.target.errorCode}`);
      };
    });
  }

  async add(storeName, data) {
    return this._executeTransaction(storeName, 'readwrite', (store) => store.add(data));
  }

  async update(storeName, data) {
    return this._executeTransaction(storeName, 'readwrite', (store) => store.put(data));
  }

  async delete(storeName, id) {
    return this._executeTransaction(storeName, 'readwrite', (store) => store.delete(id));
  }

  async getAll(storeName) {
    return this._executeTransaction(storeName, 'readonly', (store) => store.getAll());
  }

  async getById(storeName, id) {
    return this._executeTransaction(storeName, 'readonly', (store) => store.get(id));
  }

  async search(storeName, criteria) {
    return this._executeTransaction(storeName, 'readonly', (store) => {
      return new Promise((resolve, reject) => {
        const results = [];
        const request = store.openCursor();

        request.onsuccess = (event) => {
          const cursor = event.target.result;
          if (cursor) {
            const match = Object.keys(criteria).every(key => {
              if (typeof cursor.value[key] === 'string') {
                return cursor.value[key].includes(criteria[key]);
              }
              return cursor.value[key] === criteria[key];
            });
            if (match) results.push(cursor.value);
            cursor.continue();
          } else {
            resolve(results);
          }
        };

        request.onerror = (event) => reject(`Erro na busca: ${event.target.errorCode}`);
      });
    });
  }

  _executeTransaction(storeName, mode, operation) {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(storeName, mode);
      const store = transaction.objectStore(storeName);
      const request = operation(store);

      request.onsuccess = () => resolve(request.result);
      request.onerror = (event) => reject(`Erro: ${event.target.errorCode}`);
    });
  }
}