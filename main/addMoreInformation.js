function loadAllItems() {
    return [
        {
            barcode: 'ITEM000000',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000001',
            name: '雪碧',
            unit: '瓶',
            price: 3.00
        },
        {
            barcode: 'ITEM000002',
            name: '苹果',
            unit: '斤',
            price: 5.50
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00
        },
        {
            barcode: 'ITEM000004',
            name: '电池',
            unit: '个',
            price: 2.00
        },
        {
            barcode: 'ITEM000005',
            name: '方便面',
            unit: '袋',
            price: 4.50
        }
    ];
}

function addMoreInformation(after_count)
{
    var after_add=after_count;
    var items=loadAllItems();
    for(var i=0;i<after_add.length;i++)
    {

        for(var j=0;j<items.length;j++)
        {

            if(after_add[i].id==items[j].barcode)
            {

                after_add[i].name = items[j].name;
                after_add[i].unit = items[j].unit;
                after_add[i].price = items[j].price;
                after_add[i].subtotal = after_add[i].count * after_add[i].price;
            }
        }
    }
    return after_add;
}



module.exports = addMoreInformation;