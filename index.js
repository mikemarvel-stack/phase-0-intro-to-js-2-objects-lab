const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
  // Non-destructive update
  function updateEmployee(employeeObj, field, newValue) {
    const updatedEmployee = {
      ...employeeObj,
      [field]: newValue
    };
    return updatedEmployee;
  }
  
  // Destructive update
  function overwriteEmployeeInfo(employeeObj, field, newValue) {
    employeeObj[field] = newValue;
    return employeeObj;
  }
  
  // Non-destructive delete
  function removeFieldSafely(emp, fieldToRemove) {
    const tempEmp = { ...emp };
    delete tempEmp[fieldToRemove];
    return tempEmp;
  }
  
  // Destructive delete
  function stripFieldFromOriginal(emp, fieldToStrip) {
    delete emp[fieldToStrip];
    return emp;
  }
  // Write your solution in this file!
