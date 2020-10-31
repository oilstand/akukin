<template>
    <div>
        <div class="breadcrumb_trail">
            <router-link to="/">ホーム</router-link> ＞ ニュース
        </div>
        <section class="section_news">
            <h2>ニュース</h2>
            <ol>
                <li v-for="data in news" :key="data.url"><span class="news_head">{{data.date}} 
                <span class="press_label">{{data.label}}</span></span><router-link :to="'/news/'+data.url" class="news_title">{{data.title}}</router-link></li>
            </ol>
        </section>
    </div>
</template>
<style>
.section_news ol {
    margin:0 auto;
    text-align:left;
}
.section_news li {
    list-style: none;
}
.press_label {
    color:white;
    font-weight:300;
    background-color:gray;
}
@media screen and (max-width:959px) {
    .breadcrumb_trail {
        margin:12px 4px;
        font-size:0.9em;
        margin: 8px 16px;
    }
    .section_news h2 {
        margin: 12px 8px;
    }
    .section_news ol {
        width:100%;
    }
    .press_label {
        padding: 0 4px;
    }
    .section_news {
        text-align:center;
        padding: 16px 4px;
    }
    .section_news li {
        padding: 8px 0;
        display:flex;
        align-items:center;
        font-size:0.9em;
    }
    .news_head {
        white-space: pre-line;
        display:block;
    }
    .news_title {
        margin-left:12px;
        display:block;
        width:70%;
    }
}
@media screen and (min-width:960px) {
    .breadcrumb_trail {
        max-width:1200px;
        margin:16px auto;
    }
    .section_news h2 {
        margin: 16px 0;
    }
    .section_news ol {
        width:80%;
    }
    .section_news {
        text-align:center;
        padding: 16px;
    }
    .section_news li {
        padding: 4px 0;
        white-space: nowrap;
    }
    .press_label {
        padding: 0 16px;
    }
    .news_title {
        padding-left:20px;
        display:inline-block;
        width:50%;
    }
}
.section_news p {
    margin: 16px;
}
.section_news li a {
    text-decoration:none;
    color:black;
    transition:background-color .2s;
}
.section_news li a:hover {
    background-color:#ffecef;
}
.news-button {
    display: inline-block;
    border: solid 1px gray;
    padding: 4px 16px;
    text-decoration: none;
    color: black;
}
.news_head {
    display:inline-block;
    width:40%;
    text-align:right;
}

</style>
<script>
export default {
  async asyncData({ params }) {

    const a = await import(`~/posts/newsdats.json`)
    let newsdats = a.default;

    return {news:newsdats};
  },
  data () {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  },
  head: {
    script: [
    ]
  }
}
</script>
