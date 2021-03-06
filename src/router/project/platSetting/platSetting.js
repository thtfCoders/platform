import Layout from '@/layout'

const platSettingRouters = [{
  path: '/platSetting',
  redirect: '/platSetting/newUser', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'platSetting',
  meta: {
    title: '用户设置',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  children: [
    {
      path: 'newUser',
      component: () => import('@/views/project/platSetting/newUser'),
      name: 'newUser',
      meta: {
        title: '用户管理',
        roles: ['admin', 'editor'],
        icon: 'userSetting',
        affix: true
      }
    },
    {
      path: 'platformRole',
      component: () => import('@/views/project/platSetting/platformRole'),
      name: 'platformRole',
      meta: {
        title: '角色管理',
        roles: ['admin', 'editor'],
        icon: 'roleSetting'
      }
    },
    {
      path: 'platformAthority',
      component: () => import('@/views/project/platSetting/platformAthority'),
      name: 'platformAthority',
      meta: {
        title: '权限管理',
        roles: ['admin', 'editor'],
        icon: 'authoritySetting'
      }
    },
    {
      path: 'platformLog',
      component: () => import('@/views/project/platSetting/platformLog'),
      name: 'platformLog',
      meta: {
        title: '日志管理',
        roles: ['admin', 'editor'],
        icon: 'logSetting'
      }
    }
  ]
}, {
  path: '/platSettingOther',
  redirect: '/platSettingChejian/platSettingOther', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'platSettingOther',
  meta: {
    title: '值班设置',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  alwaysShow: true,
  children: [
    {
      path: 'platformDuty',
      component: () => import('@/views/project/platSetting/platformDuty'),
      name: 'platformDuty',
      meta: {
        title: '值班设置',
        icon: 'duty'
      }
    }
  ]
}, {
  path: '/platSettingEnergy',
  redirect: '/platSettingChejian/platSettingEnergy', // 重定向地址，在面包屑中点击会重定向去的地址
  component: Layout,
  name: 'platSettingEnergy',
  meta: {
    title: '标准录入',
    icon: 'example',
    roles: ['admin', 'editor']
  },
  alwaysShow: true,
  children: [
    {
      path: 'energyStrd',
      component: () => import('@/views/project/platSetting/energyLuru/energyStrd'),
      name: 'platformDuty',
      meta: {
        title: '能耗标准',
        icon: 'energyStrd'
      }
    }, {
      path: 'priceStrd',
      component: () => import('@/views/project/platSetting/energyLuru/priceStrd'),
      name: 'platformDuty',
      meta: {
        title: '价格标准',
        icon: 'price'
      }
    }
  ]
}]

export default platSettingRouters
