<template>
    <div class="news_body_contents">
        <div class="news_description">
            <p>AKUKIN建設は、以前より建設をしていたマップアートを完成させたことをお知らせします。<br>マップアートはAKUKIN建設本社に掲示し、ほかのAKUKIN建設関連施設などにも掲示する予定です。</p>
        </div>
        <div class="connect_videos">
            <h3>関連動画（完成日）</h3>
            <h4>1.【アクキン建設】完成させるぞ！マップアート！【 マイクラ / ホロライブ 】(2021/08/14)</h4>
            <p>Mio Channel 大神ミオ</p>
            <YouTubeIFrame vid="WSzpKLr-tBA" />

            <h4>2.【Minecraft】AKUKIN建設マップアート頑張る！！【雪花ラミィ/ホロライブ】(2021/08/14)</h4>
            <p>Lamy Ch. 雪花ラミィ</p>
            <YouTubeIFrame vid="SSHs4q9GWDk" />

            <h4>3.【Minecraft】AKUKIN建設マップアート頑張る！！（枠立て直し）【雪花ラミィ/ホロライブ】(2021/08/14)</h4>
            <p>Lamy Ch. 雪花ラミィ</p>
            <YouTubeIFrame vid="2Nr3VJOyvj0" />
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <h4>1.【マイクラ】マップアートを作る準備をする！【作業】(2021/07/04)</h4>
            <p>Mio Channel 大神ミオ</p>
            <YouTubeIFrame vid="W0FVjqQrICI" />

            <h4>2.【マイクラ】マップアート準備！羊毛自動回収機をつくった！【 ホロライブ / 大神ミオ 】(2021/07/07)</h4>
            <p>Mio Channel 大神ミオ</p>
            <YouTubeIFrame vid="gAlQwtLnpBA" />

            <h4>3.【マイクラ】山崩しのミオ【整地】(2021/07/10)</h4>
            <p>Mio Channel 大神ミオ</p>
            <YouTubeIFrame vid="JFHEwa9T7Xg" />

            <h4>4.【マイクラ】昼寝しすぎたので深夜に作業【整地】(2021/07/15)</h4>
            <p>Mio Channel 大神ミオ</p>
            <YouTubeIFrame vid="OjBGNKlS554" />

            <h4>5.【アクキン建設】マップアートみんなで作ります！！！【 マイクラ / ホロライブ 】(2021/08/10)</h4>
            <p>Mio Channel 大神ミオ</p>
            <YouTubeIFrame vid="ar4Sd7wh1-c" />

            <h4>6.【Minecraft】アクキン建設出勤！マップアートを作る✨【ホロライブ/夜空メル】(2021/08/10)</h4>
            <p>Mel Channel 夜空メルチャンネル</p>
            <YouTubeIFrame vid="jVWqvDyIEO8" />

            <h4>7.【Minecraft】AKUKIN建設マップアート制作のお手伝い！【雪花ラミィ/ホロライブ】(2021/08/10)</h4>
            <p>Lamy Ch. 雪花ラミィ</p>
            <YouTubeIFrame vid="XX2UDefZ6yc" />

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
