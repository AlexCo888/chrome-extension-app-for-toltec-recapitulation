let items = [];
const btn = document.getElementById("btn-el");
const input = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const cleanBtn = document.getElementById("btn-el-clean");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("items"));

const render = (myItems) => {
  let itemList = "";
  for (let i = 0; i < myItems.length; i++) {
    itemList += `<li> ${myItems[i]} </li>`;
  }
  ulEl.innerHTML = itemList;
};

if (leadsFromLocalStorage) {
  items = leadsFromLocalStorage;
  render(items);
}

cleanBtn.addEventListener("click", () => {
  localStorage.clear();
  items = [];
  render(items);
});

btn.addEventListener("click", () => {
  items.push(input.value);
  input.value = "";
  localStorage.setItem("items", JSON.stringify(items));
  render(items);
});

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    items.push(input.value);
    input.value = "";
    localStorage.setItem("items", JSON.stringify(items));
    render(items);
  }
});
