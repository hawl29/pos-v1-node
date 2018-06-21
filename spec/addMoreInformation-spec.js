const addMoreInformation = require('../main/addMoreInformation');

describe('pos', function () {
    var after_count;

    beforeEach(function () {
        after_count =  [
            {id:'ITEM000001',count:5},
            {id:'ITEM000003',count:2},
            {id:'ITEM000005',count:3}
        ];
    });

    it('test2_function_addMoreInformation', function () {


        let result = addMoreInformation(after_count);
        let expected=[
            {id:'ITEM000001',count:5,name:'雪碧',unit:'瓶',price:3.00,subtotal:15.00},
            {id:'ITEM000003',count:2,name:'荔枝',unit:'斤',price:15.00,subtotal:30.00},
            {id:'ITEM000005',count:3,name:'方便面',unit:'袋',price:4.50,subtotal:13.50}
        ];
        expect(result).toEqual(expected);
    });
});
