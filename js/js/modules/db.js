"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dbUrl = "xxxxx";
exports.dbUrl = dbUrl;
function getData111() {
    console.log("获取数据库数据");
    return [
        {
            title: '1111'
        },
        {
            title: '2222'
        }
    ];
}
exports.getData111 = getData111;
function saveData() {
    console.log("保存数据");
}
exports.saveData = saveData;
