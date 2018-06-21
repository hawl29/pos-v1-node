function print(after_compute)
{
    var after_print = after_compute;
    var print_box = '***<没钱赚商店>购物清单***\n';
    var total_price = 0;
    var save = 0.00;
    for(let i=0;i<after_print.length;i++)
    {
        print_box+='名称：' + after_print[i].name +'，'+
                   '数量：' + after_print[i].count + after_print[i].unit + '，' +
                   '单价：' + after_print[i].price.toFixed(2) + '(元)，';
        let temp = after_print[i].count-after_print[i].free;
        temp=temp*after_print[i].price;
        print_box+='小计：' + temp.toFixed(2) + '(元)\n';
        total_price += after_print[i].subtotal;
    }
    print_box += '----------------------\n' + '挥泪赠送商品：\n';
    for(let i=0;i<after_print.length;i++)
    {
        if(after_print[i].free != 0)
        {
           print_box +='名称：' + after_print[i].name +'，'+
                       '数量：' + after_print[i].free + after_print[i].unit + '\n';
           save+=after_print[i].free*after_print[i].price;
        }
    }
    print_box += '----------------------\n' +
                 '总计：'+ (total_price-save).toFixed(2) +'(元)\n' +
                 '节省：'+ save.toFixed(2) + '(元)\n' +
                   '**********************';
    return print_box;
}

module.exports = print;