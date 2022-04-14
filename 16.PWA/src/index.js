(function () {
  console.log(123);
  // 注册serviceworker
  // 处理兼容性问题
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(
          () => {
            console.log('sw注册成功了');
          },
      ).catch(() => {
        console.log('sw注册失败了');
      });
    });
  }
})()


