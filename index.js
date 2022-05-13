// Write your solution in this file!
const employee = {
    name : "Adam",
    streetAddress : "NS-240-7726"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};
    newObject[key]=value;
    return newObject;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const Object = employee;
    Object[key]=value;
    return Object;
  }
  
  function deleteFromEmployeeByKey(employee, key){
    const Object = {...employee};
    delete Object[key];
    return Object;
  }