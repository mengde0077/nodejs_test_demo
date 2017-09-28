/*
* @Author: caolinming
* @Date:   2017-05-03 15:49:34
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-04 11:41:19
*/

'use strict';

var xl = require('node-xlrd');
// console.log(xl);
exports.read = function(path, callback){
    var path = 'orderlist.xls';
    var datas = [];
    // console.log(path);
    debugger;
    xl.open(path, function(err,bk){
    	// console.log('111');
    	// console.log(bk);
        if(err) {console.log(err.name, err.message); return;}
        debugger;
        var shtCount = bk.sheet.count;
        // console.time(shtCount);
        for(var sIdx = 0; sIdx < shtCount; sIdx++ ){
            console.log('sheet "%d" ', sIdx);
            console.log('  check loaded : %s', bk.sheet.loaded(sIdx) );
            var sht = bk.sheets[sIdx],
                rCount = sht.row.count,
                cCount = sht.column.count;
            console.log('  name = %s; index = %d; rowCount = %d; columnCount = %d', sht.name, sIdx, rCount, cCount);
            for(var rIdx = 0; rIdx < rCount; rIdx++){    // rIdx：行数；cIdx：列数
                var data = [];
                for(var cIdx = 0; cIdx < cCount; cIdx++){
                    try{
                        data[cIdx] = sht.cell(rIdx,cIdx);
                        console.log('  cell : row = %d, col = %d, value = "%s"', rIdx, cIdx, sht.cell(rIdx,cIdx));
                    }catch(e){
                        console.log(e.message);
                    }
                }
                datas[rIdx] = data;
                // console.log(datas);

            }
        }
        callback(null, datas)
        // console.log(datas);
    });
};


