function loadPromotions() {
    return [
        {
            type: 'BUY_TWO_GET_ONE_FREE',
            barcodes: [
                'ITEM000000',
                'ITEM000001',
                'ITEM000005'
            ]
        }
    ];
}

function computeFree(after_add)
{
    var after_compute = after_add;
    var promotion_items = loadPromotions();
    promotion_items=promotion_items[0].barcodes;
    for(let i=0;after_compute && i<after_compute.length;i++)
    {
        for(let j=0;promotion_items && j<promotion_items.length;j++)
        {
            if(after_compute[i].id == promotion_items[j])
            {
                let temp = after_compute[i].count;
                temp=Math.floor(temp/3);
                after_compute[i].free = temp;
                break;
            }
            else after_compute[i].free = 0;
        }
    }
    return after_compute;
}

module.exports = computeFree;