const Engineer = require("../lib/Engineer");

test("Can add github to constructor", () => {
  const github = "githubname";
  const e = new Engineer("name", 12, "email@gmail.com", github);
  expect(e.github).toBe(github);
});

test("Can get school via getGithub()", () => {
    const github = "githubname";
    const e = new Engineer("name", 12, "email@gmail.com", github);
    expect(e.getGithub()).toBe(github);
  });
  
  test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("name", 12, "email@gmail.com", "githubname");
    expect(e.getRole()).toBe(testValue);
  });