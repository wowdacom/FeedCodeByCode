<template>
  <div id="app">
    <svg width="100" height="20" viewBox="0 0 100 20">
      <circle cx="50" cy="10" r="10" fill="#DBF8A1"></circle>
    </svg>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { shape, timeline, render, play } from 'wilderness'

export default {
  name: 'app',
  data () {
    return {
      plainShapeObject: {
        type: 'circle',
        cx: 50,
        cy: 10,
        r: 10,
        fill: '#bbbbbb'
      },
      keyframe1: {
        type: 'circle',
        cx: 100,
        cy: 100,
        r: 100,
        fill: '#DBF8A1'
      },
      keyframe2: {
        type: 'rect',
        x: 150,
        y: 150,
        width: 100,
        height: 100,
        fill: '#1F9FFD',
        duration: 2000
      },
      playbackOptions: {
        alternate: true,
        iterations: Infinity
      }
    }
  },
  mounted () {
    const shape1Keyframe1 = {
      type: 'circle',
      cx: 5,
      cy: 5,
      r: 5,
      fill: '#DBF8A1'
    }

    const shape1Keyframe2 = {
      type: 'rect',
      x: 90,
      y: 0,
      width: 10,
      height: 10,
      fill: '#1F9FFD',
      duration: 1000
    }

    const shape2Keyframe1 = {
      type: 'circle',
      cx: 5,
      cy: 15,
      r: 5,
      fill: '#1F9FFD'
    }

    const shape2Keyframe2 = {
      type: 'rect',
      x: 90,
      y: 10,
      width: 10,
      height: 10,
      fill: '#DBF8A1',
      duration: 1000
    }

    const shape1 = shape(shape1Keyframe1, shape1Keyframe2)
    const shape2 = shape(shape2Keyframe1, shape2Keyframe2)

    const shape1WithOpts = [ shape1, {
      name: 'SHAPE_1'
    } ]

    const shape2WithOpts = [ shape2, {
      queue: { at: 'SHAPE_1', offset: 250 }
    } ]

    const animation = timeline(shape1WithOpts, shape2WithOpts, {
      iterations: Infinity,
      alternate: true
    })

    render(document.querySelector('svg'), animation)

    play(animation)
  },
  components: {
    HelloWorld
  },
  methods: {
    changeElementShape () {
      let vm = this
      let circle = shape(vm.keyframe1)
      console.log(vm.$refs.hello)
      render(vm.$refs.hello, circle)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  #hello2 {
    width: 50px;
    height: 50px;
    background-color: green;
  }
}
</style>
