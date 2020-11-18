<template>
    <div class="news_body_contents">
        <div class="news_description">
            <p>AKUKIN建設は10月31日、ハロウィンにトロッコ乗車型アトラクション「Horror Coaster」をあくあマリンシオン号近くにオープンしました。</p>
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <h4>1.建設(2020/10/24)</h4>
            <YouTubeIFrame vid="r-kUBHFW5YM"/>
            <h4>2.建設(2020/10/25)</h4>
            <YouTubeIFrame vid="7vdop_hHaLE"/>
            <h4>3.お披露目(2020/10/31)</h4>
            <YouTubeIFrame vid="HnUsWAok_Lk"/>
        </div>
    </div>
</template>

<script>
import YouTubeIFrame from '~/components/YouTubeIFrame.vue'
export default {
  data() {
    return {
    }
  },
  components: {YouTubeIFrame},
  methods: {
  },
  props: [],
  computed: {

  },
  mounted() {
  }
}
</script>
<style scoped>
@media screen and (max-width:959px) {
    .news_description {
        padding: 16px 8px;
    }
}
@media screen and (min-width:960px) {
    .connect_videos {
        width:80%;
    }
}
.top-video,
.news_description,
.connect_videos {
    max-width:800px;
    margin:16px auto;
    text-align:left;
}
.news_body_contents h3 {
    margin: 16px 8px 8px 16px;
}

</style>
