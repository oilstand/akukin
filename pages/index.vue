<template>
    <div>
        <div class="main-visual">
            Ch.MinatoAqua / AKUKIN CONSTRUCTION CORP.
        </div>
        <section class="section_news">
            <h2>ニュース</h2>
            <ol>
                <li v-for="data in news" :key="data.url"><span class="news_head">{{data.date}} 
                <span class="press_label">{{data.label}}</span></span><router-link :to="'/news/'+data.url" class="news_title">{{data.title}}</router-link></li>
            </ol>
            <p><router-link to="/news" class="news-button">一覧へ ＞</router-link></p>
        </section>
        <section class="section_pickup">
            <h2>ピックアップ</h2>
            <ul>
                <li v-for="data in pickups" :key="data.url"><router-link :to="'/news/'+data.url"><img :src="data.thumb">
                <h3>{{data.date}}<br>{{data.title}}</h3></router-link></li>
            </ul>
        </section>
    </div>
</template>
<style>
.main-visual {
    width:100%;
    height:580px;
    color:white;
    font-weight: 300;
    line-height:580px;
    text-align:center;
    background-position-y:-48px;
}
.section_news ol {
    margin:0 auto;
    text-align:left;
}
.press_label {
    color:white;
    font-weight:300;
    background-color:gray;
}
.section_news li {
    list-style: none;
}
@media screen and (max-width:959px) {
    .main-visual {
        font-size: 0.9em;
        background-image: url(/top.png);
        background-size: 100% auto;
    }
    .section_news ol {
        width:100%;
    }
    .press_label {
        padding: 0 4px;
    }
    .section_news {
        text-align:center;
        padding: 16px 8px;
    }
    .section_pickup {
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
    .section_pickup ul li {
        width: calc(50% - 8px);
        padding: 4px;
    }
}
@media screen and (min-width:960px) {
    .main-visual {
        font-size: 1.6em;
        background-image: url(/minecraft.png?1029);
    }
    .section_news ol {
        width:80%;
    }
    .section_news, .section_pickup {
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
    .section_pickup ul li {
        width: calc(25% - 16px);
        padding:8px;
    }
}
.section_news h2, .section_pickup h2 {
    margin: 16px 0;
}
.section_news li a {
    text-decoration:none;
    color:black;
    transition:background-color .2s;
}
.section_news li a:hover {
    background-color:#ffecef;
}
.section_news p {
    margin: 16px;
}
.section_pickup ul {
    display:flex;
    flex-wrap:wrap;
    list-style:none;
    max-width:1200px;
    margin:0 auto;
}
.section_pickup ul li a {
    text-decoration:none;
    color:black;
}
.section_pickup ul li img {
    width: 100%;
}
.section_pickup ul li h3 {
    text-align:left;
    font-weight:normal;
    font-size:1em;
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

    return {pickups:newsdats,news:newsdats};
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
