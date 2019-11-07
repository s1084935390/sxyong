function deleteRepetionChar(arr) {
    //先判断输入进来的是数组对象还是字符串
    if (typeof arr == "object") {
        var arr = arr;
    }
    else if (typeof arr == "string") {
        //字符串转为数组
        var arr = arr.split(",")
    }

    //存放不相同的数据
    var box = [];//存放去重数据
    var thisArr;//当前的值arr[i]

    //遍历数组
    for (var i = 0; i < arr.length; i++) {
        thisArr = arr[i]

        //定义一个旗子，检查是不是有重复的字符
        var flag = true;

        //遍历存放数据盒子，检查是否等于当前元素
        for (var j = 0; j < box.length; j++) {
            //如果值存在
            if (box[j] == thisArr) {
                flag = false;
                break;//结束for循环
            }
        }
        if (flag == false) {
            //continue返回执行函数而不压入数组
            continue;
        }
        box.push(thisArr);
    }
    return box
}


function str(oldid,value)
{
    var str = "" + value + "";
    str.replace(oldid,"0")
    return str;
}