describe("drunk", function() {
	it("says not drunk", function() {
		expect(rachel(5)).toEqual("She's not drunk yet");
	});
	it("says drunk", function() {
		expect(rachel(15)).toEqual("call a cab");
	});
});
