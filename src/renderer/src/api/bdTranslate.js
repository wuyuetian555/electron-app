import request from '../utils/requrest'
import md5 from '../utils/md5'
const appid = ''
const secretKey = ''
export default function ({ q, from = 'auto', to, salt }) {
  return request({
    method: 'get',
    url: 'https://fanyi-api.baidu.com/api/trans/vip/translate',
    params: {
      q: q,
      from,
      to,
      appid,
      salt,
      sign: md5(appid + q + salt + secretKey)
    }
  })
}
