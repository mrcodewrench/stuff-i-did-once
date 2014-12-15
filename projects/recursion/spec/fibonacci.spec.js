describe("fib iterated", function() {
  it("compute 1 okay", function() {
    expect(fibIter(1)).toBe(1);
  });
  it("compute 2 okay", function() {
  	expect(fibIter(2)).toBe(1);
  });
  it("compute 7 okay", function() {
  	expect(fibIter(7)).toBe(13);
  });
   it("compute 9 okay", function() {
    expect(fibIter(9)).toBe(34);
  });
});

describe("fib recursion", function() {
  it("compute 1 okay", function() {
    expect(fibRecur(1)).toBe(1);
  });
  it("compute 2 okay", function() {
  	expect(fibRecur(2)).toBe(1);
  });
  it("compute 7 okay", function() {
  	expect(fibRecur(7)).toBe(13);
  });
   it("compute 9 okay", function() {
    expect(fibRecur(9)).toBe(34);
  });
});

describe("fib Tail", function() {
  it("compute 1 okay", function() {
    expect(fibTail(1)).toBe(1);
  });
  it("compute 2 okay", function() {
  	expect(fibTail(2)).toBe(1);
  });
  it("compute 7 okay", function() {
  	expect(fibTail(7)).toBe(13);
  });
   it("compute 9 okay", function() {
    expect(fibTail(9)).toBe(34);
  });
});