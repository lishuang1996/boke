<template>
  <div>
    <button>连接</button>
    <button>关闭</button>
  </div>
</template>

<script>
export default {
  name: "AddressList",
  created() {},
  methods: {
    /* 封装 WebSocket 实例化的方法  */
    CreateWebSocket() {
      return function(urlValue) {
        if (window.WebSocket) return new WebSocket(urlValue);
        if (window.MozWebSocket) return new MozWebSocket(urlValue);
        return false;
      };
    },
    /* 实例化 WebSocket 连接对象, 地址为 ws 协议 */
    webSocket() {
      webSocket = this.CreateWebSocket("ws://192.168.6.47/");
      /* 接收到服务端的消息时 */
      webSocket.onmessage = function(msg) {
        console.log("服务端说:" + msg.data);
      };
      /* 关闭时 */
      webSocket.onclose = function() {
        console.log("关闭连接");
      };
    },
    send() {
      webSocket.send("123");
    },
    close() {
      webSocket.close();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>