<template>
    <a
        v-bind:href="link"
        v-bind:target="target"
    >
        {{ value }}
    </a>
</template>

<script>
export default {
    name: 'AnchorComponent',
    data(){
        return{
            value: "",
            link: "",
            target: ""
        }
    },
    method:{
        /**
         * anchor 라벨 값 설정
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
            this.value = info.v;
        },

        /**
         * anchor 라벨값 반환
         * @function
         * @instance
         * @memberof
         * @returns {String} text값
         * @example
         */
        getValue: function(){
            return this.value;
        },

        /**
         * href 설정
         * @function
         * @instance
         * @memberof
         * @param {Object} info 
         * @param {String} info.v
         * @example
         */
        setLink: function(info){
            
            //값이 없으면 종료
            if(!info.v){
                return Error("Please enter a value");
            }
            this.link = info.v;
        },

        setTarget: function(info){

            //값이 없으면 종료
            if(!info.v){
                return Error("Please enter a value");
            }
            this.target = info.v;
        }
    }
}
</script>

<style scoped>

</style>
