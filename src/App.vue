<template>
    <div v-if="loading" id="frameword-loading">
        <div id="index-loading" class="index-loading">
            <div class="spin">
                <div class="inner"></div>
            </div>
            加载中...
        </div>
    </div>
    <el-config-provider v-else namespace="ep">
        <BaseHeader />
        <div class="flex main-container">
            <BaseSide />
            <div w="full" py="4">
                <Logos my="4" />
                <HelloWorld msg="Hello Vue 3 + Element Plus + Vite" />
            </div>
        </div>
    </el-config-provider>
</template>

<script lang="ts" setup>
const loading = ref(true);

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
    }, 1000);
});
</script>

<style>
#app {
    text-align: center;
    color: var(--ep-text-color-primary);
}

.main-container {
    height: calc(100vh - 61px);
}

.index-loading {
    z-index: 2147483647;
    background-color: #fff;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.spin {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 30px;
}
.inner {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid transparent;
    border-color: #409eff transparent;
    animation: spin 1.2s linear infinite;
}
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
