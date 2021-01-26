<template>
    <div class="news_body_contents">
        <div class="top-video">
            <npImage class="thumbnail20210125" :params="{'thumb':'/img/news_honsya2021.jpg'}"/>
        </div>
        <div class="news_description">
            <p>AKUKIN建設は「本社建築リレー」で建築を進めていた新本社が竣工したことをお知らせいたします。</p>
            <p>竣工に伴い本社をアクアマリン号正面から旧社屋-地下帝国間AKUKIN建設新社屋へ移転しました。</p>
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <h4>18:00- Aqua Ch. 湊あくあ</h4>
            <YouTubeIFrame vid="1E8uHA5r3uE"/>
            <h4>19:00- Flare Ch. 不知火フレア</h4>
            <YouTubeIFrame vid="3QTrXUDp2-8"/>
            <h4>19:30- Lamy Ch. 雪花ラミィ</h4>
            <YouTubeIFrame vid="lQuJb6JIZr0"/>
            <h4>20:00- Mel Channel 夜空メルチャンネル</h4>
            <YouTubeIFrame vid="i3iXG91P3Dg"/>
            <h4>20:30- Airani Iofifteen Channel hololive-ID</h4>
            <YouTubeIFrame vid="rheFvXGs5ac"/>
            <h4>21:00- Choco Ch. 癒月ちょこ</h4>
            <YouTubeIFrame vid="_Wel2TQRGy8"/>
            <h4>21:30- Kanata Ch. 天音かなた</h4>
            <YouTubeIFrame vid="F_4e-9HAYUo"/>
            <h4>22:00- Marine Ch. 宝鐘マリン</h4>
            <YouTubeIFrame vid="MSE8ulZTUeA"/>
            <h4>22:30- Nene Ch.桃鈴ねね</h4>
            <YouTubeIFrame vid="VLVtogssPwY"/>
            <h4>23:00- Mio Channel 大神ミオ</h4>
            <YouTubeIFrame vid="Y2sxHh9wmHQ"/>
            <h4>23:30- アキロゼCh。Vtuber/ホロライブ所属</h4>
            <YouTubeIFrame vid="3Cwtw2f-95c"/>
            <h4>24:00- お披露目 Aqua Ch. 湊あくあ </h4>
            <YouTubeIFrame vid="YICTdOYB5qM"/>
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
    .thumbnail20210125 {
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
.news_description p {
    line-height:1.7em;
}

</style>
