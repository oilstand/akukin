<template>
    <div class="news_body_contents">
        <div class="news_description">
            <p>AKUKIN建設は、Youtubeチャンネル「<a href="https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg" target="_blank">Mio Channel 大神ミオ</a>」で行われた重役会議にて活動の再始動と、2021年6月27日に開催予定の「うさ建夏祭り」へ出店する事を発表いたしました。</p>
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <h4>1.【AKUKIN建設】社長・・カムバック！重役会議【マイクラ】(2021/06/22)</h4>
            <p>Mio Channel 大神ミオ</p>
            <YouTubeIFrame vid="kCHueXANn5k" />

            <h4>2.【#うさ建夏祭り】「何が始まるんです？」「企画説明だ」【獅白ぼたん/ホロライブ】(2021/06/07)</h4>
            <p>Botan Ch.獅白ぼたん</p>
            <YouTubeIFrame vid="q_IXZIRCbwI" />
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
