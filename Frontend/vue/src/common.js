const commonFunction = {
    install(Vue) {
        Vue.prototpye.$globalFunction = function(){
            console.log("전역 함수 호출");

            function checkInputValue(info){
                if(info == null || info == undefined){
                    throw Error("please check parameter");
                }
            }
        }
    }
};

export default commonFunction;