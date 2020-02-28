new Vue({
    el: "#connect",
    data:{
        principal: '',
        rate: '',
        time: '',
        number: '',
        years: ''
    },
    computed: {
        message: function () {
            let cal = (this.principal * this.rate * this.time) / 100;
            return cal.toFixed(2)
    },
    resulted: function () {
        let ans = this.principal * (1 + ((this.rate/100) / this.number)) ** (this.years*this.number);
        return ans.toFixed(2)
    }
}
})