export const URL = "https://test-task-j.herokuapp.com/data";

export const getData = async (page: number, size: number) => {
    return (await fetch(`${URL}?page=${page}&size=${size}`)).json()
    .catch((error) => console.log(error));
};
  