<template>
    <div>
        <div class="brand-resource-visual">
            <h2>ブランドリソース</h2>
        </div>
        <section class="section_brand-resource">
            <p>このページはAKUKIN建設が提供するサイトのアセットを正しく使用しコンテンツを表示するためのものです</p>

            <h4 style="margin-top:16px;">AKUKIN建設ロゴについて</h4>
            <p>雨々(ゆーやん) <a href="https://twitter.com/uu0604" target="_blank">@uu0604</a>さんのファンアートをお借りしています</p>
            <img src="/logo_2.png">
            <img src="~assets/logo120_2.png">
            <img src="/akukin_ogp3.png">

            <h4>旧ロゴ</h4>
            <img src="/logo.png">
            <img src="~assets/logo120.png">
            <img src="/akukin_ogp2.png">
        </section>
    </div>
</template>
<style>
.brand-resource-visual {
    width:100%;
    color:white;
    font-weight: 300;
    text-align:center;
    font-size: 1.6em;
    background-color: lightblue;
}
.brand-resource-visual h2 {
    margin: 16px 0;
}
.section_brand-resource {
    max-width:1200px;
    margin:0 auto;
    text-align:center;
    padding: 16px;
}
.section_brand-resource p {
    text-align:center;
}
.section_brand-resource img {
    display:block;
    margin:16px auto;
    max-width:100%;
}

</style>
<script>
export default {
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
  head() {
    return {
        title: 'ブランドリソース',
        meta: [
            { hid: 'description', name: 'description', content: `AKUKIN建設のロゴなどをダウンロードできます。` },
            { hid: 'og:title', property: 'og:title', content: `ブランドリソース | AKUKIN建設` },
            { hid: 'og:description', property: 'og:description', content: "AKUKIN建設のロゴなどをダウンロードできます。" },
        ],
    }
  }
}
</script>
