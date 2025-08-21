import addition from './addition';
import {render} from '@testing-library/react-native'


describe('addition tests', () => {
    it('addition 10 + 10 is equal to 20', () => {
        expect(addition(10, 10)).toBe(20);
    });

    it('addition of -10 and +10 is equal to 0', () => {
        expect(addition(-10, 10)).toBe(0);
    });
});


describe('close function testing',async () => {
    close()

    jest.advanceTimersByTime(5000);

    expect(setTimeout).toHaveBeenCalledTimes(5000)

    expect(setTimeout).toHaveBeenCalledLastCalledWith(expect.any(Function),5000)

    for(let i=0;i<6;i++){
        expect(console.log).toHaveBeenCalledWith(6)
    }

});