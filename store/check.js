export const state = () => ({
    KovloCreated: 0,
    KovloUpdated: 0,
})
export const mutations  =  {
    SetKovloCreated(store){
        store.KovloCreated++;
    },
    SetKovloUpdated(store){
        store.KovloUpdated++;
    },
}
export const getters = {
    GetKovloUpdated: s => s.KovloUpdated,
    GetKovloCreated: s => s.KovloCreated,
}