<template>
  <div class="maindiv" style="height:100%;display:flex">
    <div class="kongYaMain" style="flex:3">
      <runInfo ref="showRunInfo" />
      <infoScan ref="infoScan" />
      <div v-if="false" class="tools">
        <el-select v-model="selectvalue" placeholder="自定义">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-date-picker
          v-model="dateinput"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        />
        <el-input
          el-inputl="typeinput"
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
        />
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
        <el-button>运行回放</el-button>
      </div>
      <el-tabs v-model="activeName" class="tabs" @tab-click="handleClick">
        <el-tab-pane label="全系统" name="first">
          <div style="height:99%;text-align:center">
            <div v-if="false" id="intools">
              <el-button
                icon="el-icon-arrow-left"
                style="float:left;margin-left:20px;"
              >上一页</el-button>
              <i class="el-icon-camera-solid" />
              <span @click="showNeiBu">2D模式</span>
              <i class="el-icon-video-camera-solid" />
              <span @click="showVideos">视频监控</span>
              <i class="el-icon-platform-eleme" />
              <span @click="showParamPanel">{{ showParamName }}</span>
              <i class="el-icon-s-tools" />
              <el-select
                v-model="value2"
                class="selectbtn"
                multiple
                collapse-tags
                placeholder="参数设置"
              >
                <el-option
                  v-for="item in paramOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
              <i class="el-icon-s-custom" />
              <span @click="showDutyPanel">{{ showDutyName }}</span>
              <el-button style="float:right;margin-right:20px;">
                下一页
                <i class="el-icon-arrow-right el-icon--right" />
              </el-button>
            </div>
            <div v-if="showNeibu && mainTabName==='first'" style="height:100%;position:relative;border: 1px dashed #ccc;width: 99%;margin-top:1%">
              <system style="height:96%;width:100%;margin-top:40px;" />
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="false" class="rightparam" style="flex:1">
      <rightpanel :gngldata="gngldata" :maintabname="mainTabName" :params="kyjparam" />
    </div>
  </div>
