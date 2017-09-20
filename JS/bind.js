this.x = 9;
var module = {
    x : 99,
    getX : function () {
        console.log(this.x);
    }
}
module.getX();//99

var get_getX = module.getX;
get_getX();
//node 下 undefined，浏览器中为9,this.x被绑定到全局变量windiw上,输出9
//实际中不要修改window／global

var get_getX_2 = module.getX();
get_getX_2;//99

var getX_again = get_getX.bind(module);
getX_again();//99



