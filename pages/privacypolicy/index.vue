<template>
    <div>
        <div class="privacy-policy-visual">
            <h2>プライバシーポリシー</h2>
        </div>
        <section class="section_privacy-policy">
アクセス解析ツールについて
当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。

Googleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており個人を特定するものではありません。
この機能はCookieを無効にすることで収集を拒否することが出来ます。Cookieの無効化状態はお使いのブラウザの設定をご確認ください。
この規約に関してはGoogle アナリティクス利用規約をご確認ください。
        </section>
    </div>
</template>
<style>
.privacy-policy-visual {
    width:100%;
    color:white;
    font-weight: 300;
    text-align:center;
    background-color: lightblue;
}
@media screen and (max-width:959px) {
    .privacy-policy-visual {
        font-size: 1.2em;
    }
}
@media screen and (min-width:960px) {
    .privacy-policy-visual {
        font-size: 1.6em;
    }
}
.privacy-policy-visual h2 {
    margin: 16px 0;
}
.section_privacy-policy {
    max-width:800px;
    margin:0 auto;
    text-align:left;
    padding: 16px;
    white-space: pre-line;
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
        title: 'プライバシーポリシー',
        meta: [
            { hid: 'description', name: 'description', content: `このサイトのプライバシーポリシーです。` },
            { hid: 'og:title', property: 'og:title', content: `プライバシーポリシー | AKUKIN建設` },
            { hid: 'og:description', property: 'og:description', content: "このサイトのプライバシーポリシーです。" },
        ],
    }
  }
}
</script>