</template>
<script>
import kongYsSys from '@/api/monitor/kongYaSys'
import kongyaji from '@/api/monitor/kongyaji'
import lxkongyaji from '@/api/monitor/lxkongyaji'
import kongyajizu from '@/api/monitor/kongyajizu'
import runInfo from '@/views/project/monitor/runInfo'
import infoScan from '@/views/project/monitor/infoScan'
import monitorapi from '@/api/monitor/monitor'
import system from '@/views/project/monitor/gongneng/dianli/system'
export default {
  name: 'MonitorView',
  components: {
    runInfo,
    infoScan,
    system
  },
  data() {
    return {
      kongYsSys: kongYsSys,
      kongyaji: kongyaji,
      kongyajizu: kongyajizu,
      activeName: 'first',
      gyActiveName: 'first',
      pjvalue: 3,
      pjtexts: ['极差', '略差', '一般', '良好', '优秀'],
      wh: '0 0 1600 850',
      mainTabName: 'first',
      showright: true,
      rightbtn: 'el-icon-caret-right',
      duties: [],
      zksys: [
        {
          NAME: '1栋车间',
          CODE: 'cj1'
        }
      ],
      dianli: 0,
      qihao: 0,
      danhao: 0,
      gngldata: {},
      options: [
        {
          value: 'year',
          label: '年'
        },
        {
          value: 'month',
          label: '月'
        },
        {
          value: 'day',
          label: '日'
        }
      ],
      zksubsys: [],
      paramOptions: [
        {
          value: 'temp',
          label: '温度'
        },
        {
          value: 'press',
          label: '压力'
        },
        {
          value: 'flow',
          label: '流量'
        },
        {
          value: 'power',
          label: '功率'
        }
      ],
      value2: [],
      dateinput: '',
      typeinput: '',
      selectvalue: 'one',
      zksubsyssel: '',
      selectSys: '',
      selectvalue3: 'kylx',
      showNeibu: true,
      showVideo: false,
      showParam: false,
      showDuty: false,
      showHis: false,
      showParamName: '显示数据',
      showDutyName: '值班显示',
      piedata: {
        data: [
          { value: 0, name: '空压机组' },
          { value: 0, name: '冷却塔组' },
          { value: 0, name: '冷却泵组' },
          { value: 0, name: '冷干机组' },
          { value: 0, name: '其他' }
        ]
      },
      sumdianhao: 0,
      tbky: 0,
      tblgj: 0,
      tblqb: 0,
      tblt: 0,
      tbqt: 0,
      paramss: [
        {
          name: '常压流量',
          value: '2000',
          unit: 'm³/h'
        },
        {
          name: '常压压力',
          value: '600',
          unit: 'kPa'
        },
        {
          name: '常压露点温度',
          value: '40.8',
          unit: '℃'
        },
        {
          name: '高压流量',
          value: '2000',
          unit: 'm³/h'
        },
        {
          name: '高压压力',
          value: '600',
          unit: 'kPa'
        },
        {
          name: '高压露点温度',
          value: '40.8',
          unit: '℃'
        }
      ],
      params: [
        {
          name: '马达绕组U温度',
          value: '40.8℃'
        },
        {
          name: '马达绕组V温度',
          value: '40.8℃'
        },
        {
          name: '马达绕组W温度',
          value: '40.8℃'
        },
        {
          name: '1级振动',
          value: '40.8℃'
        },
        {
          name: '0.00um',
          value: '40.8℃'
        },
        {
          name: '0.00um',
          value: '40.8℃'
        },
        {
          name: '轴承驱动温度',
          value: '40.8℃'
        },
        {
          name: '非轴承驱动温度',
          value: '40.8℃'
        },
        {
          name: '电机冷却温度',
          value: '40.8℃'
        },
        {
          name: '马达电流',
          value: '40.8℃'
        },
        {
          name: '导叶阀开度',
          value: '40.8℃'
        },
        {
          name: '排气阀关度',
          value: '40.8℃'
        },
        {
          name: '运行时间',
          value: '40.8℃'
        },
        {
          name: '加载时间',
          value: '40.8℃'
        },
        {
          name: '干燥机压力露点',
          value: '40.8℃'
        },
        {
          name: '干燥机A出口压力',
          value: '40.8℃'
        },
        {
          name: '干燥机B出口压力',
          value: '40.8℃'
        }
      ],
      params2: [
        {
          name: 'A罐开启',
          value: 'ON'
        },
        {
          name: 'B罐开启',
          value: 'OFF'
        },
        {
          name: '运行状态',
          value: 'STOP'
        },
        {
          name: '加/卸载运行状态',
          value: 'OFF'
        },
        {
          name: '综合报警',
          value: 'NORMAL'
        },
        {
          name: '综合故障停机',
          value: 'NORMAL'
        },
        {
          name: '维护保养提示',
          value: 'OFF'
        },
        {
          name: '紧急停机',
          value: 'OFF'
        },
        {
          name: '手动',
          value: 'REMOTE'
        }
      ]
    }
  },
  computed: {
    kyjparam() {
      return ['zk', '', this.selectvalue2, this.selectvalue3, this.mainTabName]
    }
  },
  watch: {
    selectvalue3(val) {
      if (val === 'one') {
        this.kongyaji = kongyaji
        this.wh = '0 0 1600 850'
      } else {
        this.kongyaji = lxkongyaji
        this.wh = '0 0 1266 773'
      }
    },
    selectSys(val) {
      this.getZhenKongSubSys(val)
    }
  },
  mounted() {
    this.getNengHaoGaiLan()
    this.getZhenKongSys()
    this.getDuty()
    this.getDianLi('kyjq', '')
    // this.getDianHaoZhanBi()
  },
  methods: {
    handleClick(tab, event) {
      this.mainTabName = tab.name
    },
    showVideos() {
      this.showNeibu = false
      this.showVideo = true
    },
    showHisVideo() {
      this.showHis = true
      this.showVideo = false
    },
    showNeiBu() {
      this.showNeibu = true
      this.showVideo = false
    },
    getNengHaoGaiLan() {
      monitorapi.getNHGaiLan().then(res => {
        if (res.state === 1) {
          this.gngldata = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getZhenKongSys() {
      monitorapi.getZhenKongSys().then(res => {
        if (res.state === 1) {
          this.zksys = res.data
          this.selectSys = this.zksys[0].CODE
        }
      }).catch(err => {
        console.log(err)
        this.zksys = this.zksys[0].CODE
      })
    },
    getZhenKongSubSys(regional) {
      monitorapi.getZhenKongSubSys({
        'regional': regional
      }).then(res => {
        if (res.state === 1) {
          this.zksubsys = res.data
          this.zksubsyssel = this.zksubsys[0].CODE
        }
      }).catch(err => {
        console.log(err)
        this.zksubsyssel = this.zksubsys[0].CODE
      })
    },
    getDuty() {
      monitorapi.getDuty().then(res => {
        if (res.state === 1) {
          this.duties = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getDianLi(kyjq, device) {
      monitorapi.getDianLi({
        'kyjq': kyjq,
        'device': device
      }).then(res => {
        if (res.state === 1) {
          this.dianli = res.data.toFixed(0)
          this.qihao = res.qhdata.toFixed(0)
          this.danhao = res.qhdata === 0 ? 0 : (res.data / res.qhdata).toFixed(2)
          this.pjvalue = res.pingfen
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getZQiHao() {
      monitorapi.getZQiHao().then(res => {
        if (res.state === 1) {
          this.qihao = res.data
        }
      }).catch(err => {
        console.log(err)
      })
    },
    getDianHaoZhanBi() {
      monitorapi.getDianHaoZhanBi().then(res => {
        if (res.state === 1) {
          this.piedata.data[0].value = res.kyvalue
          this.piedata.data[1].value = res.ltvalue
          this.piedata.data[2].value = res.lqbvalue
          this.piedata.data[3].value = res.lgjvalue
          this.piedata.data[4].value = res.qtvalue
          this.sumdianhao = res.sumvalue
          this.tbky = res.tbky.toFixed(0)
          this.tblgj = res.tblgj.toFixed(0)
          this.tblqb = res.tblqb.toFixed(0)
          this.tblt = res.tblt.toFixed(0)
          this.tbqt = res.tbqt.toFixed(0)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    showHideRight() {
      if (this.showright) {
        this.rightbtn = 'el-icon-caret-left'
      } else {
        this.rightbtn = 'el-icon-caret-right'
      }
      this.showright = !this.showright
    },
    showParamPanel() {
      if (this.showParam) {
        this.showParam = false
        this.showParamName = '显示数据'
      } else {
        this.showParam = true
        this.showParamName = '隐藏数据'
      }
    },
    showDutyPanel() {
      if (!this.showDuty) {
        this.showDuty = true
        this.showDutyName = '值班隐藏'
      } else {
        this.showDuty = false
        this.showDutyName = '值班显示'
      }
    },
    getParentId(target) {
      const self = this
      switch (target.id) {
        case '空压机':
          self.$refs.showRunInfo.dialogTableVisible = true
          break
        case '储气罐':
          self.$refs.showRunInfo.dialogTableVisible = true
          break
        case '干燥机':
          self.$refs.showRunInfo.dialogTableVisible = true
          break
        default:
          self.getParentId(target.parentElement)
          break
      }
    },
    showKongYa(e) {
      const self = this
      var str = /\d/
      if (
        str.test(e.target.id) ||
        e.target.tagName === 'tspan' ||
        e.target.tagName === 'text'
      ) {
        self.$refs.infoScan.dialogTableVisible = true
        return
      }
      this.getParentId(e.target)
    }
  }
}
</script>
<style lang="scss">
.kongYaMain {
  height: 99%;
  // margin-left:50px;
  width: 77%;
  .tabs {
    height: 99%;
    .el-tab-pane {
      height: 95%;
    }
    .el-tabs__content {
      height: 99%;
    }
  }
  .el-tabs__header{
    margin-bottom: 0px;
  }
  .el-icon-caret-right,.el-icon-caret-left{
    position: absolute;
    top: 50%;
    right:-21px;
    font-size:30px;
    color:#8D9BEA;
    &:hover{
      cursor: pointer;
    }
  }
  .el-select{
    margin: 10px 0px;
  }
  .el-tabs__item{
    width: 220px;
    padding: 0px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-right: 1px solid #F0F2F5;
  }
  .el-input {
    width: 200px;
  }
  .selectbtn {
    .el-input {
      width: 120px;
    }
    input::-webkit-input-placeholder {
      color: #000000;
    }
    input::-moz-input-placeholder {
      color: #000000;
    }
    input::-ms-input-placeholder {
      color: #000000;
    }
    .el-input--suffix .el-input__inner {
      width: 100px;
      padding-left: 0px;
    }
  }
}
.number{
  font-weight:bold;
  font-size:20px;
  font-family: Bebas;
}
.rblock{
  .el-tabs__nav{
    width: 100%;
  }
  .el-tabs__item{
    width: 33.4%;
    padding: 0px;
    &:hover{
      color: #2853FF;
    }
  }
  .el-tabs__item.is-active {
    color: #2853FF;
  }
  .el-tabs__active-bar{
    background: #2853FF;
  }
}
</style>
<style scoped lang="scss">
.tools {
  position: absolute;
  right: 9px;
  margin-top: 5px;
}
.selectbtn {
  width: 100px;
}
.rightparam {
  margin-top: 48px;
  border-top-width: 2px;
  background: white;
  border: 1px solid #e4e9f0;
  text-align: center;
  .righttop {
    height: 65%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
  }
  .rightzl {
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    padding: 1px;
  }
  .itemdiv {
      width: 33%;
      border: 1px dashed #bbc8f8;
      height: 70px;
      text-align: center;
      margin-left:-1px;
      margin-bottom: -1px;
    }
  .valuediv {
    height: 40px;
    line-height: 40px;
    font-size: 20px;
    font-weight: bold;
  }
  .namediv {
    height: 30px;
    line-height: 30px;
    font-size: 15px;
  }
  .rblock{
    padding: 20px 10px 20px 20px;
    border-bottom: 1px solid #E4E9F0;
    .rtitle{
      text-align: left;
      border-left: 3px solid #2853FF;
      color: #3E3E3E;
      padding-left: 5px;
      margin-bottom: 17px;
    }
    .rtitle2{
      text-align: left;
      border-left: 3px solid #2853FF;
      color: #3E3E3E;
      padding-left: 5px;
      margin-bottom: 10px;
      span{
        width: 80px;
        display: inline-block;
      }
      label{
        font-family: Babes;
      }
    }
    .xhdiv{
      width: 30%;
      border: 1px dashed;
      text-align: left;
      padding: 10px 0px 10px 5px;
    }
  }
  .rightbott {
    height: 30%;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    .itemdiv {
      width: 31%;
      margin-left: 1%;
      border: 1px solid #bbc8f8;
      height: 70px;
      text-align: center;
      .valuediv {
        height: 40px;
        line-height: 40px;
        background: #f6f8fe;
        font-size: 20px;
        font-weight: bold;
      }
      .namediv {
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
.leftduty {
  width: 10%;
  background-color: #f9fafb;
  height: 100%;
  position: absolute;
  top: 5%;
  .dutytitle {
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px dashed #e4e9f0;
    font-size: 18px;
    color: #879ec9;
  }
  .dutycontain {
    text-align: center;
    padding: 10px 0px;
    border-bottom: 1px solid #e4e9f0;
  }
}
#intools:after {
  display: block;
  content: "";
  clear: both;
  height: 0;
  overflow: hidden;
}
#intools {
  text-align: center;
  height: 40px;
  line-height: 40px;
  border: 1px solid #e4e9f0;
  background: #f1f6fd;
  i {
    margin-left: 20px;
  }
  &:hover {
    cursor: pointer;
  }
}
.content {
  height: 99%;
  display: flex;
  justify-content: space-around;
  align-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  div {
    width: 30%;
    height: 42%;
    border: 1px solid #41719c;
    border-radius: 5px;
    span {
      font-size: 18px;
      font-weight: bold;
    }
    .condiv {
      width: 96%;
      height: 80%;
      border: 0px solid #41719c;
      border-radius: 0px;
      margin-left: 2%;
      margin-top: 5px;
    }
    .conbott {
      width: 90%;
      height: 20%;
      border: 0px solid #41719c;
      border-radius: 0px;
      margin-left: 5%;
      margin-top: 5px;
      .leftdiv {
        float: left;
        width: 77%;
        height: 100%;
        border: 0px;
        span {
          display: block;
        }
      }
    }
  }
}
.videoPlay {
  flex: 8;
  height: 100%;
  background-image: url("../../../../../assets/monitor/videoImg.png");
}
.Video_1 {
  background-image: url("../../../../../assets/monitor/ved1.png");
}
.Video_2 {
  background-image: url("../../../../../assets/monitor/ved2.png");
}
.Video_3 {
  background-image: url("../../../../../assets/monitor/ved3.png");
}
.Video_4 {
  background-image: url("../../../../../assets/monitor/ved4.png");
}
.Video_5 {
  background-image: url("../../../../../assets/monitor/ved3.png");
}
.Video_6 {
  background-image: url("../../../../../assets/monitor/ved2.png");
}
</style>
