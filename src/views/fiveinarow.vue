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
      <div>
        <div>对局</div>
        <div class="chessboard  pd">
          <div class="chessboard_box flex_one_w">
            <div v-for="index of 900" :key="index">
            </div>
          </div>
          <div class="ciz_a flex_one_w">
            <div v-for="(item,index) of qiz_a" :key="index" @click="item.state?xia(index):''" :class="item.type==1?'czb':item.type==0?'':'czbb'"></div>
          </div>
        </div>
      </div>
      <div>
        <div>游戏消息</div>
        <div class="bord" ref="bord_">
          <div class="flex_one" v-for="(item,index) of GameMsgData" :key="index">
            <div>{{item}}</div>
          </div>
        </div>
        <div>
          <el-button @click="open()">开始游戏</el-button>
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
        start:'在线',
        qiz_a:[]
      }
    },
    created(){
      // this.infoqizi()
    },
    methods:{
      
    }
}
</script>

<style>
.bord{
  border: solid 1px #eee;
  width: 200px;
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
  max-width: 140px;
}
.list{
  width: 120px;
  height: 400px;
  border: solid 1px #eee;
}
.list div{
  line-height: 30px;
  border-bottom: solid 1px #eee;
  cursor: pointer;
}
.chessboard{
  width: 600px;
  height: 600px;
  border: solid 1px #eee; 
  position: relative;
}
.ciz_a{
  width: 620px;
  height: 620px;
  top: 10px;
  left: 10px;
  position: absolute
}
.ciz_a div{
  width: 20px;
  height: 20px;
  /* background-color: aqua; */
  border-radius: 10px;
}
.chessboard_box{
  width: 100%;
  height: 100%;
  /* border: solid 1px black; */
}
.chessboard_box>div{
  width: 18px;
  height: 18px;
  border: solid 1px black;
  position: relative;
}
.czb{
  background-color: red;
}
.czbb{
  background-color: black;
}
</style>