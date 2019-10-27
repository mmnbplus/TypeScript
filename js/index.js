"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
console.log(111);
/*
    2019年复习两年前学的TypeScript的笔记

    在阅读前请学习HTML,CSS,JavaScrips,Jquery,Java/C#
    作者:三痴喵喵
    开始时间:2019年10月27号
    最后更新时间:2019年10月27号
    
    视频地址:https://www.bilibili.com/video/av38379328
*/
//数据类型
var str = "你好";
//布尔类型
var flag = true;
/*
类型校验
flag = 1111;//错误
flag = true;//正确
*/
//数字类型
var num = 123;
num = 456;
console.log(num);
//字符串类型
var s = "hhhhh";
s = "vgaf";
console.log(s);
//数组类型(两种方式)
var arr = ['11', '22']; //ES5
//第一种
var array = [11, 22, 33];
console.log(array);
//第二种
var array1 = [11, 22, 33];
console.log(array1);
//第三种
var array5 = ['hh', 111];
console.log(array5);
//元组类型  属于数组类型
var array3 = [111, "aaaaa"]; //对数组中每一个设置类型
console.log(array3);
//枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 3] = "error";
    Flag[Flag["mm"] = 4] = "mm";
})(Flag || (Flag = {}));
var f = Flag.success;
var mm = Flag.mm;
console.log(Flag);
console.log(mm); //没有指定值就是下标 == 4
//任意类型
var mmm = "1134";
mmm = 111;
mmm = true;
console.log(mmm);
//使用场景
var box = document.getElementById("box");
box.style.color = "red";
//null 和 undefined
var m1;
console.log(m1);
var m2;
m2 = 123; //赋值了就是number类型，没有赋值undefined类型
console.log(m2);
//void类型
//无返回值
function run() {
    console.log(1111);
}
run();
//有返回值
function run1() {
    return 111;
}
run1();
//never类型 从不会出现的值
var b;
b = undefined;
var b1;
b1 = null;
var bb2;
//bb2 = 123 错误
/*
bb2 = (
    ()=>{
        throw new Error("错误");
    }
)();*/
//函数
//es5
function run12() {
    return "mm";
}
var run13 = function () {
    return "hh";
};
//ts
function run14() {
    return "111";
}
var run15 = function () {
    return 111;
};
//ts方法传参数
function getInfo(name, age) {
    return name + " --- " + age;
}
console.log(getInfo("aaas", 111));
//console.log(getInfo("aaas","111"));   报错
var getInfo2 = function (name, age) {
    return name + " --- " + age;
};
console.log(getInfo2("aaas", 111));
//没有返回值方法
var getInfo3 = function (name, age) {
    console.log(name + " --- " + age);
};
getInfo3("aaas", 111);
//可选参数 
function getInfo4(name, age) {
    if (age) {
        console.log(name + " --- " + age);
    }
    else {
        console.log(name + " --- \u5E74\u9F84\u4FDD\u5BC6");
    }
}
getInfo4("喵喵");
//注意：可选参数必须配置到参数的最后面
//默认参数
function getInfo5(name, age) {
    if (age === void 0) { age = 20; }
    console.log(name + " --- " + age);
}
getInfo5("张三");
getInfo5("张三", 30);
//剩余参数
function sum(a) {
    var result = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        result[_i - 1] = arguments[_i];
    }
    var sum = 0, sum2 = 0, length = result.length;
    result.forEach(function (value) {
        sum += value;
    });
    console.log(a + sum);
    for (var index = 0; index < length; index++) {
        sum2 += result[index];
    }
    console.log(a + sum2);
}
sum("mm:", 1, 2, 3);
function aaasz(value) {
    if (typeof value === 'string') {
        return '我叫' + value;
    }
    else {
        return '我的年龄' + value;
    }
}
;
//箭头函数
setTimeout(function () {
    alert(1);
}, 1000);
//类
//ts定义类 继承 修饰符 静态属性 静态方法
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = ""; //公有 public
        this.aa = "11"; //公有      所有类可以访问
        this.bb = "22"; //私有     只能在类可以访问
        this.cc = "33"; //保护   在类和子类可以访问
        this.name = name;
    }
    Person.getMM1 = function () {
        console.log(this.mm1);
        console.log(name);
    };
    Person.prototype.run = function () {
        console.log(this.name + " \u54C8\u54C8\u54C8");
    };
    Person.prototype.jump = function () {
        console.log("父类在跳");
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    Person.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Person.mm1 = "我是喵喵"; //静态属性
    return Person;
}());
var p = new Person("张三");
p.run();
console.log(p.getName());
console.log(p.setName("hhhmmmm").getName());
var Web = /** @class */ (function (_super) {
    __extends(Web, _super);
    function Web(name) {
        return _super.call(this, name) || this;
    }
    Web.prototype.jump = function () {
        console.log("子类在跳" + Person.mm1);
    };
    Web.prototype.work = function () {
        console.log(this.name + "\u5728\u8FD0\u52A8");
    };
    return Web;
}(Person));
var web = new Web("李四");
web.run();
web.work();
web.jump(); //子类重载父类方法
console.log(Person.mm1); //静态属性
Person.getMM1(); //静态方法
//多态
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.ear = function () {
        console.log("吃");
    };
    ;
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.ear = function () {
        console.log(this.name + "吃狗食");
    };
    ;
    return Dog;
}(Animal));
var Mm = /** @class */ (function (_super) {
    __extends(Mm, _super);
    function Mm(name) {
        return _super.call(this, name) || this;
    }
    Mm.prototype.ear = function () {
        console.log(this.name + "吃猫食");
    };
    ;
    return Mm;
}(Animal));
var d1 = new Dog("二狗");
var mm1 = new Mm("喵喵");
d1.ear();
mm1.ear();
//抽象
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    return Animal1;
}());
//var a = new Animal1();    报错无法实例化
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.eat = function () {
        console.log("狗吃狗食");
    };
    return Dog1;
}(Animal1));
var Cat1 = /** @class */ (function (_super) {
    __extends(Cat1, _super);
    function Cat1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat1.prototype.eat = function () {
        console.log("猫吃狗食");
    };
    return Cat1;
}(Animal1));
var d2 = new Dog1();
var cat1 = new Cat1();
d2.eat();
//以下内容视频里面没有讲到补充的
function printAnimal(animal) {
    console.log(animal.eat());
}
printAnimal(d2);
printAnimal(cat1);
function printName(name) {
    console.log(name);
}
function printInfo(name) {
    console.log(name + "hhhhh");
    //console.log(name+"hhhhh"+name.hh);报错
}
/*
    printName({
        fiestName:20,   //报错
        secondName:"哈哈"
    });
*/
printName({
    fiestName: "喵喵1",
    secondName: "哈哈"
});
var object = {
    hh: 11,
    fiestName: "喵喵1",
    secondName: "哈哈"
};
printName(object); //可以传入接口除外的参数,但是在类里面无法使用hh
printInfo(object);
function printName1(name) {
    console.log(name);
}
var obj1 = {
    fiestName: "喵喵111",
    secondName: "哈哈哈"
};
var obj2 = {
    fiestName: "喵喵111"
};
printName1(obj1);
printName1(obj2);
var md5s = function (key, value) {
    return key + value;
};
var sha1 = function (key, value) {
    return key + value + "12123123";
};
console.log(md5s("name", "张三"));
console.log(sha1("name", "张三111aaa"));
//可索引接口：数组的约束（不常用）
var array1 = [11, 22];
var array2 = ["11", "22"];
var array10 = ['aaa', 'bbb'];
var arr123 = { name: '20' };
var Dog2 = /** @class */ (function () {
    function Dog2(name) {
        this.name = name;
    }
    Dog2.prototype.eat = function () {
        console.log(this.name + "吃粮食");
    };
    return Dog2;
}());
var d5 = new Dog2("hh");
d5.eat();
var Programmer = /** @class */ (function () {
    function Programmer(name) {
        this.name = name;
    }
    Programmer.prototype.coding = function (code) {
        console.log(this.name + "桥代码" + code);
    };
    return Programmer;
}());
var PHP = /** @class */ (function (_super) {
    __extends(PHP, _super);
    function PHP(name) {
        return _super.call(this, name) || this;
    }
    PHP.prototype.work = function () {
        console.log("work");
    };
    PHP.prototype.eat = function () {
        console.log("eat");
    };
    return PHP;
}(Programmer));
var php = new PHP("喵喵");
php.coding("java");
//以下内容视频里面没有讲到补充的 类的多接口实现
var JAVA = /** @class */ (function () {
    function JAVA() {
        this.name = "";
    }
    JAVA.prototype.ear = function () {
        console.log("Animal.ear");
    };
    JAVA.prototype.eat = function () {
        console.log("Animal10.eat");
    };
    return JAVA;
}());
//泛型
//泛型函数
//同时返回string类型number类型
//传入number返回number 传入string 返回string
function getData(value) {
    return value;
}
getData(123);
getData("123");
//getData<number>("1123");报错
function getData1(value) {
    return "1111222";
}
getData1(123);
//泛型类
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var min = new MinClass();
min.add(5);
min.add(3);
min.add(5);
console.log(min.min());
var minstring = new MinClass();
minstring.add('a');
minstring.add('n');
minstring.add('s');
console.log(minstring.min());
var setData = function (value1, value2) {
    return value1 + value2;
};
setData("name", "张三");
var setData1 = function (value1) {
    return value1;
};
setData1("name");
setData1(11111);
var setData2 = function (value1) {
    return value1;
};
var myGetData = setData2;
myGetData("20");
//泛型类2
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var ArticleCate = /** @class */ (function () {
    function ArticleCate() {
    }
    return ArticleCate;
}());
var MysqlDB = /** @class */ (function () {
    function MysqlDB() {
    }
    MysqlDB.prototype.add = function (user) {
        console.log(user);
        return true;
    };
    return MysqlDB;
}());
var u = new User();
u.username = "喵喵";
u.password = "123456";
var a = new ArticleCate();
a.title = "国内";
a.desc = "国内新闻";
a.state = 1;
var db = new MysqlDB();
db.add(u);
var db2 = new MysqlDB();
db2.add(a);
//模块(内部模块)
/*
    import {getData111} from './js/modules/db';
    import {saveData as hhh} from './js/modules/db';
    getData111();
    hhh();
*/
//命名空间
var A;
(function (A) {
    var mm = 0;
    var MM = /** @class */ (function () {
        function MM() {
        }
        MM.prototype.mm = function () {
            console.log("mmmmm");
        };
        return MM;
    }());
    A.MM = MM;
})(A || (A = {}));
var MM1 = new A.MM().mm();
var B;
(function (B) {
    var mm = 1;
})(B || (B = {}));
//装饰器
//类装饰器
function logclass(params) {
    console.log(params);
    params.prototype.appUrl = '动态扩展的属性';
    params.prototype.run = function () {
        console.log("我是一个run方法");
    };
}
function logclass1(params) {
    return function (target) {
        console.log("logclass1", target);
        console.log("logclass1", params);
        target.prototype.appUrl = params;
        //重载构造函数
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.apiUrl = "我是重载的url";
                return _this;
            }
            return class_1;
        }(target));
    };
}
function logclass2(target) {
    //重载构造函数
    return /** @class */ (function (_super) {
        __extends(class_2, _super);
        function class_2() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.apiUrl = "我是重载的url";
            return _this;
        }
        class_2.prototype.getData = function () {
            console.log(this.apiUrl);
        };
        return class_2;
    }(target));
}
var HTTPClient = /** @class */ (function () {
    function HTTPClient() {
    }
    HTTPClient.prototype.getData = function () {
    };
    HTTPClient = __decorate([
        logclass
    ], HTTPClient);
    return HTTPClient;
}());
var HTTPClient2 = /** @class */ (function () {
    function HTTPClient2() {
    }
    HTTPClient2 = __decorate([
        logclass1('hello')
    ], HTTPClient2);
    return HTTPClient2;
}());
var HTTPClient3 = /** @class */ (function () {
    function HTTPClient3() {
        this.apiUrl = "我是构造函数里面的apiUrl";
        console.log(this.apiUrl);
    }
    HTTPClient3.prototype.getData = function () {
        console.log(this.apiUrl);
    };
    HTTPClient3 = __decorate([
        logclass2
    ], HTTPClient3);
    return HTTPClient3;
}());
var http = new HTTPClient();
console.log(http.appUrl);
http.run();
var http2 = new HTTPClient2();
console.log(http2.appUrl);
var http3 = new HTTPClient3();
http3.getData();
//属性装饰器
function logPro(params) {
    return function (target, attribute) {
        console.log("logPro", target); //类的原型对象
        console.log("logPro", attribute);
        console.log("logPro", params);
        target[attribute] = params;
    };
}
function logPro2(params) {
    return function (target, attribute) {
        console.log("logPro2", target); //类的原型对象
        console.log("logPro2", attribute);
        console.log("logPro2", params);
        target[attribute] = params;
    };
}
var HTTPClient4 = /** @class */ (function () {
    function HTTPClient4() {
    }
    HTTPClient4.prototype.getData = function () {
        console.log(this.url);
    };
    __decorate([
        logPro("http://xxxxx") //后执行
        ,
        logPro2("hfewfwhw") //先执行
    ], HTTPClient4.prototype, "url", void 0);
    return HTTPClient4;
}());
var http10 = new HTTPClient4();
http10.getData();
//方法装饰器&方法参数装饰器
function logMethod(params) {
    return function (target, methodNBame, desc) {
        console.log("logMethod", target); //类的原型对象,如果是静态方法就是构造函数
        console.log("logMethod", methodNBame);
        console.log("logMethod", params);
        console.log("logMethod", desc.value);
        target.apiUrl = "xxxxx";
        target.run = function () {
            console.log("1111");
        };
        //传入参数变成string类型
        //保存当前的方法
        var oMethod = desc.value;
        desc.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            args = args.map(function (value) {
                return String(value);
            });
            console.log(args);
            oMethod.apply(this, args);
        };
    };
}
function MMZSQ11(params) {
    return function (target, methodNBame, desc) {
        console.log("MMZSQ11", target); //类的原型对象,如果是静态方法就是构造函数
        console.log("MMZSQ11", methodNBame);
        console.log("MMZSQ11", params);
        console.log("MMZSQ11", desc.value);
    };
}
var HTTPClient40 = /** @class */ (function () {
    function HTTPClient40() {
    }
    HTTPClient40.prototype.getData = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log(args);
        console.log("我是getData");
    };
    HTTPClient40.mm = function () {
    };
    __decorate([
        logMethod("哈哈") //后执行
        ,
        MMZSQ11("嘤嘤嘤") //先执行
    ], HTTPClient40.prototype, "getData", null);
    __decorate([
        logMethod("哈哈")
    ], HTTPClient40, "mm", null);
    return HTTPClient40;
}());
var http30 = new HTTPClient40();
http30.run();
http30.getData("111", 222);
//方法参数装饰器
function logMethod20(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params);
        console.log(target); //原型对象
        console.log(methodName);
        console.log(paramsIndex); //索引位置
        target.apiUrl = params;
    };
}
function mmzsq(params) {
    return function (target, methodName, paramsIndex) {
        console.log(params);
        console.log(target); //原型对象
        console.log(methodName);
        console.log(paramsIndex); //索引位置
        target.apiUrl = params;
    };
}
var HTTPClient50 = /** @class */ (function () {
    function HTTPClient50() {
    }
    HTTPClient50.prototype.getData = function (uid, mm) {
        console.log("我是getData");
        console.log(uid);
        console.log(mm);
    };
    __decorate([
        __param(0, logMethod20('uuid')), __param(1, mmzsq('hhhhhh'))
    ], HTTPClient50.prototype, "getData", null);
    return HTTPClient50;
}());
var http40 = new HTTPClient50();
http40.getData(123456, 654321); //执行顺序 123456   654321
console.log(http40.apiUrl);
