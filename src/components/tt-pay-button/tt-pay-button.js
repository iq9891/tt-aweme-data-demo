Component({
  properties: {
    config: {
      type: Object,
      value: {},
    },
    buttonStyle: {
      type: String,
      value: '',
    },
  },
  data: {},
  methods: {
    onError(e) {
      console.log(e, 'erro');
      const { errNo, errMsg } = e.detail;
      if (errNo === 21514) {
        tt.showToast({
          title: '失败', // 内容
          icon: 'none', // 图标
        });
      } else if (errNo === 21513) {
        tt.showToast({
          title: '获取中', // 内容
          icon: 'none', // 图标
        });
      }
    },

    onGoodsInfo() {
      return new Promise((resolve) => {
        const {
          goodsLabels,
          minLimits,
          maxLimits,
          phoneNumber,
          marketingVersion,
          reservationType,
          reservationCount,
          extra,
        } = this.properties.config;
        console.log('config:', this.properties.config);
        const info = {
          goodsLabels,
          minLimits,
          maxLimits,
          validation: {
            phoneNumber: {
              required: phoneNumber, // 手机号是否必填, 为 true则必填，false选填，默认选填
            },
          },
          extra: extra || {},
          marketingVersion,
        };
        console.log('goodsInfo:', info);
        resolve(info);
      });
    },

    onPlaceorder(e) {
      return new Promise(async (resolve, reject) => {
        resolve(true);
      });
    },

    onPay(event) {
      const { status, orderId, outOrderNo, result } = event.detail;
      if (status === 'success') {
        const { code } = result;
        this.triggerEvent('on-success', { outOrderNo });
        console.log(event.detail, 'event.detail');
        // if (code === 0) {
        //   // 支付成功
        // } else {
        //   // 支付失败（超时、取消、关闭）
        // }
      } else {
        const { errMsg } = result;
        this.triggerEvent('on-error', errMsg);
      }
    },
  },
});
