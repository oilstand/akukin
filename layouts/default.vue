<template>
  <div class="main-body">
    <div style="width:100%;height:2em;background-color:pink;text-align:center;line-height:2em;font-weight:bold;color:red;">
        <router-link to="/news/20210124001" style="color:red;display: block;width: 100%;height: 100%;">
            2021/01/25 18:00 JST 本社建築リレーを行います
        </router-link>
    </div>
    <header id="header">
        <h1>
            <router-link to="/">
                <img src="~assets/logo120.png">
                <span>AKUKIN建設</span>
            </router-link>
        </h1>
        <input type="checkbox" id="right-menu_check">
        <label for="right-menu_check" class="right-menu_icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="36px" height="36px"><path d="M0 0h24v24H0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
        </label>
        <div class="right-menu_wrapper">
            <label for="right-menu_check" class="right-menu_label"></label>
            <div class="right-menu">
                <label for="right-menu_check" class="right-menu_button">close</label>
                <ul v-on:click="closeRightMenu">
                    <li><router-link to="/news">ニュース</router-link></li>
                    <li id="menu_sitemap"><a href="#sitemap">サイトマップ</a></li>
                </ul>
                <ul v-on:click="closeRightMenu">
                    <li><router-link to="/projects">事業</router-link></li>
                    <li><router-link to="/works">実績</router-link></li>
                    <li><router-link to="/company">会社情報</router-link></li>
                    <li><router-link to="/recruit">採用情報</router-link></li>
                    <li class="sp-only"><router-link to="/brandresource">ブランドリソース</router-link></li>
                    <li class="sp-only"><router-link to="/privacypolicy">プライバシーポリシー</router-link></li>
                </ul>
            </div>
        </div>
    </header>
    <nuxt />
    <footer>
        <div id="sitemap">
            <h2>サイトマップ</h2>
            <ul>
                <li><router-link to="/">トップ</router-link></li>
                <li><router-link to="/projects">事業</router-link></li>
                <li><router-link to="/works">実績</router-link></li>
                <li><router-link to="/news">ニュース</router-link></li>
                <li><router-link to="/company">会社情報</router-link></li>
                <li><router-link to="/recruit">採用情報</router-link></li>
                <li><a target="_blank" href="https://twitter.com/minatoaqua">Twitter</a></li>
                <li><a target="_blank" href="https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg">YouTube</a></li>
                <li class="longtype"><router-link to="/brandresource">ブランドリソース</router-link></li>
                <li class="longtype"><router-link to="/privacypolicy">プライバシーポリシー</router-link></li>
            </ul>
            <p>当サイトは非公式・非公認のネタサイトです。公式への問い合わせ等はご遠慮ください。</p>
        </div>
        <a href="#header" class="topButton">↑</a>
        <a href="#" class="anchor_link">⚓</a>
    </footer>
  </div>
</template>

