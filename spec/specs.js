describe("vowelReplacer", function() {
  it ("will replace vowels with dashes", function() {
    expect(vowelReplacer("My name is Torrence")).to.equal("My n-m- -s T-rr-nc-");
  });
});
