import { get } from './helpers'

// api請求封裝, 達到代碼簡潔效果
const getSeller = get('/api/seller')
const getGoods = get('/api/goods')

export { getSeller, getGoods }
