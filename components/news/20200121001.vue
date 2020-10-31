<template>
    <div class="news_body_contents">
        <div class="news_description">
            <p>AKUKIN建設は1月20日、ホロ村を上空から見渡すことのできる天空アクアラインに高度限界まで到達できる天空アクアライン第2フロアをオープンしました</p>
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <YouTubeIFrame vid="O6_2PqwYBC0"/>
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
