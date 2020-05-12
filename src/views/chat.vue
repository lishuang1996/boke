<template>
    <div class="flex_one">
      <div>
        <div>在线列表</div>
        <div class="list">
          <div v-for="(item,index) of OnLine" :key="index" @click="openChat(item)">
            {{item.LineState?'(在线)':'(离线)'}}
            {{item.Name}}{{item.UnreadMsgNum>0?'('+item.UnreadMsgNum+')':''}}
          </div>
          <div @click="close">刷新列表</div>
        </div>
      </div>
      <div>
        <div>与（{{item.Name}}）的聊天</div>
        <div class="bord" ref="bord">
          <div :class="item.Id==UserId?'flex_two':'flex_one'" v-for="(item,index) of MsgData" :key="index">
            <div>{{item.msg}}</div>
          </div>
        </div>
        <el-input v-model="input"></el-input>
        <div>
          <el-button @click="send(input)">发送</el-button>
        </div>
      </div>
    </div>
</template>

<script>
import chat from '@/mixins/chat'
export default {
    mixins:[chat],
    data(){
      return {
        input:'',
        start:'在线'
      }
    }
}
</script>

<style>
.bord{
  border: solid 1px #eee;
  width: 500px;
  height: 361px;
  overflow-y: scroll;
}
.bord div{
  padding: 10px;
  overflow-wrap: break-word;
  text-align: left;
}
.bord div div{
  border: solid 1px #eee;
  max-width: 440px;
}
.list{
  width: 200px;
  height: 400px;
  border: solid 1px #eee;
}
.list div{
  line-height: 30px;
  border-bottom: solid 1px #eee;
  cursor: pointer;
}
</style>