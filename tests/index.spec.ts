import { getSum } from '../src/index';

describe('Basic Test', () =>{

    it('Should Sum Two numbers', async () => {
        const result = getSum(5, 5);

        expect(result).toEqual(11);
    });
});
