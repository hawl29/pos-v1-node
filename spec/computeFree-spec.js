const computeFree = require('../main/computeFree');

describe('pos', function () {
    var after_add= [
            {id:'ITEM000001',count:5,name:'雪碧',unit:'瓶',price:3.00,subtotal:15.00},
            {id:'ITEM000003',count:2,name:'荔枝',unit:'斤',price:15.00,subtotal:30.00},
            {id:'ITEM000005',count:3,name:'方便面',unit:'袋',price:4.50,subtotal:13.50}
        ];

    it('test3_function_computeFree', function () {


        let result = computeFree(after_add);
        let expected=[
            {id:'ITEM000001',count:5,name:'雪碧',unit:'瓶',price:3.00,subtotal:15.00,free:1},
            {id:'ITEM000003',count:2,name:'荔枝',unit:'斤',price:15.00,subtotal:30.00,free:0},
            {id:'ITEM000005',count:3,name:'方便面',unit:'袋',price:4.50,subtotal:13.50,free:1}
        ];
        expect(result).toEqual(expected);
    });
});
