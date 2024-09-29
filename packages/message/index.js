import AnMessage from './index.vue';
import { createVNode, render } from 'vue';

let instance = [];
let el = null;
let seed = 0;

const Message = function (options) {
  seed++;
  
  if(!el) {
    el = document.createElement('div');
    el.style.height = '0px';
    el.style.width = '100%';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.flexDirection = 'column';
    el.style.position = 'fixed';
    el.style.top = options.offset ? options.offset + 'px' : '10px';
    document.body.appendChild(el);
  }

  const onDestroy = (id) => {
    const index = instance.findIndex(item => item.props.id === id);
    if(index > -1) {
      instance.splice(index, 1);
    }
    if(instance.length === 0) {
      el.remove();
      el = null;
    }
  }

  // 创建 VNode 并传递 top 值作为 prop
  let vm = createVNode(
    AnMessage,
    { 
      ...options,
      id: `an-message-${seed}`,
      onDestroy
    }
  );

  const container = document.createElement('div');

  render(vm, container);

  el.appendChild(container.firstElementChild);

  // 将创建的 VNode 添加到实例数组中
  instance.push(vm);

};

export default Message;
