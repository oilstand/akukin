<template>
    <div :id="vid">

    </div>
</template>

<script>
export default {
  data() {
    return {
        ytPlayer: false
    }
  },
  methods: {
    videoLoad(vid) {
        const elmParent = document.getElementById(vid);

        this.ytPlayer = new YT.Player(
            vid, // 埋め込む場所の指定
            {
                width: elmParent.clientWidth, // プレーヤーの幅
                height: Math.floor(elmParent.clientWidth * 36 / 64), // プレーヤーの高さ
                videoId: vid, // YouTubeのID
                playerVars: {
                //  autoplay: 1,
                //  loop: 1,
                    playsinline: 1
                },
                events: {
                //    'onReady': this.onready,
                //    'onStateChange': this.changeStatus
                }
            }
        );/* */
    }
  },
  props: ['vid'],
  mounted() {
    if(YT && YT.Player) {
        this.videoLoad(this.vid);
    } else {
        window.addEventListener('load',() =>{
            this.videoLoad(this.vid);
        });
    }
  }
}
</script>
<style>

</style>
