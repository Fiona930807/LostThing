new Vue({
    el:'.pageOne',
    data:{
        thingsList:[],
        currentIndex:0
    },
    filters:{

    },
    mounted:function () {
        this.$nextTick(function () {
            this.lostThingsView();
        });
    },
    methods:{
        lostThingsView:function () {
            var _this = this;
            this.$http.get("data/lostThingContent.json").then(function (value) {
                _this.thingsList = value.data.list;
            });
        }
    }
})