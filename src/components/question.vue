<template>
    <div id="question">
        <itemcontainer father-component="question"></itemcontainer>
    </div>
</template>

<script>
import itemcontainer from './itemcontainer';
export default {
    name: 'question',
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
#question{
    width: 100%;
    height: 100%;
}
</style>
