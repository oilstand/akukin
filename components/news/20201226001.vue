<template>
    <div class="news_body_contents">
        <div class="news_description">
            <p>SNS上で弊社の給与がタラであるとの情報が拡散されています。</p>
            <p>現在、社内にて事実の確認作業を行っております。</p>  
            <p>事実確認が完了次第プレスリリースにてお知らせいたしますので不正確な情報の拡散はお控えください。</p>
        </div>
        <div class="connect_videos">
            <h3>関連動画</h3>
            <h4>1.AKUKIN面接(2020/12/26)</h4>
            <YouTubeIFrame vid="8Jkb48Ioj_E"/>
            <h4>2.関連ツイート(2020/12/26)</h4>
            <blockquote class="twitter-tweet"><p lang="ja" dir="ltr">あくきん建設面接いったけど給料タラだったわwwwwwwwww</p>&mdash; 紫咲シオン🌙ホロライブ (@murasakishionch) <a href="https://twitter.com/murasakishionch/status/1342834729368702976?ref_src=twsrc%5Etfw">December 26, 2020</a></blockquote>
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
        twitterWidgetLoad() {
            if(!window.twttr) {
                window.twttr = (function(d, s, id) {
                    var js, fjs = d.getElementsByTagName(s)[0],
                        t = window.twttr || {};
                    if (d.getElementById(id)) return t;
                    js = d.createElement(s);
                    js.id = id;
                    js.src = "https://platform.twitter.com/widgets.js";
                    fjs.parentNode.insertBefore(js, fjs);

                    t._e = [];
                    t.ready = function(f) {
                        t._e.push(f);
                    };

                    return t;
                }(document, "script", "twitter-wjs"));
            } else {
                twttr.widgets.load();
            }
        }
  },
  props: [],
  computed: {

  },
  mounted() {
    this.twitterWidgetLoad();
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
