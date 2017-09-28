/*
* @Author: caolinming
* @Date:   2017-04-26 18:12:24
* @Last Modified by:   caolinming
* @Last Modified time: 2017-05-27 14:12:50
*/

'use strict';

var eventProxy = require('eventproxy');
var ep = new eventProxy();

ep.all('eventA', 'eventB', 'eventC', 'eventD')