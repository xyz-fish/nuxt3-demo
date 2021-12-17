import request from 'request-promise'
import superagent from 'superagent'

export default async () => {
  const r = await request.post(
    'https://api.juejin.cn/recommend_api/v1/article/recommend_all_feed',
    { json: true, body: { limit: 5 } }
  )
  console.log(r)
  return r.data
}
