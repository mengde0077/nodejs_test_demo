/*
* @Author: caolinming
* @Date:   2017-03-18 14:37:44
* @Last Modified by:   caolinming
* @Last Modified time: 2017-03-18 14:42:56
*/

'use strict';

var should = chai.should();
describe('simple test', function () {
  it('should equal 0 when n === 0', function () {
    window.fibonacci(0).should.equal(0);
  });
});