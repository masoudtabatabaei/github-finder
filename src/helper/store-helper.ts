const StoreHelper = {
    // get a item from localstorage
    getFromLS(key:string) {
        const value = window.localStorage.getItem(key);
        return value ? JSON.parse(value) : null;
    },
    // set item to localstorage
    setToLS(key:string, value:any) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }
}

export default StoreHelper;