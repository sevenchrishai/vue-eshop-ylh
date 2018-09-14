// 封装 storage 组件，操作storage对数据的存储
var storage = {
  set(k,v){
    localStorage.setItem(k,JSON.stringify(v))
  },
  get(k){
    return JSON.parse(localStorage.getItem(k) || '[]')
  },
  remove(k){
    localStorage.removeItem(k)
  }
}

export default storage
