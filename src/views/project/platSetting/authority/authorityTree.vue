<template>
  <div id="tree-container">
    <el-tree
      ref="authTree"
      :check-strictly="checkStrictly"
      :data="routesData"
      :props="defaultProps"
      :node-key="nodeKey"
      show-checkbox
      class="authority-tree"
    />
  </div>
</template>

<script>
export default {
  name: 'AuthorityTree',
  props: {
    data: {
      type: Object,
      default: null
    },
    nodeKey: {
      type: String,
      default: 'AUTH_ID'
    },
    checkStrictly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultProps: {
        children: 'children',
        label: 'title'
      }
    }
  }
}
</script>

<style lang="scss">

</style>
