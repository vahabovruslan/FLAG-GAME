let obj = {
    arr : [4,8,15,19,85,92,97,50,154,159,0],
    remove : function() {
      return this.arr[this.arr.length--]
    }
  }
  obj.remove()
  alert(obj.arr);