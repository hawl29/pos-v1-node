function count(inputs) {
    var parten1 = /^\w{4}\d{6}$/;
    var after_count = new Array();
    var count;
    for (let i = 0; i < inputs.length; i++) {
        count = 1;
        if (parten1.test(inputs[i])) {
            for (var j = i + 1; j < inputs.length; j++) {
                if (inputs[i] == inputs[j]) count++;
                else break;
            }
            i = j - 1;
        }
        else {
            count = Number(inputs[i].substr(-1));
        }
        var count_item = new Object();
        count_item.id = inputs[i].substr(0, 10);
        count_item.count = count;
        after_count.push(count_item);
    }
    return after_count;
}


module.exports = count;