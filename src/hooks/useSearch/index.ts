import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import urlHelper from "../../utils/url-helper";
import storeHelper from "../../utils/store-helper";

interface IUseSearch {
    isStoreOnLocalStorage:boolean;
    entity: string;
    fields: Record<string,any>;
}

export const useSearch = ({isStoreOnLocalStorage, entity, fields}:IUseSearch) => {
    const lsEntityObject = storeHelper.getFromLS(entity);
    const setSearchFieldsValue = () => {
        let obj = {} as Record<string,string>;
        for (const key in fields) {
            if (Object.prototype.hasOwnProperty.call(fields, key)) {
                obj[key] = isStoreOnLocalStorage 
                            ? lsEntityObject && lsEntityObject.hasOwnProperty(key) ? lsEntityObject[key] : fields[key] 
                            : searchParams.get(key) || fields[key];
            }
        }

        return obj;
    }

    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState<Record<string,any>>(setSearchFieldsValue());

    const setSearchQueryValue = () => {
        let obj = {} as Record<string,string>;
        for (const key in searchQuery) {
            if (Object.prototype.hasOwnProperty.call(searchQuery, key)) {
                obj[key] = isStoreOnLocalStorage
                            ? lsEntityObject && lsEntityObject.hasOwnProperty(key) ? lsEntityObject[key] 
                            : fields[key] : searchQuery[key];
            }
        }

        return obj;
    }


    useEffect(() => {
        !isStoreOnLocalStorage && setSearchParams({...urlHelper.generateQueryString(), ...setSearchQueryValue()});
        if(isStoreOnLocalStorage) {
            storeHelper.setToLS(entity, {...setSearchQueryValue()});
        }
    }, [searchQuery]);

    useEffect(() => {
        return () => {
            localStorage.removeItem(entity);
        }
    },[]);

    const updateSearchParameters = (searchParamsObj:{}) => {
        if(isStoreOnLocalStorage) {
            storeHelper.setToLS(entity, {...lsEntityObject,...searchParamsObj});
        }

        setSearchQuery(prevQuery => ({...prevQuery,...searchParamsObj}));
    }

    return {
        searchQuery,
        setSearchQuery,
        updateSearchParameters
    }
}