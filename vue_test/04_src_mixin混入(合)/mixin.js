export const mixin = {
  methods: {
    showName() {
      alert(this.name)
    }
  },
  mounted(){
    console.log("结束了")
  }
}
export const mixin1 = {
  data() {
    return {
      x:1,
      y:2
    }
  },
}