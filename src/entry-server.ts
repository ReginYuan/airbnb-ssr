/* 只运行在服务端的代码 */
import { createApp } from './main';
import { renderToString } from 'vue/server-renderer';

export async function render(url: string, manifest: any) {

  // 拿出store和router实例
  const { app, router, store } = createApp();
  await router.push(url);
  await router.isReady();

  // 获取服务端渲染的数据

  // 获取匹配的路由组件数组
  const matchedComponents = router.currentRoute.value.matched.flatMap((record: any) =>
    Object.values(record.components)
  )
  // console.log('matchedComponents', matchedComponents)
  // 对所有匹配的路由组件调⽤可能存在的`asyncData()`
  await Promise.all(
    matchedComponents.map((Component: any) => {
      if (Component.asyncData) {
        return Component.asyncData({
          store,
          route: router.currentRoute,
        });
      }
    }),
  )
  const ctx: any = {}
  const appHtml = await renderToString(app, ctx);
  const state = store.state
  if (import.meta.env.PROD) {
    const preloadLinks = renderLinks(ctx.modules, manifest)
    return { appHtml, state, preloadLinks };
  } else {
    return { appHtml, state };
  }
}

function renderLinks(modules: any, manifest: any) {
  let links = ""
  modules.forEach((id: any) => {
    const files = manifest[id]
    if (files) {
      files.forEach((file: any) => {
        links += renderPreloadLink(file)
      });
    }
  })
  console.log('links', links)
  return links
}

function renderPreloadLink(file: any) {
  console.log('file', file)
  if (file.endsWith('.js')) {
    return `<link rel="modulepreload" crossorigin href = "${file}" >`
  } else if (file.endsWith('.css')) {
    return `<link rel="stylesheet" href="${file}">`
  } else if (file.endsWith('.woff')) {
    return `<link rel="preload" href="${file}" as="font" type = "font/woff" crossorigin>`
  } else if (file.endsWith('.woff2')) {
    return `<link rel="preload" href="${file}" as="font" type="font/woff2" crossorigin>`
  } else if (file.endsWith('.gif')) {
    return `<linkrel="preload" href="${file}" as="image" tvpe="image/gif">`
  } else if (file.endsWith('.jpg') || file.endsWith('.jpeg')) {
    return `<link rel="preload" href="${file}" as="image" type="image/ipeg">`
  } else if (file.endsWith('.png')) {
    return `<link rel="preload" href="${file}" as="image" type="image/png">`
  } else {
    // TODO
    return ''
  }
}