<template>
    <input type="text"
        refs="inputRef"
        v-bind:readonly="isReadOnly"
    />
</template>

<script>
export default {
    name: 'TextComponent',
    data() {
        return {
        isReadOnly: true
    }
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

            //값이 없으면 종료
            if(!info.v){
                return Error("Please enter a value");
            }
            this.$refs.inputRef.value = info.v;
        },

        /**
         * text 값 반환
         * @function
         * @instance
         * @memberof
         * @returns {String} text값
         * @example
         */
        getValue: function(){
            return this.$refs.inputRef.value;
        },

        /**
         * readOnly 설정
         * @function
         * @instance
         * @memberof
         * @param {Object} info 
         * @param {Boolean} info.v
         * @example
         */
        setReadOnly: function(info){

            //값이 없으면 종료
            if(!info.v){
                return Error("Please enter a value");
            }
            this.isReadOnly = info.v;
        }
    }
}
</script>

<style scoped>

</style>
