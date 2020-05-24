describe('my first test', () => {
    let abc;

    beforeEach(() => {
        abc = {};
    });

    it('should be true if true rrr', () => {
        // arrange
        abc.a = false;

        // act
        abc.a = true;

        // assert
        expect(abc.a).toBe(true);
    });


});
