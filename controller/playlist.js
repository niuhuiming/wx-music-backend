const Router = require('koa-router')
const router = new Router()
const callCloudFn = require('../utils/callCloudFn')

router.get('/list', async (ctx, next) => {
  const query = ctx.request.query
  const res = await callCloudFn(ctx, 'music', {
    type: 'getPlayList',
    start: parseInt(query.start),
    count: parseInt(query.count),
  })
  let data = []
  if (res.data) {
    data = JSON.parse(res.data.resp_data)
  }
  ctx.body = {
    ...data,
    code: 20000,
  }
})

module.exports = router
