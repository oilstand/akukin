<template>
    <div class="news_body_contents">
        <div class="top-video"><YouTubeIFrame vid="SECC3_aiZWc"/></div>
        <div class="news_description">
            <p>本日開催された緊急株主総会にて新企画「本社建築リレー」を発表いたしました。</p>
            <h3>報告事項</h3>
            <ol>
                <li>2021/01/25 に「本社建築リレー」を開催します</li>
            </ol>
            <h3>開催スケジュール</h3>
            <npImage class="sportsfes" :params="{'thumb':'/img/news_akukinrelay.png'}"/>
        </div>
        <div class="connect_videos">
            <h3>配信チャンネル</h3>
            <ul style="padding-left: 25px;">
                <li><a href="https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg">Aqua Ch. 湊あくあ</a></li>
                <li><a href="https://www.youtube.com/channel/UCvInZx9h3jC2JzsIzoOebWg">Flare Ch. 不知火フレア</a></li>
                <li><a href="https://www.youtube.com/channel/UCFKOVgVbGmX65RxO3EtH3iw">Lamy Ch. 雪花ラミィ</a></li>
                <li><a href="https://www.youtube.com/channel/UCD8HOxPs4Xvsm8H0ZxXGiBw">Mel Channel 夜空メルチャンネル</a></li>
                <li><a href="https://www.youtube.com/channel/UCAoy6rzhSf4ydcYjJw3WoVg">Airani Iofifteen Channel hololive-ID</a></li>
                <li><a href="https://www.youtube.com/channel/UC1suqwovbL1kzsoaZgFZLKg">Choco Ch. 癒月ちょこ</a></li>
                <li><a href="https://www.youtube.com/channel/UCZlDXzGoo7d44bwdNObFacg">Kanata Ch. 天音かなた</a></li>
                <li><a href="https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg">Marine Ch. 宝鐘マリン</a></li>
                <li><a href="https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA">Nene Ch.桃鈴ねね</a></li>
                <li><a href="https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg">Mio Channel 大神ミオ</a></li>
                <li><a href="https://www.youtube.com/channel/UCFTLzh12_nrtzqBPsTCqenA">アキロゼCh。Vtuber/ホロライブ所属</a></li>
            </ul>
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
  components: {YouTubeIFrame,   npImage},
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
    .sportsfes {
        max-width:100%;
        margin:20px auto;
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
