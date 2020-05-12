import io from 'socket.io-client';
export default {
  data() {
    return {
      path: "ws://192.168.6.47:8081",
      // path: "ws://www.lishuang96.com:100",
      socket: "",
      OnLine: [],
      MsgData:[],
      GameMsgData:[],
      item: '',
      UserId:this.$store.state.UserData.Id,
      //游戏角色
      gameType:0,
      gamestate:false,
    }
  },
  mounted() {
    // 初始化
    this.init()
  },
  methods: {
    //初始化
    init() {
      this.socket = io(this.path)
      this.socket.emit('setList', this.$store.state.UserData.Id)
      this.socket.on('getMsg', data => {
        this.InfoData(data)
        console.log('服务端消息：', data);
      })
      
      this.socket.on('GameMsg', data => {
        this.InfoGameData(data)
      })
    },
    //发送消息
    send(value) {
      this.socket.emit('send', {
        Id: this.$store.state.UserData.Id,
        to: this.item.Id,
        msg: value
      });
      this.input = ''
    },
    //关闭连接（下线）
    close() {
      this.socket.disconnect(this.$store.state.UserData.Id)
    },
    //建立聊天
    openChat(item) {
      this.MsgData = []
      if (this.item) {
        this.socket.emit('leaveRoom', {
          Id: this.$store.state.UserData.Id,
          to: this.item.Id
        })
      }
      this.socket.emit('joinRoom', {
        Id: this.$store.state.UserData.Id,
        to: item.Id
      })
      this.socket.emit('getOldGame', {
        Id: this.$store.state.UserData.Id,
        to: item.Id
      })
      if(item.UnreadMsgNum>0){
        this.socket.emit('getUnreadMsg', {
          Id: this.$store.state.UserData.Id,
          to: item.Id
        })
      }
      this.socket.emit('getOldMsg', {
        Id: this.$store.state.UserData.Id,
        to: item.Id
      })
      this.item = item
    },
    //返回数据处理
    InfoData(data) {
      if (data.type == "Online") {
        this.OnLine = []
        data.data.forEach(item=>{
          if(item.Id != this.$store.state.UserData.Id){
            this.OnLine.push(item)
          }
        })
        
      }
      if (data.type == "Outline") {
        this.OnLine = []
        data.data.forEach(item=>{
          if(item.Id != this.$store.state.UserData.Id){
            this.OnLine.push(item)
          }
        })
      }
      if(data.type == "msg"){
        this.MsgData.push(data.data)
        setTimeout(()=>{
          this.$refs.bord.scrollTop = this.$refs.bord.scrollHeight
        })
      }
      if(data.type == "UnreadMsg"){
        this.MsgData.push(...data.data)
        setTimeout(()=>{
          this.$refs.bord.scrollTop = this.$refs.bord.scrollHeight
        })
      }
      if(data.type == "OldMsg"){
        this.MsgData = []
        this.MsgData.push(...data.data)
        setTimeout(()=>{
          this.$refs.bord.scrollTop = this.$refs.bord.scrollHeight
        })
      }
    },
    //开始游戏
    open(){
      this.socket.emit('playGame', {
        Id: this.$store.state.UserData.Id,
        to: this.item.Id
      })
    },
    //下棋子
    xia(index){
      console.log(index)
      this.socket.emit('xiaqi', {
        Id: this.$store.state.UserData.Id,
        to: this.item.Id,
        index:index,
        type:this.gameType
      })
    },
    //返回游戏数据
    InfoGameData(data){
      if(data.type == 'OldGame'||data.type == 'infogame'){
        this.qiz_a = data.data
      }
      if(data.type == 'gamemsg'){
        this.GameMsgData.push(data.data)
        setTimeout(()=>{
          this.$refs.bord_.scrollTop = this.$refs.bord_.scrollHeight
        })
      }
      if(data.type == 'gametype'){
        this.gameType = data.data
      }
      if(data.type == 'gamestate'){
        this.GameMsgData.push(data.data.msg)
        setTimeout(()=>{
          this.$refs.bord_.scrollTop = this.$refs.bord_.scrollHeight
        })
      }
    }
  },
}