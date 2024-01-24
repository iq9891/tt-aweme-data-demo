<template>
  <zijie-pay-button
    :config="{
      izLine: 1,
      extra: {
        dyVersion: 2,
        organizeId: 32262,
        poiProductId: '7317967376144812042',
        productId: 10260,
        productType: 'dz_srv',
        shopId: 653368,
        skuId: 11438,
        uid: 207551,
      },
      goodsId: '7317967376144812042',
      goodsLabels: [{ type: 'EXPIRED_RETURNS' }, { type: 'REFUND_ANYTIME' }],
      goodsType: 1,
      marketingReady: true,
      marketingVersion: 2,
      maxLimits: 3,
      minLimits: 3,
      model: 2,
      phoneNumber: false,
      productId: 10260,
      skuId: 11438,
    }"
    :button-style="''"
  />
</template>
