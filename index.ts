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
    var str:string="你好";
    //布尔类型
        var flag:boolean = true;
        /*
        类型校验
        flag = 1111;//错误
        flag = true;//正确
        */
    //数字类型
        var num:number = 123;
        num = 456;
        console.log(num);
    //字符串类型
        var s:string = "hhhhh";
        s = "vgaf";
        console.log(s);
    //数组类型(两种方式)
        var arr = ['11','22'];//ES5
        //第一种
            var array:number[] = [11,22,33];
            console.log(array);
        //第二种
            var array1:Array<number>=[11,22,33];
            console.log(array1);
        //第三种
            var array5:any[] = ['hh',111];
            console.log(array5);
    //元组类型  属于数组类型
        let array3:[number,string] = [111,"aaaaa"]; //对数组中每一个设置类型
        console.log(array3);
    //枚举类型
        enum Flag{
            success = 1,
            error = 3,
            mm
        }
        let f:Flag= Flag.success;
        let mm:Flag = Flag.mm;
        console.log(Flag);
        console.log(mm);    //没有指定值就是下标 == 4
    //任意类型
        var mmm:any = "1134";
        mmm = 111;
        mmm = true;
        console.log(mmm);

        //使用场景
        var box:any = document.getElementById("box");
        box.style.color = "red";
    //null 和 undefined
        var m1:undefined;
        console.log(m1);
        var m2:number | undefined | null;
        m2 = 123;   //赋值了就是number类型，没有赋值undefined类型
        console.log(m2);
    //void类型
        //无返回值
        function run():void{
            console.log(1111);
        }
        run();
        //有返回值
        function run1():number{
            return 111;
        }
        run1();
    //never类型 从不会出现的值
        var b:undefined;
        b = undefined;
        var b1:null;
        b1 = null;

        var bb2:never;
        //bb2 = 123 错误
        /*
        bb2 = (
            ()=>{
                throw new Error("错误");
            }
        )();*/
//函数
    //es5
        function run12(){
            return "mm";
        }
        var run13 = function(){
            return "hh";
        }
    //ts
        function run14():string{
            return "111";
        }
        var run15 = function():number{
            return 111;
        }
    //ts方法传参数
        function getInfo(name:string,age:number):string{
            return `${name} --- ${age}`;
        }
        console.log(getInfo("aaas",111));
        //console.log(getInfo("aaas","111"));   报错
        var getInfo2 = function(name:string,age:number):string{
            return `${name} --- ${age}`;
        }
        console.log(getInfo2("aaas",111));
        //没有返回值方法
        var getInfo3 = function(name:string,age:number):void{
            console.log(`${name} --- ${age}`);
        }
        getInfo3("aaas",111);
    //可选参数 
        function getInfo4(name:string,age?:number):void{
            if(age){
                console.log(`${name} --- ${age}`);
            }else{
                console.log(`${name} --- 年龄保密`);
            }
        }
        getInfo4("喵喵");
        //注意：可选参数必须配置到参数的最后面
    //默认参数
        function getInfo5(name:string,age:number=20):void{
            console.log(`${name} --- ${age}`);
        }
        getInfo5("张三");
        getInfo5("张三",30);
    //剩余参数
        function sum(a:string,...result:number[]){
            var sum:number = 0,sum2:number = 0,length:number = result.length;

            result.forEach(value => {
                sum += value;
            });
            console.log(a+sum);

            for (let index = 0; index < length; index++) {
                sum2 += result[index];
            }
            console.log(a+sum2);
        }    
        sum("mm:",1,2,3);
    //函数的重载
        function aaasz(name:string):string;

        function aaasz(age:number):string;
    
        function aaasz(value:any):any{
            if(typeof value === 'string'){
                return '我叫'+value;
            }else{
                return '我的年龄'+value;
            }
        };
    //箭头函数
        setTimeout(()=>{
            alert(1);
        },1000);
