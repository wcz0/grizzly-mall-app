// const isDevelopment = process.env.NODE_ENV === 'development'
const isProduction = process.env.NODE_ENV === 'production'
const isH5 = process.env.UNI_PLATFORM === 'h5'

export const title = import.meta.env.VITE_APP_TITLE || 'Grizzly Mall'

export const company = {
  name: 'grizzly-mall',
  wechat: 'wcz0',
  mail: 'wcz0@qq.com',
  address: '海南省海口',
}

// 项目基础路径
export const appBasePath = isProduction ? './' : './'
// 请求地址
// export const requestURL = 'http://crmeb/'
export const requestURL = 'http://crmeb/'
// export const requestURL = 'http://huishencloud.cn:9101/'

// 是否开启代理
export const useProxy = isH5
// 代理路径
export const proxyPath = '/api'
// 代理端口号
export const proxyPort = import.meta.env.VITE_PORT || 5400
// 是否开启加密
export const useEncrypt = false

// CDN 资源基础域名
export const assetURL = 'https://cdn.com'

export default {
  title,
  appBasePath,
  requestURL,
  useProxy,
  proxyPath,
  proxyPort,
  useEncrypt,
}
