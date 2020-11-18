<template>
    <div class="news_body_contents">
        <div class="news_description">
            <p>AKUKIN建設はさくらみこ、大神ミオが主催する『ホロライブ秋の大運動会2020』の競技で利用するエリトラ1基を寄付いたしました。</p>
        </div>
        <npImage class="sportsfes" :params="{'thumb':'/img/news_sportsfes.png'}"/>
        <div class="connect_channel">
            <h3>関連チャンネル</h3>
            <ul>
                <li><a target="_blank" href="https://www.youtube.com/channel/UC-hM6YJuNYVAmUWxeIr9FeA">Miko Ch. さくらみこ</a></li>
                <li><a target="_blank" href="https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg">Mio Channel 大神ミオ</a></li>
            </ul>
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <h4>1.ホロライブ秋の大運動会2020 企画詳細発表(みこちチャンネル)(2020/11/18)</h4>
            <YouTubeIFrame vid="IFHswo53eS0"/>
            <h4>2.エリトラ寄付(2020/11/13)</h4>
            <YouTubeIFrame vid="5vZqrFOPG8k"/>
        </div>
    </div>
</template>

<script>
import YouTubeIFrame from '~/components/YouTubeIFrame.vue'
import npImage from '~/components/news/npImage.vue'
export default {
  data() {
    return {
    }
  },
  components: {YouTubeIFrame,npImage},
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
    
}
@media screen and (min-width:960px) {
    .sportsfes {
        max-width:50%;
        margin:20px auto;
    }    
}

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
.connect_videos,
.connect_channel {
    max-width:800px;
    margin:16px auto;
    text-align:left;
}


.connect_channel {
    width:80%;
}
.connect_channel li {
    list-style:none;
}
.connect_channel ul {
    padding-left:16px;
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
