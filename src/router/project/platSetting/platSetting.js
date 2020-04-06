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
        icon: 'user',
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
        icon: 'role'
      }
    },
    {
      path: 'platformAthority',
      component: () => import('@/views/project/platSetting/platformAthority'),
      name: 'platformAthority',
      meta: {
        title: '权限管理',
        roles: ['admin', 'editor'],
        icon: 'authority'
      }
    },
    {
      path: 'platformLog',
      component: () => import('@/views/project/platSetting/platformLog'),
      name: 'platformAthority',
      meta: {
        title: '日志管理',
        roles: ['admin', 'editor'],
        icon: 'log'
      }
    }
  ]
}]

export default platSettingRouters