const urlHelper = {
    generateQueryString() {
        const urlParams = new URLSearchParams(window.location.search);
        let urlSearchQuery:{[k: string]: any} = {};

        urlParams.forEach((value, key) => {
            urlSearchQuery[key] = value;
        });

        return urlSearchQuery;
    },
    serialize(obj:any) {
        var str = [];
        for (var p in obj) 
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
    }
}

export default urlHelper;