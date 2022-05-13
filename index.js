// Write your solution in this file!
const employee = {
     name : "Adam",
    streetAddress : "294 Bob",
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};
   newObject[key]=value;
    return newObject;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};
    newObject[key]=value;
    return newObject;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee,key, value){
    const newObject = employee;
    newObject[key]=value;
    return newObject;
  }

  function deleteFromEmployeeByKey(employee, key, value){
    const newObject = {...employee};
    delete newObject[key];
    return newObject;
  }