/*
* @Author: caolinming
* @Date:   2017-05-03 17:47:16
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-03 17:50:59
*/

'use strict';
var excelPort = require('excel-export');

exports.write = function(req, res, next){
    var datas = req.datas;
    var conf = {};
    var filename = 'filename';  //只支持字母和数字命名

    //caption设置首行各单元格内容，type设置的是每一列的数据类型，width设置单元格大小。
    conf.cols = [
       {caption:'名称', type:'string', width:20},
       {caption:'简介', type:'string', width:40},
       {caption:'报酬', type:'string', width:20},
       {caption:'时间', type:'date', width:40},
       {caption:'人员', type:'string', width:30},
       {caption:'编号', type:'string', width:30},
       {caption:'金额', type:'number', width:30},
       {caption:'手机号', type:'string', width:30}
    ];

    //rows 赋值的是每一行的数据，每个数据都要与所在列所设置的数据格式一致，否则会报错，生成后的表格该单元格会显示NaN。
    var array = [];
    array[0] = [
        datas[0][0],
          datas[0][1],
          datas[0][2],
          datas[0][3],
          datas[0][4],
          datas[0][5],
          datas[0][6],
          datas[0][7]
    ];


    conf.rows = array[0];
    var result = excelPort.execute(conf);

    var random = Math.floor(Math.random()*10000+0);

    var uploadDir = 'public/upload/pay/';
    var filePath = uploadDir + filename + random + ".xlsx";

    fs.writeFile(filePath, result, 'binary',function(err){
        if(err){
            console.log(err);
        }
    });
}