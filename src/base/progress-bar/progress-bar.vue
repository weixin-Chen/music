<template>
  <div class="progress-bar" ref="progressBar" @click="progressClick">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn"
           @touchstart.prevent="progressTouchStart"
           @touchmove.prevent="progressTouchMove"
           @touchend="progressTouchEnd"
      >
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>
<script type='text/ecmascript-6'>
  import {prefixStyle} from 'common/js/dom'

  const progressBtnWidth = 16 //按钮的大小
  const transform = prefixStyle('transform')

  export default {
    props: {
      percent: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {}
    },
    created() {
      this.touch = {}
    },
    computed: {},
    methods: {
      progressTouchStart(e) {
        this.touch.inintiated = true //初始化
        this.touch.startX = e.touches[0].pageX //点击的x坐标
        this.touch.left = this.$refs.progress.clientWidth//当前偏移值
      },
      progressTouchMove(e) {
        if (!this.touch.inintiated) {
          return
        }
        const deltaX = e.touches[0].pageX - this.touch.startX//移动偏移值
        const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX))
        //大于0 小于总长,最终的偏移量
        this._offset(offsetWidth)

      },
      progressTouchEnd() {
        this.touch.inintiated = false
        this._triggerPercent()
      },
      _triggerPercent() {
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const percent = this.$refs.progress.clientWidth / barWidth
        this.$emit('percentChange', percent) // //派发比值事件
      },
      progressClick(e) {
        //获取偏移量
        const left = this.$refs.progressBar.getBoundingClientRect().left
        const offsetWidth = e.pageX - left
        this._offset(offsetWidth)
         //这里当我们点击 progressBtn 的时候，e.offsetX 获取不对
        //this._offset(e.offsetX)
        this._triggerPercent()
      },
      _offset(offsetWidth) { //进度偏移
        this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
      }
    },
    watch: {
      percent(newPercent) {
        if (newPercent >= 0&&!this.touch.inintiated) { //拖动,歌曲不自动移动
          const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
          const offsetWidth = newPercent * barWidth
          this._offset(offsetWidth)
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"

  .progress-bar
    height: 30px
    .bar-inner
      position: relative
      top: 13px
      height: 4px
      background: rgba(0, 0, 0, 0.3)
      .progress
        position: absolute
        height: 100%
        background: $color-theme
      .progress-btn-wrapper
        position: absolute
        left: -8px
        top: -13px
        width: 30px
        height: 30px
        .progress-btn
          position: relative
          top: 7px
          left: 7px
          box-sizing: border-box
          width: 16px
          height: 16px
          border: 3px solid $color-text
          border-radius: 50%
          background: $color-theme
</style>

