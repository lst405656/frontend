<template>
    <input type="text" refs="inputRef"/>
</template>

<script>
export default {
    name: 'TextComponent',
    props: {
        msg: String
    }, 
    method:{
        /**
         * text 설정
         * @function
         * @instance
         * @memberof
         * @param {Object} info
         * @param {String} info.v 설정할 text
         * @example 
         */
        setValue: function(info){
            if(!info.v){
                return Error("Please enter a value");
            }
            this.$refs.inputRef.value = info.v;
        },
        /**
         * tex값 반환
         * @function
         * @instance
         * @memberof
         * @returns {String} text값
         * @example
         */
        getValue: function(){
            return this.$refs.inputRef.value;
        }
    }
}
</script>

<style scoped>

</style>
