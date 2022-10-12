const Intern = require("../lib/Intern");

test("Can get school via getSchool()", () => {
    const testValue = "UT";
    const e = new Intern(testValue);
    expect(e.getSchool()).toBe(testValue);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern(testValue);
    expect(e.getRole()).toBe(testValue);
  });