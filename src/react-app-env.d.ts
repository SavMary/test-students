/// <reference types="react-scripts" />
export interface State {
    // data: Obj,
    data: Data[],
    totalPage: number,
    currentPage: number,
    totalSize: number,
    currentSize: number,
//   tests: Test[]
}

interface Obj {
  totalPages: number,
  data: Data[],
  tests: Test[],
  totalCount: number,
}

interface Data {
    name: string,
    id: number,
    class: string,
    score: string,
    speed: string,
    parents: string[] | null,
}

interface Test {
    label: string,
    score: number | null,
    speed: string | null,
    total: number,
    expSpeed: string,
    concept: string,
    date: string,
    abcent: boolean,
}
