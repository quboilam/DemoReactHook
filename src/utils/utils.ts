export function saveDataToLocalStorage(data: string) {
  localStorage.setItem("data", data);
}

export function getDataFromLocalStorage() {
  return localStorage.getItem("data");
}
