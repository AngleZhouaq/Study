const app = new Vue({
  el: "#app",
  data: {
    books: [
      { id: 1, name: "《算法导论1》", date: "2006-9", price: 85.2, count: 1 },
      { id: 2, name: "《算法导论2》", date: "2006-9", price: 85.2, count: 3 },
      { id: 3, name: "《算法导论3》", date: "2006-9", price: 85.2, count: 7 },
    ],
  },
  methods: {
    // getfinalprice(price) {
    //   return "￥" + price.toFixed(2);
    // },
    removeHandle(index){
        this.books.splice(index,1);
    },
    decrement(index){
        this.books[index].count--;
        if(this.books[index].count===0){
            this.removeHandle(index);
        }
    },
    increment(index){
        this.books[index].count++;
    }
  },
  computed:{
    totalprice(){
        let totalprice=0;
        // 1.普通for循环 
        // for(let i=0;i<this.books.length;i++){
        //     totalprice+=this.books[i].price*this.books[i].count;
        // }

        // 2.for循环
        // for(let i in this.books){
        //     totalprice+=this.books[i].price*this.books[i].count;
        // }

        // 3.for循环,直接拿到books
        for(let item of this.books){
            totalprice+=item.price*item.count;
        }


        return totalprice;

        // return this.books.reduce(function(prevalue,book){
        //     return prevalue+book.price*book.count
        // },0)
    }
  },
  filters:{
      showprice(price){
        return "￥" + price.toFixed(2);
      }
    
  }
});