//类
    //ts定义类 继承 修饰符 静态属性 静态方法
        class Person{
            name:string = "";//公有 public
            public aa:string = "11";//公有      所有类可以访问
            private bb:string = "22";//私有     只能在类可以访问
            protected cc:string = "33";//保护   在类和子类可以访问
            
            static mm1:string = "我是喵喵"; //静态属性

            static getMM1():void{           //静态方法
                console.log(this.mm1);
                console.log(name);
            }
            
            constructor(name:string){   //构造函数
                this.name = name;
            }   

            run():void{
                console.log(`${this.name} 哈哈哈`);
            }

            jump():void{
                console.log("父类在跳")
            }

            getName():string{
                return this.name;
            }

            setName(name:string):Person{
                this.name = name;
                return this;
            }
        }

        var p = new Person("张三");
        p.run();
        console.log(p.getName());
        console.log(p.setName("hhhmmmm").getName());
    
        class Web extends Person{
            constructor(name:string){  
                super(name);    //初始化父类构造函数
            }  

            jump():void{
                console.log("子类在跳"+Person.mm1)
            }

            work(){
                console.log(`${this.name}在运动`)
            }
        }

        var web = new Web("李四");
        web.run();
        web.work();
        web.jump();//子类重载父类方法

        console.log(Person.mm1);    //静态属性
        Person.getMM1();            //静态方法
    //多态
        class Animal {
            public name:string;
            constructor(name:string){  
               this.name = name;
            }  

            ear(){
                console.log("吃");
            };
        }
        class Dog extends Animal{
            constructor(name:string){  
                super(name);
            }  

            ear(){
                console.log(this.name +"吃狗食");
            };
        }
        class Mm extends Animal{
            constructor(name:string){  
                super(name);
            }  

            ear(){
                console.log(this.name +"吃猫食");
            };
        }
        var d1 = new Dog("二狗");
        var mm1 = new Mm("喵喵");
        d1.ear();
        mm1.ear();
    //抽象
        abstract class Animal1{     //抽象类
            abstract eat():void;    //抽象方法
        }
        //var a = new Animal1();    报错无法实例化
        class Dog1 extends Animal1{ //子类必须实现父类抽象方法
            eat(): void {
                console.log("狗吃狗食");
            }
        }
        class Cat1 extends Animal1{
            eat(): void {
                console.log("猫吃狗食");
            }
        }
        var d2 = new Dog1();
        var cat1 = new Cat1();
        d2.eat();
        //以下内容视频里面没有讲到补充的
        function printAnimal(animal:Animal1):void{
            console.log(animal.eat());
        }
        printAnimal(d2);
        printAnimal(cat1);
        //printAnimal(d1); d1不是Animal1子类
    //接口 
        //对多个方法传参json对象进行约束
        interface FullName{
            fiestName:string;   //注意;结束
            secondName:string;
        }
        function printName(name:FullName){
            console.log(name);
        }
        function printInfo(name:FullName){
            console.log(name+"hhhhh");
            //console.log(name+"hhhhh"+name.hh);报错
        }
        /*
            printName({
                fiestName:20,   //报错
                secondName:"哈哈"
            });
        */
        printName({             //无法传入接口除外的参数
            fiestName:"喵喵1",
            secondName:"哈哈"
        });
        var object = {
            hh: 11,
            fiestName:"喵喵1",
            secondName:"哈哈"
        }
        printName(object);      //可以传入接口除外的参数,但是在类里面无法使用hh
        printInfo(object);
        //可选属性接口
        interface FullName1{
            fiestName:string;   
            secondName?:string;     //接口可选属性
        }
        function printName1(name:FullName1){
            console.log(name);
        }
        var obj1 = {
            fiestName:"喵喵111",
            secondName: "哈哈哈"
        }
        var obj2 = {
            fiestName:"喵喵111"
        }
        printName1(obj1);
        printName1(obj2);
        //函数类型接口 -》实现加密的函数类型接口
        interface Enceypt{
            (key:string,value:string):string;
        }

        var md5s:Enceypt = function(key:string,value:string){
            return key+value;
        }
        var sha1:Enceypt = function(key:string,value:string){
            return key+value+"12123123";
        }
        console.log(md5s("name","张三"));
        console.log(sha1("name","张三111aaa"));
        //可索引接口：数组的约束（不常用）
        var array1:number[] = [11,22];
        var array2:Array<string> = ["11","22"];

        interface UserArray{
            [index:number]:string
        }
        var array10:UserArray = ['aaa','bbb'];
        //var array10:UserArray = ['aaa',111];//错误
        //可索引接口：对象的约束（不常用）
        interface UserObj{
            [index:string]:string
        }
        var arr123:UserObj = {name:'20'};
        //类类型接口:对类进行约束
        interface Animal4{
            name:string;
            eat():void;
        }
        class Dog2 implements Animal4{
            name: string;       
            constructor(name:string){
                this.name = name
            }     
            eat(): void {          //实现接口
                console.log(this.name+"吃粮食");
            }       
        }
        var d5 = new Dog2("hh");
        d5.eat();
        //接口扩展->接口继承
        interface Animal10{
            eat():void;
        }
        interface Pserson10 extends Animal10{
            work():void;
        }
        class Programmer{
            public name:string;
            constructor(name:string){
                this.name = name;
            }
            coding(code:string){
                console.log(this.name+"桥代码"+code);
            }
        }
        class PHP extends Programmer implements Pserson10{
            constructor(name:string){
                super(name);
            }
            work(): void {
                console.log("work");
            }            
            eat(): void {
                console.log("eat");
            }
        }
        var php = new PHP("喵喵");
        php.coding("java");
        //以下内容视频里面没有讲到补充的 类的多接口实现
        class JAVA implements Animal10,Animal{
            public name: string = "";            
            ear(): void {
                console.log("Animal.ear");
                
            }
            eat():void{
                console.log("Animal10.eat");
            }
        }