<style>
* {
    margin:0;padding:0;
}
body {
    background-color:#F9F9F9;
}
@font-face {
  font-family: "Ubuntu";
  src: url('~assets/Ubuntu-Bold.ttf');
}
.main-body {
}
header {
    display:flex;
}
header h1 {
    height:100%;
}
header h1 a {
    display:block;
    height:100%;
    position:relative;
    vertical-align:middle;
}
header h1 img {
    display:inline-block;
    position:absolute;
}
header h1 span {
    display:inline-block;
    color:#2d2d2d;
    font-family: 'Ubuntu';
    font-weight: 500;
}
.right-menu_wrapper {
    margin-left:auto;
}
.right-menu_wrapper ul {
    display:flex;
    flex-wrap:wrap;
    list-style:none;
    padding:0;
    align-items:center;
    justify-content:flex-end;
    text-align:center;
}
#right-menu_check {
    width:0px;
    height:0px;
    position:fixed;
    right:0;bottom:0;
    overflow:hidden;
    opacity:0;
}
@media screen and (max-width:959px) {
    header {
        height:50px;
        padding: 8px 16px;
    }
    header h1 a {
        line-height:50px;
    }
    header h1 img {
        height: 32px;
        top: calc((100% - 32px)/2);
    }
    header h1 span {
        padding-left:calc(32px + 8px);
        font-size:24px;
    }
    .right-menu_icon {
        width:50px;
        height:50px;
        margin-left:auto;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .right-menu_label {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.4);
        top: 0;
        left: 0;
        opacity:0;
        transition:opacity .4s;
    }
    #right-menu_check:checked~.right-menu_wrapper>.right-menu_label {
        opacity:1;
    }
    .right-menu_button {
        display:block;
        width:100%;
        padding: 4px 0;
        text-align:center;
    }
    .right-menu_wrapper {
        position:fixed;
        right:0;top:0;
        height:0%;
        width:100%;
        overflow:hidden;
        transition:height 0s 0.4s;
        z-index:10;
    }
    #right-menu_check:checked~.right-menu_wrapper {
        height:100%;
        transition:height 0s 0s;
    }
    .right-menu_wrapper ul {
        width:100%;
    }
    .right-menu_wrapper ul li {
        width:100%;    
    }
    .right-menu_wrapper a {
        padding: 8px 0;
    }
    .right-menu {
        position:absolute;
        right:0;top:0;
        background-color:#F9F9F9;
        height:100%;
        transition:transform .3s;
        transform: translate3d(100%, 0, 0px);
        max-width: 65%;
    }
    #right-menu_check:checked~.right-menu_wrapper>.right-menu {
        transform: translate3d(0, 0, 0px);
    }
    #menu_sitemap {
        display:none;
    }
    footer {
        margin-top: 24px;
        padding: 16px 8px;
    }
    footer p {
        font-size:0.8em;
    }
    footer ul li {
        height:4em;
    }
    footer ul li {
        width:25%;
    }
    footer ul li.longtype {
        width:50%;
    }
}
@media screen and (min-width:960px) {
    header {
        height:90px;
        padding: 16px 32px;
    }
    header h1 a {
        line-height:90px;
    }
    header h1 img {
        height: 45px;
        top: calc((100% - 45px)/2);
    }
    header h1 span {
        padding-left:calc(45px + 16px);
    }
    .right-menu_icon {
        display:none;
    }
    .right-menu_wrapper > div {
        height:100%;
    }
    .right-menu_wrapper ul {
        height:50%;
    }
    .right-menu_wrapper ul li {
        width:150px;    
    }
    .right-menu_label, .right-menu_button {
        display:none;
    }
    .sp-only {
        display:none;
    }
    footer {
        margin-top: 80px;
        padding: 20px;
    }
    footer ul li {
        height:80px;
    }
    footer ul li {
        width:20%;
    }
}
.right-menu_wrapper a {
    display:block;
    width:100%;
    height:100%;
    text-decoration:none;
    color:#3a3a3a;
    font-weight:400;
    transition: border .2s ease-out;
    border-bottom:solid 3px transparent;

}
.right-menu_wrapper a:hover {
    border-bottom:solid 3px lightpink;
}
footer {
    background-color:#707070;
    color:white;
    position:relative;
}
footer > div {
    max-width:1200px;
    margin:0 auto;
}
footer h2 {
    margin: 16px 0;
}
footer ul {
    list-style:none;
    display:flex;
    flex-wrap:wrap;
}
footer ul li a {
    text-decoration:none;
    color:white;
}
.topButton {
    width:60px;
    height:60px;
    text-align:center;
    line-height:60px;
    font-size:40px;
    text-decoration:none;
    color:white;
    position:absolute;
    top:0;right:0;
}
.anchor_link {
    display: none;
    position: absolute;
    left: 0;
    bottom: 0;
    text-decoration: none;
    opacity: .3;
}
</style>

<script>
export default {
  head() {
      return {
            htmlAttrs: {
                lang: 'ja',
                prefix: 'og: http://ogp.me/ns#'
            },
            title: 'AKUKIN建設',
            meta: [
                { hid: 'description', name: 'description', content: `AKUKIN建設` },
                { hid: 'keywords', name: 'keywords', content: 'AKUKIN建設,アクキン建設,湊あくあ,AKUKIN,アクキン,akukin' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'AKUKIN建設' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://akukin.jp' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `AKUKIN建設` },
                { hid: 'og:description', property: 'og:description', content: 'AKUKIN建設' },
                { hid: 'og:image', property: 'og:image', content: 'https://akukin.jp/logo.png' },
                { name: 'twitter:card', content: 'summary' }
            ],
      }
  },
  data () {
    return {
    }
  },
  methods: {
      closeRightMenu(event) {
          const elmCheckbox = document.getElementById('right-menu_check');
          if(elmCheckbox) {
              elmCheckbox.checked = false;
          } else {
              console.log('err checkbox notfound');
          }
      }
  },
  computed: {
  },
  mounted() {
  }
}
</script>
