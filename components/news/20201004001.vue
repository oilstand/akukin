<template>
    <div class="news_body_contents">
        <div class="news_description">
            <p>AKUKIN建設は10月4日、ホロ村のはずれにて「あくあマリンシオン号」の進水式を行いました。</p>
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <h4>1.発案 船長チャンネル(2020/09/13)</h4>
            <YouTubeIFrame vid="eWO5qnLxhzQ"/>
            <h4>2.候補地探し(2020/09/15)</h4>
            <YouTubeIFrame vid="Zb2MlIS8lc8"/>
            <h4>3.建材確保 船長チャンネル(2020/09/16)</h4>
            <YouTubeIFrame vid="hDTUfG30hFo"/>
            <h4>4.整地 (2020/09/16)</h4>
            <YouTubeIFrame vid="ofh2NXKaDqs"/>
            <h4>5.整地&建設開始 (2020/09/22)</h4>
            <YouTubeIFrame vid="YGQ1iZsvQVE"/>
            <YouTubeIFrame vid="yPrUNmy0UeI"/>
            <h4>6.建設 (2020/09/25)</h4>
            <YouTubeIFrame vid="_bfuue-luq0"/>
            <h4>7.建設 (2020/09/28)</h4>
            <YouTubeIFrame vid="N6H1udXvuRE"/>
            <h4>8.建設 (2020/09/29)</h4>
            <YouTubeIFrame vid="BHji7bVadEw"/>
            <YouTubeIFrame vid="TxY6zQbUYs8"/>
            <h4>9.水入れ (2020/09/30)</h4>
            <YouTubeIFrame vid="tgjyGcJVkvU"/>
            <h4>10.建設 船長チャンネルコラボ (2020/10/01)</h4>
            <YouTubeIFrame vid="uMUVcEH6HOY"/>
            <h4>11.港整備 船長チャンネル(2020/10/02)</h4>
            <YouTubeIFrame vid="h4ftpbC4hvM"/>
            <h4>12.トラップ (2020/10/02)</h4>
            <YouTubeIFrame vid="qelypSy-9wQ"/>
            <h4>13.完成&進水式 (2020/10/04)</h4>
            <YouTubeIFrame vid="mqwBMDIsRJQ"/>
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
<style>
@media screen and (max-width:959px) {
    .news_description {
        padding: 16px 8px;
    }
}
.top-video,
.news_description,
.connect_videos {
    max-width:800px;
    margin:16px auto;
    text-align:left;
}
.connect_videos {
    width:80%;
}
.news_body_contents h3 {
    margin: 16px 8px 8px 16px;
}
.news_body_contents ol {
    padding-left: 2em;
    margin: 16px;
}
.news_body_contents li {
    margin:8px 0;
}
</style>
