export default function chunkTask(datas) {
  if (datas.length === 0) return;
  let i = 0; // 记录当前处的任务索引

  function _run() {
    if (i === datas.length) return;
    requestIdleCallback((ide) => {
      while (ide.timeRemaining() > 0 && i < datas.length) {
        const task = datas[i];
        // 这里可以做一些异步操作，比如请求数据，渲染组件等
        task();
        i++;
      }
      _run();
    });
  }
  _run();
}
