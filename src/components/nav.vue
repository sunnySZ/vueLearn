<template>
	<div>
<mt-tabbar fixed>
  <mt-tab-item>
    <img slot="icon" src="../assets/logo.png">
  <router-link to="/list">列表</router-link>
  </mt-tab-item>
  <mt-tab-item>
    <img slot="icon" src="../assets/logo.png">
    <router-link to="/infinite">loading</router-link>
  </mt-tab-item>
  <mt-tab-item id="发现">
    <img slot="icon" src="../assets/logo.png">
    发现
  </mt-tab-item>
  <mt-tab-item id="我的">
    <img slot="icon" src="../assets/logo.png">
    我的
  </mt-tab-item>
</mt-tabbar>
	</div>
</template>