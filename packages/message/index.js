import AnMessage from './index.vue';
import { createVNode, render } from 'vue';

let instance = [];
let verticalTop = 16;

const computedVerticalTop = () => {
  return instance.reduce((prev, curr) => {
    return prev + curr.el.offsetHeight + verticalTop;
  }, verticalTop);
};

const Message = function (options) {
  // 计算当前消息框的 top 值
  const computedTop = computedVerticalTop();

  // 创建 VNode 并传递 top 值作为 prop
  let vm = createVNode(AnMessage, { ...options, top: computedTop });

  const container = document.createElement('div');

  render(vm, container);

  document.body.appendChild(container);

  // 将创建的 VNode 添加到实例数组中
  instance.push(vm);

  // 添加一个清除函数，当实例被移除时更新垂直偏移量
  vm.el.addEventListener('transitionend', () => {
    updateInstanceArray();
  });

  // 更新实例数组的辅助函数
  function updateInstanceArray() {
    console.log('Updating instance array');
    if (vm.el && !getComputedStyle(vm.el).display) {
      // 如果元素不可见（即已关闭），则从数组中移除
      instance = instance.filter(inst => inst !== vm);
      // 更新所有后续消息框的位置
      instance.forEach((inst, index) => {
        inst.el.style.top = `${computedVerticalTop() - (index * (inst.el.offsetHeight + verticalTop))}px`;
      });
    }
  }

  // 返回一个清除函数，确保在实例被移除时调用 updateInstanceArray
  return () => {
    vm.el.removeEventListener('transitionend', updateInstanceArray);
  };
};

export default Message;