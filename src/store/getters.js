const getters = {
  sidebar: state => state.app.sidebar,
  energySidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  realName: state => state.user.realName,
  userName: state => state.user.userName,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  energy_routes: state => state.permission.energyRoutes,
  monitor_routes: state => state.permission.monitorRoutes,
  reportTable_routes: state => state.permission.reportTableRoutes,
  platSetting_routes: state => state.permission.platformSettingRoutes,
  smartDiagnose_routes: state => state.permission.smartDiagnoseRoutes,
  errorLogs: state => state.errorLog.logs,
  currentView: state => state.settings.currentView
}
export default getters
