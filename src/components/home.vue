<template>
    <div id="home">
        <itemcontainer father-component="home"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from './itemcontainer';
export default {
    name: 'home',
    components: {itemcontainer},
    data() {
        return {

        }
    },
    methods: {
      
    }
}
</script>

<style scoped lang="less">
#home{
    width: 100%;
    height: 100%;
}
</style>
