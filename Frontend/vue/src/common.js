const commonFunction = {
    install(Vue) {
        Vue.prototpye.$globalFunction = function(){
            console.log("전역 함수 호출");

            function checkInputValue(info){

            }
        }
    }
};

export default commonFunction;