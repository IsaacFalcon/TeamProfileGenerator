const Manager = require("../lib/Manager");

test("Can add office number to constructor", () => {
  const office = 10;
  const e = new Manager("name", 12, "email@gmail.com", office);
  expect(e.officenumber).toBe(office);
});

test("Can get office number via getOfficeNumber()", () => {
    const office = 28;
    const e = new Manager("name", 12, "email@gmail.com", office);
    expect(e.getOfficeNumber()).toBe(office);
  });
  
  test("getRole() should return \"Manager\"", () => {
    const testValue = "Manager";
    const e = new Manager("name", 12, "email@gmail.com", 10);
    expect(e.getRole()).toBe(testValue);
  });