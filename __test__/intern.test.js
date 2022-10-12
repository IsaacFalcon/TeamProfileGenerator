const Intern = require("../lib/Intern");

test("Can add school to constructor", () => {
  const school = "UT";
  const e = new Intern("name", 12, "email@gmail.com", school);
  expect(e.school).toBe(school);
});

test("Can get school via getSchool()", () => {
    const school = "UT";
    const e = new Intern("name", 12, "email@gmail.com", school);
    expect(e.getSchool()).toBe(school);
  });
  
  test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("name", 12, "email@gmail.com", "UT");
    expect(e.getRole()).toBe(testValue);
  });