//泛型
    //泛型函数
        //同时返回string类型number类型
        //传入number返回number 传入string 返回string
        function getData<T>(value:T):T{
            return value;
        }
        getData<number>(123);
        getData<string>("123");
        //getData<number>("1123");报错
        function getData1<T>(value:T):any{
            return "1111222";
        }
        getData1<number>(123);
    //泛型类
        class MinClass<T>{
            public list:T[] = [];

            add(num:T){
                this.list.push(num);
            }

            min():T{
                var minNum = this.list[0];
                for(let i=0;i<this.list.length;i++){
                    if(minNum > this.list[i]){
                        minNum = this.list[i];
                    }
                }
                return minNum;
            }
        }

        var min = new MinClass<number>();
        min.add(5);
        min.add(3);
        min.add(5);
        console.log(min.min());

        var minstring = new MinClass<string>();
        minstring.add('a');
        minstring.add('n');
        minstring.add('s');
        console.log(minstring.min());
    //泛型接口
        interface ConfigFn{
            (value1:string,value2:string):string;
        }
        var setData:ConfigFn = function(value1:string,value2:string){
            return value1 + value2;
        }
        setData("name","张三");
        interface ConfigFn1{
            <T>(value1:T):T;
        }
        var setData1:ConfigFn1 = function<T>(value1:T){
            return value1;
        }
        setData1<string>("name");
        setData1<number>(11111);

        interface ConfigFn2<T>{
            (value1:T):T;
        }
        var setData2 = function<T>(value1:T):T{
            return value1;
        }
        var myGetData:ConfigFn2<string> = setData2;
        myGetData("20");
    //泛型类2
        class User{
            username:string|undefined;
            password:string|undefined;
        }
        class ArticleCate{
            title:string|undefined;
            desc:string|undefined;
            state:number|undefined;
        }
        class MysqlDB<T>{
            add(user:T):boolean{
                console.log(user);
                return true; 
            }
        }

        var u = new User();
        u.username = "喵喵";
        u.password = "123456";

        var a = new ArticleCate();
        a.title="国内";
        a.desc="国内新闻";
        a.state=1;

        var db = new MysqlDB<User>();
        db.add(u);
        var db2 = new MysqlDB<ArticleCate>();
        db2.add(a);
//模块(内部模块)
/*
    import {getData111} from './js/modules/db';
    import {saveData as hhh} from './js/modules/db';
    getData111();
    hhh();
*/
//命名空间
    namespace A{
        var mm:number = 0;

        export class MM{
            mm():void{
                console.log("mmmmm");
            }
        }
    }
    var MM1 = new A.MM().mm();

    namespace B{
        var mm:number = 1;
    }
