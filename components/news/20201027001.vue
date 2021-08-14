<template>
    <div class="news_body_contents">
        <div class="top-video"><YouTubeIFrame vid="F-qrv79PRao"/></div>
        <div class="news_description">
            <p>本日緊急開催されたAKUKIN建設第１回株主総会において、下記のとおり報告及び決議されましたのでご報告申し上げます。</p>
            <h3>報告事項</h3>
            <ol>
                <li>AKUKIN建設社員の1名が他社に引き抜かれたこと</li>
                <li>他社との紛争は行わないこと</li>
            </ol>
            <h3>決議事項</h3>
            <ol>
                <li>交通事業としてAKUKIN鉄道に着手する件<br>
                    本件は原案通り承認可決されました</li>
                <li>AKUKIN建設本社を新設し所在地を変更する件<br>
                    本件は原案通り承認可決されました</li>
            </ol>

            <p>今株主総会の決議に伴い、下記の通り所在地が変更されました</p>
            <p>旧：<span style="text-decoration: line-through;">ホロ鯖ホロ村ガンダムハウス</span></p>
            <p>新：ホロ鯖ホロ村あくあマリンシオン号正面</p>
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <YouTubeIFrame vid="_UG28s-_VJk"/>
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
.news_description ol {
    padding-left: 2em;
    margin: 16px;
}
.news_description li {
    margin:8px 0;
}
</style>
