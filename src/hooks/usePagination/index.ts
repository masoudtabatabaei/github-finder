import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import storeHelper from "../../utils/store-helper";

export interface IUsePagination<T> {
    totalItems: number;
    itemsPerPage: number;
    isStoreOnLocalStorage:boolean;
}

const usePagination = (totalItems: number, itemsPerPage:number, isStoreOnLocalStorage:boolean, entity:string) => {
    const maxPage = (totalItems % itemsPerPage === 0) ? totalItems / itemsPerPage : Math.ceil(totalItems / itemsPerPage);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(itemsPerPage);
    const [searchParams] = useSearchParams();
    let entityLSObject = storeHelper.getFromLS(entity);
    
    useEffect(() => {
        if(!isStoreOnLocalStorage) {
            let cpage = (+searchParams.get("offset")! + +searchParams.get("size")!) / +searchParams.get("size")! || 1;
            setCurrentPage(cpage);
        }
    },[searchParams]);

    useEffect(() => {
        if(isStoreOnLocalStorage) {
            let cpage = (entityLSObject?.offset! + entityLSObject?.size!) / entityLSObject?.size! || 1;
            setCurrentPage(cpage);
        }
    }, [entityLSObject, isStoreOnLocalStorage]);

    
    const nextPage = () => {
        // console.log("--- next ----");
        const updatedCurrentPage = Math.min(currentPage + 1, maxPage);
        setCurrentPage(updatedCurrentPage);
        return updatedCurrentPage;
    }
    
    const prevPage = () => {
        // console.log("--- prev ----");
        const updatedCurrentPage = Math.max(currentPage - 1, 1);
        setCurrentPage(updatedCurrentPage);
        return updatedCurrentPage;
    }
    
    const jumpToPage = (page:number) => {
        // console.log(`--- go to: ${page}`);
        const pageNumber = Math.max(1 , page);
        const updatedCurrentPage = Math.min(pageNumber, maxPage);
        setCurrentPage(updatedCurrentPage);
        return updatedCurrentPage;
    }
    
    const changePageSize = (size:number) => {
        // console.log(`--- Chage page size: ${size}`);
        setPageSize(size);
        setCurrentPage(1);
        return 1;
    }

    return { nextPage, prevPage, jumpToPage, changePageSize, currentPage, pageSize, maxPage };
}

export default usePagination;