/** @format */

import { createApp } from 'vue';

const App = createApp({
  onLaunch() {},
  getPhoneNumber({ params, success, fail }) {
    console.log(params, 'params111');
    const { iv, encryptedData } = params;
    // ...
    // 开发者服务端解密 encryptedData，得到手机号
    // ...
    const result = {
        phoneNumber: '18133842224',
    }
    // 回调前端模板
    success(result)
  },
});

export default App;
