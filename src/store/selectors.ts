import { State } from "../react-app-env";

export const getDataSelector = (state: State) => state.data;
export const getTotalPageSelector = (state: State) => state.totalPage;
export const getCurrentPageSelector = (state: State) => state.currentPage;
export const getTotalSizeSelector = (state: State) => state.totalSize;
export const getCurrentSizeSelector = (state: State) => state.currentSize;
export const getFilteredByTitleSelector = (query: string) => {
    return (state: State) => {
      return state.data.filter(item => (
        item.name.toLowerCase().includes(query.toLowerCase()) 
        || item.parents?.filter(parent => parent.toLowerCase().includes(query.toLowerCase())).length
        || item.id === +query
      ));
    };
  };
