export default {
    data() {
        return{
            value: null
        }
    },
    methods: {
        setValue(info){

            checkInputValue(info);

            this.value = info.v;
        },
        getValue(){
            return this.value;
        }
    }
}