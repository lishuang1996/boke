function info1() {
  var mybox = document.getElementsByTagName('body')[0]
  let div = document.createElement('div')
  div.id = 'mybox'
  div.style.width = '200px'
  div.style.height = '300px'
  div.style.backgroundColor = '#fff'
  div.style.position = 'fixed'
  div.style.zIndex = '99999999'
  div.style.top = 0
  div.innerHTML = "<input class='m_input1' type='text' style='border: solid 1px black;'>" +
      "<input class='m_input1' type='text'style='border: solid 1px black;'>" +
      "<div><button id='m_login'>登录</button></div>"
  mybox.appendChild(div)

  function checkLogin1(in1, in2) {
      var params = 'act=login&login_user=' + encodeURIComponent(in1) + '&login_pwd=' + td(in2) + '&password_type=1';
      var requestUrl = _protocol + '//www.tanwan.com/api/check_login_user.php?';
      subLogin('http://zlzz.tanwan.com/list/', requestUrl + params);
  }

  function subLogin(gourl, url) {
      $.getJSON(url + '&callback=?', function (data) {
          console.log(data)
      });
  }
  let loginbtn = document.getElementById('m_login')
  loginbtn.addEventListener('click', event => {
      let name = document.getElementsByClassName('m_input1')[0].value
      let psd = document.getElementsByClassName('m_input1')[1].value
      checkLogin1(name, psd)
      setTimeout(function () {
          window.open('http://www.tanwan.com/index.php?act=gamelogin&game_id=1530&server_id=8039')
      }, 2000)
  })
}

function info2() {
  setTimeout(function () {
      if (document.getElementById('game_iframe')) {
          window.location.href = document.getElementById('game_iframe').src
      }
  }, 2000)
}

