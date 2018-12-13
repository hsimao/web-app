import axios from 'axios'
const ERR_OK = 0

// api 請求封裝，將重複錯誤處理，errno號碼判斷封裝
export function get(url) {
  return function(params) {
    return axios
      .get(url, { params })
      .then(res => {
        const { errno, data } = res.data
        if (errno === ERR_OK) {
          return data
        }
      })
      .catch(err => console.log(err))
  }
}
