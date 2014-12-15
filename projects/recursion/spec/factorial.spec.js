describe("factorial iterated", function() {
  it("compute 0 okay", function() {
    expect(factorialIter(0)).toBe(1);
  });
  it("compute 7 okay", function() {
  	expect(factorialIter(7)).toBe(5040);
  });
  it("compute 10 okay", function() {
  	expect(factorialIter(10)).toBe(3628800);
  });
});

describe("factorial recursion", function() {
  it("compute 0 okay", function() {
    expect(factorialRecur(0)).toBe(1);
  });
  it("compute 7 okay", function() {
  	expect(factorialRecur(7)).toBe(5040);
  });
  it("compute 10 okay", function() {
  	expect(factorialRecur(10)).toBe(3628800);
  });
});

describe("factorial Tail", function() {
  it("compute 0 okay", function() {
    expect(factorialTail(0)).toBe(1);
  });
  it("compute 7 okay", function() {
  	expect(factorialTail(7)).toBe(5040);
  });
  it("compute 10 okay", function() {
  	expect(factorialTail(10)).toBe(3628800);
  });
});