//装饰器
    //类装饰器
        function logclass(params:any){          //普通装饰器无参
            console.log(params);   
            params.prototype.appUrl = '动态扩展的属性';

            params.prototype.run = function(){
                console.log("我是一个run方法");
            }
        }

        function logclass1(params:string){          //普通装饰器无参
            return function(target:any){
                console.log("logclass1",target);
                console.log("logclass1",params);
                target.prototype.appUrl = params;

                //重载构造函数
                return class extends target{
                    apiUrl:any = "我是重载的url"
                }
            }
        }


        function logclass2(target:any){
            //重载构造函数
            return class extends target{
                apiUrl:any = "我是重载的url";
                getData(){
                    console.log(this.apiUrl);
                }
            }
        }

        @logclass
        class HTTPClient{
            constructor(){

            }

            getData(){

            }
        }

        @logclass1('hello')
        class HTTPClient2{
            constructor(){
                
            }
        }

        @logclass2
        class HTTPClient3{
            public apiUrl:string | undefined;
            constructor(){
                this.apiUrl = "我是构造函数里面的apiUrl";
                console.log(this.apiUrl);
            }

            getData(){
                console.log(this.apiUrl);
            }
        }



        var http:any = new HTTPClient();
        console.log(http.appUrl);
        http.run();
        
        var http2:any = new HTTPClient2();
        console.log(http2.appUrl);

        var http3:any = new HTTPClient3();
        http3.getData();
    //属性装饰器
        function logPro(params:any){
            return function(target:any,attribute:any){
                console.log("logPro",target);    //类的原型对象
                console.log("logPro",attribute);
                console.log("logPro",params);
                target[attribute] = params;
            }
        }

        function logPro2(params:any){
            return function(target:any,attribute:any){
                console.log("logPro2",target);    //类的原型对象
                console.log("logPro2",attribute);
                console.log("logPro2",params);
                target[attribute] = params;
            }
        }

        class HTTPClient4{

            @logPro("http://xxxxx") //后执行
            @logPro2("hfewfwhw")    //先执行
            public url:string | undefined;

            constructor(){
                
            }

            getData(){
                console.log(this.url);
            }
        }

        var http10 = new HTTPClient4();
        http10.getData();
    //方法装饰器&方法参数装饰器
        function logMethod(params:any){
            return function(target:any,methodNBame:any,desc:any){
                console.log("logMethod",target);    //类的原型对象,如果是静态方法就是构造函数
                console.log("logMethod",methodNBame);
                console.log("logMethod",params);
                console.log("logMethod",desc.value);
                

                target.apiUrl = "xxxxx";
                target.run = function(){
                    console.log("1111")
                }
                //传入参数变成string类型
                //保存当前的方法
                var oMethod = desc.value;
                desc.value = function(...args:any[]){
                    args = args.map((value)=>{
                        return String(value);
                    });
                    console.log(args);
                    oMethod.apply(this,args);
                }
            }
        }

        function MMZSQ11(params:any){
            return function(target:any,methodNBame:any,desc:any){
                console.log("MMZSQ11",target);    //类的原型对象,如果是静态方法就是构造函数
                console.log("MMZSQ11",methodNBame);
                console.log("MMZSQ11",params);
                console.log("MMZSQ11",desc.value);
                
            }
        }

        class HTTPClient40{
            public url:string | undefined;

            constructor(){
                
            }

            @logMethod("哈哈")  //后执行
            @MMZSQ11("嘤嘤嘤")  //先执行
            getData(...args:any[]){
                console.log(args);
                console.log("我是getData");
            }

            @logMethod("哈哈")
            static mm(){
                
            }
        }

        var http30:any = new HTTPClient40();
        http30.run();
        http30.getData("111",222);
    //方法参数装饰器
        function logMethod20(params:any){
            return function(target:any,methodName:any,paramsIndex:any){
                console.log(params);
                console.log(target);   //原型对象
                console.log(methodName);   
                console.log(paramsIndex);   //索引位置

                
                target.apiUrl = params;
            }
        }

        function mmzsq(params:any){
            return function(target:any,methodName:any,paramsIndex:any){
                console.log(params);
                console.log(target);   //原型对象
                console.log(methodName);   
                console.log(paramsIndex);   //索引位置

                
                target.apiUrl = params;
            }
        }
        
        class HTTPClient50{
            public url:string | undefined;

            constructor(){
                
            }

            getData(@logMethod20('uuid') uid:any,@mmzsq('hhhhhh') mm:any){
                console.log("我是getData");
                console.log(uid);
                console.log(mm);
            }

        }

        var http40:any = new HTTPClient50();
        http40.getData(123456,654321);  //执行顺序 123456   654321
        console.log(http40.apiUrl);

        







    



        
    
    
        



        
        
    


    

    

        



    

    



    

    


    
        

    





