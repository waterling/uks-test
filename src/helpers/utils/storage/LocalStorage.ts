class LocalStorage {
    storage: Storage;
    constructor(storage: Storage,) {
        this.storage = storage;
    }

    save = (key: string, value: string) => {
        this.storage.setItem(key, value);
    };

    get = (key: string): string | null => {
        return this.storage.getItem(key);
    };


    remove = (key: string) => {
        this.storage.removeItem(key);
    };


    clear = () => {
        this.storage.clear();
    };
}

export default new LocalStorage(localStorage);
