<template>
  <view>
    a<aweme-data aweme-id="50230647257" type="avatar" @error="onAwemeDataError" />a
  </view>
</template>

<script lang="ts" setup>
const onAwemeDataError = (e) => {
  console.log(e, 9999);
};
</script>
