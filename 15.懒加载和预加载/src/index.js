console.log(123);
console.log(1111);
/* if (module.hot) {
  module.hot.accept('./print.js', () => {
 执行代码中回调函数
 print()
  });
} */


/*  懒加载  需要使用文件的时候再加载
document.getElementById('btn-wrap').onclick = function () {
    console.log('====  点击按钮')
    import(/!*webpackChunkName:'test' *!/"./test")
        .then(({test}) => {
            console.log('test加载成功')
            test()
        })
        .catch(error => {
            console.log('test加载失败 error:', error)
        })
}
*/
//预加载  在使用文件之前加载  等其他资源加载完毕再加载1314670-=8
/*
import(/!*webpackChunkName:'test' ,webpackPrefetch:true*!/"./test")
    .then(({test}) => {
        console.log('test加载成功')
        test()
    })
    .catch(error => {
        console.log('test加载失败 error:', error)
    })
*/
