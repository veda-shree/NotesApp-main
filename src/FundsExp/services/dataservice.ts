const KEYS = {
  items: "items",
  itemId: "itemId",
};

// export const options = [
//   { id: "1", value: "withdraw" },
//   { id: "2", value: "Add Mutate" },
//   { id: "3", value: "Frozen" },
//   { id: "4", value: "Return" },
//   { id: "5", value: "Pending" },
// ];

export function insertEmployee(data) {
  let items = getAllEmployees();
  data["id"] = generateEmployeeId();
  items.push(data);
  localStorage.setItem(KEYS.items, JSON.stringify(items));
}

export function generateEmployeeId() {
  if (localStorage.getItem(KEYS.itemId) == null)
    localStorage.setItem(KEYS.itemId, "0");
  var id = parseInt(localStorage.getItem(KEYS.itemId));
  localStorage.setItem(KEYS.itemId, (++id).toString());
  return id;
}

export function getAllEmployees() {
  if (localStorage.getItem(KEYS.items) == null)
    localStorage.setItem(KEYS.items, JSON.stringify([]));
  console.log(getAllEmployees());
  return JSON.parse(localStorage.getItem(KEYS.items));
}
