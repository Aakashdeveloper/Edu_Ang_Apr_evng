import { MyDiscount } from './mydiscount.pipe';

describe('Test Discount', () => {
    it('should display weak if strength is 5', () => {
        const pipe = new MyDiscount();

        expect(pipe.transform(5, 2)).toEqual(3);
    });
});