function info3() {
  //交易时的角色1交易方2接收方
  var jyusertype = 1
  var jyname = 'a22'
  var jydata = ''
  var wjdata = ''
  //交易
  TradeControl.prototype.update = function (e, t) {
      console.log('TradeControl')
      console.log(e)
      console.log(t)
      switch (e) {
          case 104002:
              jyjs_fn(t)
              gd.trade.invitUpdate(t);
              break;
          case 104004:
              jytj_fn()
              gd.trade.tradeTargetUid = t.uid,
                  gd.trade.tradeTargetName = t.name,
                  uim.showOrHide(543, new UIData(t));
              break;
              t
          case 104007:
              jyqd_fn(t) 
              !t.state || 5 != t.state && 4 != t.state && 6 != t.state ? gd.trade.stateUpdate(t) : (gd.trade.tradeClose = !0,
                  uim.hide(543),
                  gd.trade.tradeClose = !1,
                  gd.trade.tradeState = {},
                  gd.trade.tradeTargetUid = null,
                  gd.bag.tradeItem = null,
                  gd.bag.myTradeItemByLid = {},
                  6 == t.state && ncm.err("与" + gd.trade.tradeTargetName + "距离过远，无法进行交易"),
                  5 == t.state && ncm.err("对方取消了交易!"),
                  4 == t.state && ncm.err("交易成功!"),
                  gd.trade.tradeTargetName = null)
      }
  }
  //获取附近玩家
  ARPGEntityControl.prototype.update = function (e, t) {
      //获取附近玩家
      if (t != undefined && t.addPlayers) {
          if (t.addPlayers.length > 0) {
              for (let i = 0; i < t.addPlayers.length; i++) {
                  if (t.addPlayers[i].name == jyname) {
                      jydata = t.addPlayers[i].lid
                  }
              }
          }
      }
      //玩家信息
      if (t != undefined && t.addPlayers) {
          wjdata = t.addPlayers[0]
      }
      if (this.curInstance)
          switch (e) {
              case 67001:
                  this.curInstance.updateView(t);
                  break;
              case 67002:
                  var i = GameObjectCreator.createRoleByBean(t);
                  this.curInstance.addPlayer(i);
                  break;
              case 67027:
                  this.curInstance.updateFashion(t);
                  break;
              case 67032:
                  this.curInstance.updateAttr(t);
                  break;
              case 67028:
                  this.curInstance.updateJunXian(t);
                  break;
              case 67024:
                  this.curInstance.updateUnion(t);
                  break;
              case 67038:
                  this.curInstance.updateAsuram(t);
                  break;
              case 67006:
                  var r = GameObjectCreator.createPetByBean(t);
                  this.curInstance.addMinion(r);
              case 67013:
                  this.curInstance.addEvent(t);
                  break;
              case 67003:
                  this.curInstance.checkMonster([t]);
                  break;
              case 67055:
                  this.curInstance.showPiaozi(t);
                  break;
              case 67004:
                  this.curInstance.addNpc(GameObjectCreator.createNpcByBean(t), t.x, t.y);
                  break;
              case 67015:
                  this.curInstance.addDrop(GameObjectCreator.createDrop(t));
                  break;
              case 67007:
                  var n = GameObjectCreator.createHuanShouByBean(t);
                  this.curInstance.addMinion(n);
                  break;
              case 67008:
                  this.curInstance.exitView(t);
                  break;
              case 67011:
                  this.curInstance.changePosition(t),
                      emIns.firstPlayer && t.lid.toString() == emIns.firstPlayer.gameObject.uid && gd.task.checkChangePos(t);
                  break;
              case 67014:
                  this.curInstance.relive(t);
                  break;
              case 67019:
                  break;
              case 67020:
                  break;
              case 67016:
                  this.curInstance.updateEquip(t);
                  break;
              case 67023:
                  this.curInstance.updateWing(t);
                  break;
              case 68004:
                  this.curInstance.moveTo(t);
                  break;
              case 68005:
                  this.curInstance.moveTo(t, 2);
                  break;
              case 68008:
                  this.curInstance.changeDir(t);
                  break;
              case 67039:
                  gd.yabiao.updateEmsState(t);
                  break;
              case 67040:
                  gd.map.tombInfo = t,
                      this.curInstance.checkNpc(t),
                      gd.player.sendNotif(572, t);
                  break;
              case 67043:
                  gd.arpgInst.setMiningInfo(t);
                  break;
              case 67042:
                  gd.arpgInst.stopMinig();
                  break;
              case 67045:
                  gd.arpgInst.treasurePoint = t,
                      gd.arpgInst.sendNotif(579, t);
                  break;
              case 67048:
                  gd.arpgInst.digCd = t.toNumber(),
                      gd.arpgInst.sendNotif(580);
                  break;
              case 35001:
                  gd.arpgInst.lsTreasureOwner = t,
                      gd.arpgInst.sendNotif(596, t);
                  break;
              case 35002:
                  gd.arpgInst.lsJifen = t,
                      gd.arpgInst.sendNotif(597);
                  break;
              case 35004:
                  gd.arpgInst.sendNotif(598, t);
                  break;
              case 35005:
                  gd.arpgInst.receivedId = t;
                  break;
              case 35007:
                  gd.arpgInst.receivedId = t,
                      gd.arpgInst.sendNotif(599, t);
                  break;
              case 67049:
                  this.curInstance.updateChuanshuo(t);
                  break;
              case 67056:
                  this.curInstance.updateJianzhen(t);
                  break;
              case 46007:
                  this.curInstance.updateSoulPetSay(t);
                  break;
              case 67058:
                  this.curInstance.updatePlayerSex(t);
                  break;
              case 67060:
                  break;
              case 67061:
                  this.curInstance.updateLingbao(t)
          }
      switch (e) {
          case 67018:
              console.log("尝试请求进入地图" + t.mid + "成功开始请求登录地图"),
                  gd.map.prepareToEnterMap(t.mid),
                  net.MapModel.ins().send12();
              break;
          case 67026:
              gd.arpgInst.reliveHandle(t);
              break;
          case 67009:
              this.curInstance = GameSceneManager.Instance.changeMap(gd.map.prepareMapid),
                  GameObserverManager.Instance.arpgFightControl.curInstance = this.curInstance,
                  gd.map.lastLoginData = t,
                  console.log("玩家登录地图成功"),
                  emIns.firstPlayer = null,
                  emIns.changeControlPlayer(t.lid);
              console.log(t.lid)
              break;
          case 67050:
              gd.boss.updateKuafuyjInfo(t);
              break;
          case 67051:
              gd.boss.updateKuafuyjNum(t);
              break;
          case 67052:
              gd.boss.getKuafuyjInfo(t);
              break;
          case 67010:
              gd.map.prepareToEnterMap(t.mid),
                  net.MapModel.ins().send12();
              break;
          case 67022:
              gd.arpgInst.setOwner(t);
              break;
          case 67057:
              gd.arpgInst.mapskillid = t.skillId,
                  gd.arpgInst.mapskillLevel = t.level,
                  gd.arpgInst.sendNotif(468);
              break;
          case 67059:
              this.curInstance.updatePlayerAssistInfo(t);
              break;
          case 73001:
              var a = gd.arpgInst;
              a.sendNotif(413);
              var o = gd.map.config.cls,
                  s = cm.mapPlay[gd.map.config.id];
              if (0 != t.itemBean.length) {
                  var l = new UIData(t, gd.map.config.cls);
                  uim.show(785, l),
                      gd.arpgInst.sendNotif(380, s ? s.mapType : 1)
              } else
                  50 != o ? (uim.show(790, new UIData(t)),
                      gd.arpgInst.sendNotif(380, s ? s.mapType : 1)) : (a.ownerData = null,
                      a.sendNotif(369));
              break;
          case 73004:
              gd.arpgInst.dumTimes = t,
                  gd.arpgInst.sendNotif(353, t);
              break;
          case 73005:
              gd.arpgInst.sendNotif(354, t);
              break;
          case 73007:
              gd.inst.sendNotif(355, t);
              break;
          case 73008:
              gd.inst.sendNotif(356, t);
              break;
          case 73012:
              break;
          case 67030:
              gd.arpgInst.fightModel = t,
                  gd.arpgInst.sendNotif(411, t),
                  this.curInstance && this.curInstance.updateFightMode();
              break;
          case 73018:
              var c = "",
                  d = 1;
              t.killerId.equals(gd.player.uid) ? (c = Html.str(t.playerName, Html.New105) + "被" + Html.str("你", Html.New105) +
                      "击败了",
                      d = 1) : (d = 0,
                      c = Html.str("你", Html.New105) + "被" + Html.str(t.killName, Html.New105) + "击败了"),
                  gd.inst.sendNotif(408, {
                      state: d,
                      msg: c
                  });
              break;
          case 73013:
              for (var u = 0, p = t; u < p.length; u++) {
                  var f = p[u];
                  gd.inst.itemUseMark[f.globalId] = f.useNum
              }
              gd.inst.sendNotif(272, t);
              break;
          case 73031:
              gd.arpgInst.setHurtBossRank(t);
              break;
          case 71001:
              gd.arpgInst.cfgId = t.cfgId,
                  gd.arpgInst.createTime = t.createTime,
                  gd.arpgInst.uniqueId = t.instnceId,
                  gd.arpgInst.dupstate = 1;
              break;
          case 71007:
              gd.arpgInst.playerMonsterArr = t;
              break;
          case 71005:
              36 == GameSceneManager.Instance.mapConfig.cls && uim.show(789, new UIData(t, 36)),
                  gd.arpgInst.dupstate = 2;
              break;
          case 71006:
              break;
          case 71009:
              var g = cm.duplicate[t.duplicateId];
              g && (8 == g.duplicateType ? gd.boss.setSamsaraData(t) : 9 == g.duplicateType && gd.boss.setWorldBossData(t));
              break;
          case 71010:
              gd.arpgInst.sendNotif(255, t);
              break;
          case 71013:
              gd.cangbaotu.getDugBookInfo(t);
              break;
          case 71014:
              gd.cangbaotu.changeDugBook(t);
              break;
          case 71021:
              gd.cangbaotu.getCbtBossState(t);
              break;
          case 71015:
              gd.arpgInst.getNMGZInfo(t);
              break;
          case 71016:
              gd.arpgInst.getNMGZReward(t);
              break;
          case 71018:
              gd.arpgInst.getNMGZBossState(t);
              break;
          case 71019:
              gd.arpgInst.getYMSYInfo(t);
              break;
          case 71020:
              gd.arpgInst.getYMSYBossState(t);
              break;
          case 71023:
              gd.arpgInst.mosterSum = t,
                  gd.arpgInst.sendNotif(648, t);
              break;
          case 71012:
              var h = cm.duplicate[t.duplicateId],
                  m = cm.map[h.mapId],
                  v = new UIData(t, m.cls, t.success ? 1 : 0);
              uim.show(789, v);
              break;
          case 71026:
              gd.arpgInst.ymsyRewardState = t,
                  gd.arpgInst.sendNotif(642);
              break;
          case 71028:
              gd.arpgInst.defendCityInfo = t,
                  gd.arpgInst.defendCityGuys = {};
              for (var y in gd.arpgInst.defendCityInfo.helpFriends)
                  gd.arpgInst.defendCityGuys[gd.arpgInst.defendCityInfo.helpFriends[y].toString()] = gd.arpgInst.defendCityInfo.helpFriends[
                      y];
              gd.angler.checkDefendCity(!0),
                  gd.arpgInst.sendNotif(643);
              break;
          case 71030:
              var _ = new CallBack3(this.enterCallBacks, this, [t]),
                  b = cm.duplicate[t],
                  I = cm.map[b.mapId];
              AlertDialog.showAlertById(118, _, [I.name]);
              break;
          case 71031:
              gd.arpgInst.sendNotif(400, t);
              break;
          case 71032:
              uim.hide(785);
              var o = gd.map.config.cls,
                  s = cm.mapPlay[gd.map.config.id],
                  w = new UIData(t, gd.map.config.cls);
              uim.show(785, w);
              break;
          case 73028:
              gd.boss.bossDoubleDic[t.mapId] = t.isDoubleChallenge,
                  gd.boss.sendNotif(115);
              break;
          case 71034:
              gd.boss.samsarahellInfo = t,
                  gd.angler.checkSamsaraHell(!0),
                  gd.boss.sendNotif(128);
              break;
          case 71036:
              uim.hide(789);
              var k = cm.duplicate[t.duplicateId],
                  x = cm.map[k.mapId],
                  C = new UIData(t, x.cls, t.success ? 1 : 0, !0);
              uim.show(789, C);
              break;
          case 71039:
              gd.boss.tanwandupNum = t.count,
                  gd.boss.tanwandupBuyNum = t.hasBuyCount,
                  gd.boss.sendNotif(129);
              break;
          case 71038:
              gd.boss.tanwandupNum = t.count,
                  gd.boss.tanwandupBuyNum = t.hasBuyCount,
                  gd.boss.sendNotif(129);
              break;
          case 73033:
              gd.setting.updateChuangShiRemind(t);
              break;
          case 73034:
              var T = cm.map[gd.map.curMapId];
              if (1 == T.convene) {
                  var E = new CallBack3(this.enterCallBack, this, [t]),
                      S = cm.map[t.mapId],
                      A = cm.getMonsterConfig(t.monsterId);
                  AlertDialog.showAlertById(138, E, [A.name, S.name], null, null, null, null, 3)
              }
      }
  }
  //开始交易
  function ksjy_fn() {
      net.DeliverModel.prototype.send1(1062)
      console.log(jydata)
      setTimeout(res => {
          net.TradeModel.prototype.send1(jydata)
      }, 400)
  }
  //添加到交易
  function jytj_fn() {
      //添加到交易的装备
      if (jyusertype == 1) {
          let zbArr = gd.bag.equipList
          for (let i = 0; i < zbArr.length; i++) {
              if (zbArr[i].bind == 0) {
                  net.BagModel.prototype.send29(zbArr[i].lid, zbArr[i].itemId, zbArr[i].count)
              }
          }
          //添加到交易的道具
          let djArr = gd.bag.itemList
          for (let i = 0; i < djArr.length; i++) {
              if (djArr[i].bind == 0) {
                  net.BagModel.prototype.send29(djArr[i].lid, djArr[i].itemId, djArr[i].count)
              }
          }
      }
      setTimeout(res => {
          sdjy_fn()
      }, 400)
  }
  //锁定交易
  function sdjy_fn() {
      setTimeout(res => {
          net.TradeModel.prototype.send6(1)
      }, 400)
  }
  //交易确定
  function jyqd_fn(t) {
      if (t) {
          if (t.state == 2) {
              setTimeout(res => {
                  net.TradeModel.prototype.send6(3)
              }, 400)
          }
      }
  }
  //交易接收
  function jyjs_fn(e) {
      setTimeout(res => {
          net.TradeModel.prototype.send3(e.uid)
      }, 400)
  }
  //签到
  function qd_fn() {
      for (let i = 1; i <= 31; i++) {
          net.WelfareModel.prototype.send2(i, 1)
      }
  }
  //签到次数领取
  function qdcs_fn() {
      for (let i = 1; i <= 5; i++) {
          net.WelfareModel.prototype.send5(i)
      }
  }
  //在线奖励领取
  function zxjl_fn() {
      for (let i = 1; i <= 6; i++) {
          net.WelfareModel.prototype.send7(i)
      }
  }
  //资源找回
  function zfzh_fn() {
      setTimeout(res => {
          net.RewardfindModel.prototype.send4(3)
      }, 400)
  }
  //离线挂机
  function lxgj_fn() {
      setTimeout(res => {
          net.RoleModel.prototype.send38()
      }, 400)
      setTimeout(res => {
          hszb_fn()
      }, 1500)
  }
  //回收装备
  function hszb_fn() {
      net.DeliverModel.prototype.send1(1061)
      let zbarr = gd.bag.equipList
      let hsarr = []
      for (let i = 0; i < zbarr.length; i++) {
          if (zbarr[i].fromBean.type != 1) {
              hsarr.push(zbarr[i].lid)
          }
      }
      setTimeout(res => {
          net.BagModel.prototype.send7(hsarr)
      }, 1500)
  }
  //一键执行
  function flyjzx_fn() {
      qd_fn()
      qdcs_fn()
      zxjl_fn()
      zfzh_fn()
      lxgj_fn()
  }
  TaskControl.prototype.update = function (e, t) {
      console.log('TaskControl')
      console.log(e)
      console.log(t)
      switch (e) {
          case 102003:
              gd.task.setAllTaskInfo(t);
              break;
          case 102001:
              wm_wc(t)
              gd.task.TaskProcessUpdate(t);
              break;
          case 102005:
              gd.task.dailyTaskUpdate(t);
              break;
          case 102007:
              gd.task.updateBossTaskInfo(t);
              break;
          case 102014:
              gd.task.updateRecoveryTaskInfo(t);
              break;
          case 102015:
              wm_ks(t)
              gd.task.updateShenWeiTaskInfo(t);
              break;
          case 102016:
              cm_ks(t)
              gd.task.updateChuMoTaskInfo(t);
              break;
          case 102018:
              gd.task.updateRecoverytimes(t)
      }
  }
  //威名任务初始化
  function wm_fn() {
      net.TaskModel.prototype.send6(5)
  }
  //威名任务开始
  function wm_ks(e) {
      for (let i = 0; i < e.length; i++) {
          if (e[i].state == 1) {
              net.TaskModel.prototype.send8(e[i].taskId) //任务1
              net.TaskModel.prototype.send4(e[i].goalDataList[0].goalId, 0)
              setTimeout(() => {
                  gd.arpgInst.setAutoFight(1)
              }, 100);
              break;
          } else if (e[i].state == 2) {
              net.TaskModel.prototype.send4(e[i].goalDataList[0].goalId, 0)
              setTimeout(() => {
                  gd.arpgInst.setAutoFight(1)
              }, 100);
              break;
          } else if (e[i].state == 3) {
              net.TaskModel.prototype.send2(e[i].taskId)
              break;
          }
      }
  }
  // 除魔任务初始化
  function cm_fn() {
      net.TaskModel.prototype.send6(2)
  }
  //除魔任务开始
  function cm_ks(e) {
      net.TaskModel.prototype.send8(e.taskBean.taskId)
      switch (e.taskBean.goalDataList[0]) {
          case 335050005:
              net.DeliverModel.prototype.send1(10008)
              break;
          case 335060003:
              net.DeliverModel.prototype.send1(10019)
              break;
          case 335080003:
              net.DeliverModel.prototype.send1(10015)
              break;
          default:
              net.TaskModel.prototype.send4(e.taskBean.goalDataList[0].goalId, 0)
              break;
      }
      setTimeout(() => {
          gd.arpgInst.setAutoFight(1)
      }, 100);
  }
  //威名任务完成
  function wm_wc(e) {
      if (e.state == 3) {
          net.TaskModel.prototype.send2(e.taskId, 1)
      }
  }
  //装备存仓库处理
  function zbcc(){
      let zbArr = gd.bag.equipList
      for(let i = 0;i<zbArr.length;i++){
          net.BagModel.prototype.send25(zbArr[i].lid,-1,zbArr[i].count)
      }
  }
  var mybox = document.getElementsByTagName('body')[0]
  let div = document.createElement('div')
  div.innerHTML = "<div id='ksbtn' style='z-index:9999999;cursor: pointer;line-height: 50px;background-color:#fff;position: absolute;width: 50px;height: 50px;border-radius: 50px;text-align: center'>开始</div>" +
      "<div id='cd' style='z-index:9999999;display:block;left:60px;line-height: 50px;background-color:#fff;position: absolute;width: 400px;height: 200px;border-radius: 50px;text-align: center'>" +
      // "<div><input type='checkbox' name='vehicle' value='fl' checked='checked'/>一键福利" +
      // "<input type='checkbox' name='vehicle' value='jy' checked='checked' />一键交易" +
      // "<input type='checkbox' name='vehicle' value='rw' checked='checked' />一键任务" +
      // "<input type='checkbox' name='vehicle' value='hs' checked='checked' />一键回收</div>" +
      "<div><label><input name='Fruit' type='radio' value=''/>老板 </label> " +
      "<label><input name='Fruit' type='radio' value=''/>小号 </label></div>" +
      // "<div><button id='go' onclick='go()'>开始</button></div></div>"
      "<div><button id='go1'>除魔任务</button><button id='go2'>威名任务</button>" +
      "<div><button id='go5'>装备存仓</button><input name='u_name' value=''/>"+
      "<button id='go3'>福利一键完成</button><div><button id='go4'>交易</button></div></div>"
  mybox.appendChild(div)
  var ksbtn = document.getElementById('ksbtn')
  ksbtn.addEventListener('click', () => {
      let cdshow = document.getElementById('cd').style.display
      cdshow == 'none' ? document.getElementById('cd').style.display = 'block' : document.getElementById('cd').style.display = 'none'
  })
  let go1 = document.getElementById('go1')
  go1.addEventListener('click', event => {
      cm_fn()
  })
  let go2 = document.getElementById('go2')
  go2.addEventListener('click', event => {
      wm_fn()
  })
  let go3 = document.getElementById('go3')
  go3.addEventListener('click', event => {
      flyjzx_fn()
  })

  let go4 = document.getElementById('go4')
  go4.addEventListener('click', event => {
      let jyarr = document.getElementsByName('Fruit')
      let u_name = document.getElementsByName('u_name')
      jyname = u_name[0].value
      if (jyarr[0].checked) {
          jyusertype = 2
      } else {
          jyusertype = 1
      }
      ksjy_fn()
  })
  let go5 = document.getElementById('go5')
  go5.addEventListener('click', event => {
      zbcc()
  })
}

function gogo() {
  if (window.location.host == 'zlzz.tanwan.com') {
      info1()
  }
  if (window.location.host == 'www.tanwan.com') {
      info2()
  }
  if (window.location.host == 'login.zlzz.app.9125flying.com') {
      setTimeout(res=>{
          info3()
      },2000)
  }
}
gogo()