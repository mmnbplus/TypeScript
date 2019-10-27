var dbUrl = "xxxxx";

export function getData111():any[]{
    console.log("获取数据库数据");
    return [
        {
            title:'1111'
        },
        {
            title:'2222'
        }
    ]
}

function saveData(){        //外部无法使用
    console.log("保存数据");
}

export {        //统一暴露
    dbUrl,
    saveData,
}



