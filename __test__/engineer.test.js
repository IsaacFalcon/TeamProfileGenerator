const Engineer = require("../lib/Engineer");

test("Can get github via getGithub()", () => {
    const testValue = "https://github.com/IsaacFalcon";
    const e = new Engineer(testValue);
    expect(e.getGithub()).toBe(testValue);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer(testValue);
    expect(e.getRole()).toBe(testValue);
  });