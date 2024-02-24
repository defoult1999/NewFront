<template>
    <div>
        <div class="pagination-row">
                <button class="pagination-button staticBtnDown" @click="pageDown()">Назад</button>
            <span v-for="(item, index) in pageCount" :key="index">
                <button class="pagination-button" :class="{active: this.$store.state.page_num === index + 1}" @click="toPage(index)">{{ index + 1 }}</button>
            </span>
                <button class="pagination-button staticBtnUp" @click="pageUp()">Вперёд</button>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
    current_page: '',
  }),
  props: ['applics', 'pageCount'],
  methods: {
    toPage(pageNumber) {
        pageNumber += 1
        localStorage.setItem('page_number' , pageNumber)
        this.$emit('page-changed', pageNumber)
        console.log(pageNumber)
    },
    pageUp() {
        if(this.$store.state.page_num < this.pageCount.length){
            this.$store.state.page_num += 1
            localStorage.setItem('page_number' , this.$store.state.page_num)
            this.$emit('page-changed', this.$store.state.page_num)
            console.log(this.$store.state.page_num)
        }
    },
    pageDown() {
        if(this.$store.state.page_num > 1){
            this.$store.state.page_num -= 1
            localStorage.setItem('page_number' , this.$store.state.page_num)
            this.$emit('page-changed', this.$store.state.page_num)
            console.log(this.$store.state.page_num)
        }
    }
  },
  async created() {
    if(this.applics === false) {
        this.toPage(1) 
    }else {
        this.toPage(this.$store.state.page_num - 1)
    }
  },
}
</script>

<style scoped>
.pagination-button {
    padding-right: 8px;
    padding-left: 8px;
    margin: 1px;
    /* border-radius: 3px; */
    font-size: 1em;
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    background-color: none;
}
.pagination-row {
    margin-top: 5px;
    padding: 5px 0;
    background-color: #fff;
    border-radius: 10px;
}
.active {
    background-color: #EDF3FF;
    color: #1C24A2;
    border-radius: 5px;
}
.staticBtnDown {
    background-color: #EDF3FF;
    color: #1C24A2;
    border-radius: 10px 0 0 10px;
}
.staticBtnUp {
    background-color: #EDF3FF;
    color: #1C24A2;
    border-radius: 0px 10px 10px 0px;
}
</style>