<template>
    <div class="content_body">
        <div class="breadcrumb_trail">
            <router-link to="/">ホーム</router-link> ＞ <router-link to="/news">ニュース</router-link> ＞ {{title}}
        </div>
        <section class="news_body">
            <h2>{{title}}</h2>
            <p class="news_type"><span class="press_label">{{label}}</span> {{date}}</p>
            <div>
                <component v-for="(compDat, i) in contents"
                    :params="compDat.data"
                    :key="i"
                    :is="compDat.name"></component>
            </div>
        </section>
    </div>
</template>
<style>
.content_body {
    max-width:1200px;
    margin:16px auto;
}
.news_body .news_type {
    width: 80%;
    margin:16px auto;
}
@media screen and (max-width:959px) {
    .breadcrumb_trail {
        margin:12px 4px;
        font-size:0.9em;
        margin: 8px 16px;
    }
    .news_body .news_type {
        text-align:center;
    }
    .news_body h2 {
        margin: 20px 0 8px 0;
    }
    .npimage {
        width:100%;
    }
}
@media screen and (min-width:960px) {
    .breadcrumb_trail {
        max-width:1200px;
        margin:16px auto;
    }
    .news_body .news_type {
        text-align:right;
    }
    .npimage {
        margin: 0 auto;
        display: block;        
    }
}
.news_body h2 {
    text-align:center;
}
.news_body .press_label {
    color:white;
    font-weight:300;
    background-color:gray;
    padding: 0 16px;
}
.news_body .news_thumb {
    display:block;
    width: 50%;
    margin:0 auto;
}

</style>
<script>
import YouTubeIFrame from '~/components/news/npYouTubeIFrame.vue'
import npImage from '~/components/news/npImage.vue'
import Report20201027001 from '~/components/news/20201027001.vue'
import Report20201004001 from '~/components/news/20201004001.vue'
import Report20200121001 from '~/components/news/20200121001.vue'
import Report20200120001 from '~/components/news/20200120001.vue'

export default {
  async asyncData({ params }) {

    const a = await import(`~/posts/newsdats.json`)
    let ret = false;
    let newsdats = a.default;
    let e404 = {};

    for(let news of newsdats) {
        if(news.url === params.id) {
            ret = news;
            break;
        }
    }

    return {news:ret};
  },
  data () {
    return {
    }
  },
  components: {YouTubeIFrame,Report20201027001,npImage,Report20201004001,Report20200121001,Report20200120001},
  methods: {
  },
  mounted() {
  },
  computed: {
      title() {
          return this.news ? this.news.title:'404';
      },
      date() {
          return this.news ? this.news.date:'404';
      },
      label() {
          return this.news ? this.news.label:'404';
      },
      thumb() {
          return this.news ? this.news.thumb:'404';
      },
      contents() {
          return this.news && this.news.contents
            ? this.news.contents:[{name:'npImage',data:{thumb:this.thumb}}];
      }
  }
}
</script>
