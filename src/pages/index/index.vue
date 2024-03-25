<template>
  <div>
    <div style="width:20px;height:20px;background:red;">ddd</div>
    a<aweme-data aweme-id="50230647257" type="avatar" @error="onAwemeDataError" />a
  </div>
</template>

<script lang="ts" setup>
const onAwemeDataError = (e) => {
  console.log(e, 9999);
};
</script>
