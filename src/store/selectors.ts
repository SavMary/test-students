import { State } from "../react-app-env";

export const getDataSelector = (state: State) => state.data;
export const getSelectedStudents = (state: State) => state.selectedStudents;
export const getTotalPageSelector = (state: State) => state.totalPage;
export const getCurrentPageSelector = (state: State) => state.currentPage;
export const getTotalSizeSelector = (state: State) => state.totalSize;
export const getCurrentSizeSelector = (state: State) => state.currentSize;
export const getFilteredByTitleSelector = (query: string) => {
    return (state: State) => {
      return state.data.filter(item => (
        item.name.toLowerCase().includes(query.toLowerCase()) 
        || item.parents?.find(parent => parent.toLowerCase().includes(query.toLowerCase()))
        || item.id === +query
      ));
    };
  };
// export const getByGrowthIdSelector = () => {
//   return (state: State) => {
//     return state.data

//   }
// }
// export const getByDecIdSelector = () => {
//   return (state: State) => {
//     return state.data.sort((a, b) => b.id - a.id)
//   }
// }
// export const getByGrowthScoreSelector = () => {
//   return (state: State) => {
//     return state.data.sort((a, b) => (+a.score / 100) - (+b.score / 100))
//   }
// }
// export const getByDecScoreSelector = () => {
//   return (state: State) => {
//     return state.data.sort((a, b) => (+b.score / 100) - (+a.score / 100))
//   }
// }
// export const getByGrowthSpeedSelector = () => {
//   return (state: State) => {
//     return state.data.sort((a, b) => (+a.speed / 100) - (+b.speed / 100))
//   }
// }
// export const getByDecSpeedSelector = () => {
//   return (state: State) => {
//     return state.data.sort((a, b) => (+b.speed / 100) - (+a.speed / 100))
//   }
// }
