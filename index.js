// Write your solution in this file!
const employee = {
  name: "dev_ant",
  streetAddress: "100 Main St.",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return { ...obj, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  const newEmployee = { ...obj };
  delete newEmployee[key];
  return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}
