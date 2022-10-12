const Manager = require("../lib/Manager");

test("Can get office number via getOfficeNumber()", () => {
    const testValue = 28;
    const e = new Manager(testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager(testValue);
    expect(e.getRole()).toBe(testValue);
  });