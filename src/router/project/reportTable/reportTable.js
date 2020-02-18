import Layout from '@/layout'

const reportTableRouter = [{
  path: '/reportTable',
  redirect: '/reportTable/kongya', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'reportTable',
  meta: {
    title: '功能系统',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'kongya',
      component: () => import('@/views/reportTable/kongya/index'),
      name: 'reportTableKongya',
      meta: {
        title: '空压系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    },
    {
      path: 'kongya',
      component: () => import('@/views/reportTable/kongya/index'),
      name: 'reportTableKongya',
      meta: {
        title: '冷水系统',
        roles: ['admin'],
        icon: 'documentation',
        affix: true
      }
    },
    {
      path: 'qingdan',
      component: () => import('@/views/icons/index'),
      name: 'reportTableQingdan',
      meta: {
        title: '氮气系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'zhenkong',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableZhenkong',
      meta: {
        title: '氢气系统',
        roles: ['admin'],
        icon: 'documentation'
      }
    }, {
      path: 'dianli',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableDianli',
      meta: {
        title: '电力系统',
        icon: 'documentation'
      }
    }, {
      path: 'lengshui',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableLengshui',
      meta: {
        title: '供电系统',
        icon: 'documentation'
      }
    }, {
      path: 'reshui',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableReshui',
      meta: {
        title: '热水系统',
        icon: 'documentation'
      }
    }
  ]
}, {
  path: '/reportTableChejian',
  redirect: '/reportTableChejian/first', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'reportTableSystem',
  meta: {
    title: '用能车间',
    icon: 'example'
  },
  children: [
    {
      path: 'first',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableFirst',
      meta: {
        title: '一号车间',
        icon: 'documentation'
      }
    }, {
      path: 'second',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableSecond',
      meta: {
        title: '二号车间',
        icon: 'documentation'
      }
    }, {
      path: 'third',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableThird',
      meta: {
        title: '三号车间',
        icon: 'documentation'
      }
    }, {
      path: 'fouth',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableFouth',
      meta: {
        title: '四号车间',
        icon: 'documentation'
      }
    }, {
      path: 'jiaoshui',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableJiaoshui',
      meta: {
        title: '胶水厂区',
        icon: 'documentation'
      }
    }, {
      path: 'dongli',
      component: () => import('@/views/reportTable/qingdan'),
      name: 'reportTableDongli',
      meta: {
        title: '动力车间',
        icon: 'documentation'
      }
    }
  ]
}]

export default reportTableRouter