const count =require('../main/count');

describe('pos', function () {

    var inputs;

    beforeEach(function () {

        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];
    });


    it('test1_function_count', function () {

        let result = count(inputs);
        let expected=[
            {id:'ITEM000001',count:5},
            {id:'ITEM000003',count:2},
            {id:'ITEM000005',count:3}
        ];
        expect(result).toEqual(expected);
    });

});
