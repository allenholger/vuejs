const app = new Vue({
    el: '#app',
    data: {
        message: '购物车示例',
        list: [
            {
                name: 'iphone7',
                price: 6188,
                count: 1
            },{
                name: 'ipad pro',
                price: 5888,
                count: 1
            },{
                name: 'macbook pro',
                price: 21488,
                count: 1
            }
        ],
    },
    methods:{
        subtract: function(index){
            this.list[index].count--
        },
        add: function(index){
            this.list[index].count++
        },
        remove: function(index){
            this.list.splice(index, 1)
        },
        // totalPrice: function(){
        //     let prices = 0
        //     for(item in this.list){
        //         prices += item.price * item.count
        //     }
        //     return prices
        // }
    },
    computed: {
        totalPrice: function(){
            let total = 0
            for(let i = 0; i < this.list.length; i++){
                const item = this.list[i]
                total += item.price * item.count
            }
            return total
        }
    },
    filters: {
        formatPrice: function(price){
            return price.toFixed(2) + '元'
        }
    }
})