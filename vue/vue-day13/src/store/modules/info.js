const info={
    state:{
        tips:12,
        news:15
    },
    mutations:{
        add(state){
            state.tips++
        },
        reduce(state){
            state.tips--
        }
    },
    actions:{
        myAdd(ctx){
            ctx.commit("add")
        },
        myReduce(ctx){
            ctx.commit("reduce")
        }
    },
    getters:{}
}
export default info