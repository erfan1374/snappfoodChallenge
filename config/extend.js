export default config => {
  config.apiServer = (config.ssl ? 'https://' : 'http://') + config.apiServer
  return config
}
