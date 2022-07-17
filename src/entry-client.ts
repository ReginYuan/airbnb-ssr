import { createApp } from "./main";

const { app, router, store } = createApp();
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}
//路由加载完之后,挂载app
router.isReady().then(async () => {
  router.beforeResolve((to, from, next) => {
    let toComponents = router.resolve(to).matched.flatMap((record: any) =>
      Object.values(record.components)
    )
    let fromComponents = router.resolve(from).matched.flatMap((record: any) =>
      Object.values(record.components)
    )
    let actived = toComponents.filter((c, i) => {
      return fromComponents[i] !== c
    })

    if (!actived.length) {
      return next()
    }
    Promise.all(actived.map((Component: any) => {
      if (Component.asyncData) {
        return Component.asyncData({
          store,
          route: router.currentRoute,
        });
      }
    })).then(() => {
      next()
    })
  })
  app.mount('#app');
});
