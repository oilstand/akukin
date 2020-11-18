<template>
    <div class="news_body_contents">
        <div class="news_description">
            <p>AKUKIN建設はホロ村交通の利便性向上のため、ホロ村内に鉄道を敷設しました。また、よりよい景観実現のため道路を舗装し街灯を設置しました。</p>
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <h4>1.鉄道敷設(2020/11/13)</h4>
            <YouTubeIFrame vid="5vZqrFOPG8k"/>
            <h4>2.道路舗装・街灯設置(2020/11/16)</h4>
            <YouTubeIFrame vid="i4-l-dIkYww"/>
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
