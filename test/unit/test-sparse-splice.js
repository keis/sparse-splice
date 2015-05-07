describe('sparse-splice', function () {
  var sparseSplice = require('../../lib/sparse-splice')

  it('removes an element from the array', function () {
    var arr = [1, 2, 3, 4]
    sparseSplice(arr, [2])
    assert.deepEqual(arr, [1, 2, 4])
  })

  it('removes sparse elements from the array', function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    sparseSplice(arr, [9, 6, 7, 3])
    assert.deepEqual(arr, [1, 2, 3, 5, 6, 9])
  })
})
