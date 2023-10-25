export function SaveDataToLocalStorage(data: string) {
  localStorage.setItem("data", data);
}

export function GetDataFromLocalStorage() {
  return localStorage.getItem("data");
}
