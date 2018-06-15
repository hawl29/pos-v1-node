module.exports = function main() {

};
function count(inputs)
{
    var parten1=/^\w{4}\d{6}$/;
    var after_count=new Array();
    var count;
    for(let i=0;i<inputs.length;i++)
    {
        count=1;
        if(parten1.test(inputs[i]))
        {
            for(var j=i+1;j<inputs.length;j++)
            {
                if(inputs[i]==inputs[j]) count++;
                else break;
            }
            i=j-1;
        }
        else
        {
            count=Number(inputs[i].substr(-1));
        }
        var count_item=new Object();
        count_item.id=inputs[i];
        count_item.count=count;
        after_count.push(count_item);
    }
    return after_count;
}

/*function convert(inputs)
{
    var temp=inputs;
    var all_items=loadAllItems();
    var order_sheet=new Array();
    var order_item=new Object();
    var count;
    for(let i=0;i<temp.length;)
    {
        count=1;
        for(var j=i+1;j<temp.length;j++)
        {
            if(temp[i]==temp[j]) count++;
            else break;
        }
        let k=all_items.find(whichgoods);
        order_item.id=all_items[k].barcode;
        order_item.name=all_items[k].name;
        order_item.price=all_items[k].price;
        order_item.count=count;
        order_item.unit=all_items[k].unit;
        order_item.subtotal=count*Number(order_item.price);
        order_sheet.push(order_item);
    }
    console.log(order_sheet);
    return order_sheet;
}
function whichgoods(goods)
{
    return temp[i]==goods.barcode;
}*/