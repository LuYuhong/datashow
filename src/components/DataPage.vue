<template>
    <div>
        <p style="background-color: gray"> {{ this.content }} </p>
    </div>
</template>

<script>

export default {
    name: 'DataPage',
    data() {
        return {
            content: 'adsf',
        };
    },
    created() {
        this.$bus.$on('getContent', (content) => {
            this.content = content;
        })
    },
    beforeDestroy() {
        this.$bus.$off('getContent');
    },
}
</script>
