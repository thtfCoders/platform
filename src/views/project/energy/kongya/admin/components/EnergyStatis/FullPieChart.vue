<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './../mixins/resize'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },
    setOptions({ data, colors } = {}) {
      this.chart.setOption({
        color: colors,
        title: {
          show: false
        },
        tooltip: {
          trigger: 'item',
          padding: [5, 10]
        },
        legend: {
          show: false
        },
        series: [{
          name: '',
          type: 'pie',
          data: data,
          hoverAnimation: false,
          center: ['50%', '50%'],
          radius: ['0', '70%'],
          label: {
            show: true,
            formatter: '{b} {d}%'
          }
        }]
      })
    }
  }
}
</script>
