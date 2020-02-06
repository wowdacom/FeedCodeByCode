<template>
  <div id="app">
    <ul id="flag"></ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  mounted () {
    (function () {

      function splitImg (sliceCount, amplitude, period, duration) {
        var styleEle = document.createElement('style')
        // styleEle.innerHTML = 'body{background: red}'
        var styleHtmlAry = []
        var sliceCountPerPeriod = Math.floor(sliceCount / period)
        var sliceWidth = imgWidth / sliceCount
        var formula = sliceCountPerPeriod + 'n+'
        var interval = duration * period / sliceCount

        // 添加动画延时
        for (var i = 0; i < sliceCount; i++) {
          if (i < sliceCountPerPeriod) {
            styleHtmlAry.push('#flag > li:nth-child(' + formula + i + ') { ')
            styleHtmlAry.push('animation-delay: -' + (interval * (sliceCountPerPeriod - i)) + 's;')
            styleHtmlAry.push('}')
          }
          styleHtmlAry.push('#flag > li:nth-child(' + i + ') { background-position: -' + (i * sliceWidth) + 'px 0; }') // 设置切片背景
        }

        // 添加关键帧动画
        styleHtmlAry.push('@keyframes flag {')
        styleHtmlAry.push('0% { transform: translate3d(0, ' + amplitude + 'px, 0); }')
        styleHtmlAry.push('50% { transform: translate3d(0, -' + amplitude + 'px, 0); }')
        styleHtmlAry.push('100% { transform: translate3d(0, ' + amplitude + 'px, 0); }')
        styleHtmlAry.push('}')

        // 切片样式
        styleHtmlAry.push('#flag > li {')
        styleHtmlAry.push('animation-duration: ' + duration + 's;') // 添加周期时长
        styleHtmlAry.push('width: ' + (imgWidth / sliceCount) + 'px;') // 设置切片宽度
        styleHtmlAry.push('}')

        styleEle.innerHTML = styleHtmlAry.join('')

        // 创建切片元素
        flagEle.innerHTML = new Array(sliceCount + 1).join('<li></li>')

        document.documentElement.appendChild(styleEle)
      }

      var flagEle = document.getElementById('flag')
      var image = new Image()
      image.src = '/img/flag.png'

      var IMG_MAX_WIDTH = 600
      var IMG_MAX_HEIGHT = 600
      var imgHeight
      var imgWidth
      image.onload = function () {
          imgWidth = image.width
          imgHeight = image.height
          var ratio = image.width / image.height
          if (imgWidth > IMG_MAX_WIDTH) {
            imgWidth = IMG_MAX_WIDTH
            imgHeight = imgWidth / ratio
          }
          if (imgHeight > IMG_MAX_HEIGHT) {
            imgHeight = IMG_MAX_HEIGHT
            imgWidth = imgHeight * ratio
          }
          
          flagEle.style.width = imgWidth + 'px'
          flagEle.style.height = imgHeight + 'px'
          flagEle.style.marginLeft = -imgWidth / 2 + 'px'
          flagEle.style.marginTop = -imgHeight / 2 + 'px'
          
          splitImg(100, 20, 2, 2)
      }
    })();
  }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

html, body {
    height: 100%;
    width: 100%;
    background-color: lightgrey;
}

body {
    text-align: center;
    position: relative;
}

#app {
  
    ul, li {
        list-style: none;
    }

    #flag {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%,-50%,0);
        animation: flag-reverse ease-in-out infinite;
        li {
          height: 100%;
          float: left;
          background-image: url("/img/flag.png");
          background-size: auto 100%;
          animation: flag ease-in-out infinite;
        }
    }
}
</style>
