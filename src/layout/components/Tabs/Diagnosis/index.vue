<!--  -->
<template>
  <div class="smartDiagnose-contaiter">
    <sidebar class="sidebar-container" />
    <app-main />
  </div>
</template>

<script>
import { AppMain } from '../../../components'
import Sidebar from '@/layout/components/Tabs/Diagnosis/settingSildebar.vue'
import { mapGetters } from 'vuex'

export default {
  components: { AppMain, Sidebar },
  data() {
    return {}
  },

  computed: {
    ...mapGetters(['sidebar', 'settingSildebar'])
  },

  beforeCreate() {
    this.$router.push({ path: '/smartDiagnose' })
  },
  mounted() {},
  destroyed() {
  },

  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    }
  }
}
</script>
<style lang='scss' scoped>
.report-contaiter {
  widows: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
</style>
