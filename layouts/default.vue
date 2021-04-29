<template>
  <div class="main-body">
    <div v-if="false" style="width:100%;height:2em;background-color:pink;text-align:center;line-height:2em;font-weight:bold;color:red;">
        <NuxtLink to="/news/20210124001" style="color:red;display: block;width: 100%;height: 100%;font-size:0.8em;">
            2021/01/25 18:00 JST 本社建築リレーを行います
        </NuxtLink>
    </div>
    <header id="header">
        <h1>
            <NuxtLink to="/">
                <img class="logo_sp" src="~assets/logo42.png">
                <img class="logo_pc" src="~assets/logo120.png">
                <span>AKUKIN建設</span>
            </NuxtLink>
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
                    <li><NuxtLink to="/gacha">ガチャ</NuxtLink></li>
                    <li><NuxtLink to="/news">ニュース</NuxtLink></li>
                    <li id="menu_sitemap"><a href="#sitemap">サイトマップ</a></li>
                </ul>
                <ul v-on:click="closeRightMenu">
                    <li><NuxtLink to="/projects">事業</NuxtLink></li>
                    <li><NuxtLink to="/works">実績</NuxtLink></li>
                    <li><NuxtLink to="/company">会社情報</NuxtLink></li>
                    <li><NuxtLink to="/recruit">採用情報</NuxtLink></li>
                    <li class="sp-only"><NuxtLink to="/brandresource">ブランドリソース</NuxtLink></li>
                    <li class="sp-only"><NuxtLink to="/privacypolicy">プライバシーポリシー</NuxtLink></li>
                </ul>
            </div>
        </div>
    </header>
    <nuxt />
    <footer>
        <div id="sitemap">
            <h2>サイトマップ</h2>
            <ul>
                <li><NuxtLink to="/">トップ</NuxtLink></li>
                <li><NuxtLink to="/projects">事業</NuxtLink></li>
                <li><NuxtLink to="/works">実績</NuxtLink></li>
                <li><NuxtLink to="/news">ニュース</NuxtLink></li>
                <li><NuxtLink to="/gacha">ガチャ</NuxtLink></li>
                <li><NuxtLink to="/company">会社情報</NuxtLink></li>
                <li><NuxtLink to="/recruit">採用情報</NuxtLink></li>
                <li><a target="_blank" href="https://twitter.com/minatoaqua">Twitter</a></li>
                <li><a target="_blank" href="https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg">YouTube</a></li>
                <li class="longtype"><NuxtLink to="/brandresource">ブランドリソース</NuxtLink></li>
                <li class="longtype"><NuxtLink to="/privacypolicy">プライバシーポリシー</NuxtLink></li>
            </ul>
            <p>当サイトは非公式・非公認のネタサイトです。公式への問い合わせ等はご遠慮ください。</p>
        </div>
        <a href="#header" class="topButton">↑</a>
        <a href="#" class="anchor_link">⚓</a>
    </footer>
    <img
        v-if="showTara"
        v-on:click="clickTara"
        src="/gacha/taraicon.png" :style="`position:fixed;${taraPosStyle}`">
    <div v-if="loginb || gacha" class="popup_overlay" style="">
        <div v-if="gacha"
            class="fesinfow mcwindow"
            style="">
            <p class="wtitle"><img src="/gacha/fes.png" style=""></p>
            <p class="wcontent">
                <img
                    class="fesbanner"
                    v-on:click="$router.push('/gacha'),gacha = !gacha"
                    src="/gacha/fesbanner.png"
                    style="">
            </p>
            <p class="wcontrols" style="display:flex;justify-content:center;">
                <button
                    class="mcbutton"
                    style=""
                    v-on:click="$router.push('/gacha'),gacha = !gacha"
                    >
                    <img src="/gacha/text_opengacha.png?142">
                </button>
                <button
                    class="mcbutton"
                    style=""
                    v-on:click="gacha = !gacha"
                    >
                    <img src="/gacha/text_close.png">
                </button>
            </p>
        </div>
        <div v-if="loginb"
            class="loginbonusw mcwindow">
            <p class="wtitle"><img src="/gacha/loginbonus.png" style=""></p>
            <p class="wcontent"><img class="taraicon" src="/gacha/taraitem.png" style=""></p>
            <p class="wcontrols">
                <button
                    class="mcbutton"
                    style=""
                    v-on:click="loginb = !loginb,gacha = true"
                    >
                    <img src="/gacha/text_close.png">
                </button>
            </p>
        </div>
    </div>
  </div>
</template>

<style>
.popup_overlay {
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color: rgba(0,0,0,.6);
}
.fesinfow {
    width:758px;
    max-width:100%;
    text-align:center;   
}
.loginbonusw {
    width:640px;
    max-width:100%;
    text-align:center;
}
.mcbutton {
    margin: 0 8px;
    padding: 6px 24px;
    background-image: url(/stonepattern.png);
    box-shadow: 0 0 0 1px black;
    border-top: solid 2px #cacaca;
    border-bottom: solid 3px rgba(0,0,0,.4);
    border-right: solid 2px rgba(0,0,0,.4);
    border-left: solid 1px #cacaca;
    outline:none;
    cursor:pointer;
}
.mcbutton img {
    vertical-align:bottom;
}
.mcbutton:hover {
    box-shadow: 0 0 0 1px white;
}
@media screen and (max-width:959px) {
    .popup_overlay {
        position:fixed;
        left:0;top:0;
    }
    .fesinfow,
    .loginbonusw {
        padding:16px 0;
    }
    .fesinfow .wtitle,
    .loginbonusw .wtitle {
        margin:12px auto;
    }
    .loginbonusw .taraicon {
        width:80px;
        height:80px;
    }
    .wcontent {
        margin:0 auto;
    }
    .wcontrols {
        margin:12px auto;
    }
    .fesbanner {
        width:100%;
    }
}
@media screen and (min-width:960px) {
    .popup_overlay {
        position:absolute;
        left:0;top:0;
    }
    .fesinfow,
    .loginbonusw {
        padding:16px;
    }
    .fesinfow .wtitle,
    .loginbonusw .wtitle {
        margin:20px auto;
    }
    .loginbonusw .taraicon {
        width:80px;
        height:80px;
    }
    .wcontent {
        margin:0 auto;
    }
    .wcontrols {
        margin:20px auto;
    }
}
.mcwindow {
    position:relative;
    background-color: #c6c6c6;
    box-shadow: 0 0 0 2px black;
    border-top: solid 4px #ffffff;
    border-bottom: solid 4px #555555;
    border-right: solid 4px #555555;
    border-left: solid 4px #ffffff;
}
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
    .logo_pc {
        display:none;
    }
    header h1 a {
        line-height:50px;
    }
    header h1 img {
        height: 42px;
        top: calc((100% - 42px)/2);
    }
    header h1 span {
        margin-left:calc(42px + 8px);
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
    .logo_sp {
        display:none;
    }
    header h1 img {
        height: 60px;
        top: calc((100% - 60px)/2);
    }
    header h1 span {
        padding-left:calc(60px + 16px);
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
        loginb: false,
        gacha: false,
        canLS: false,
        showTara: false,
        taraPos: 0,
        pages: [
            '/',
            '/brandresource',
            '/company',
            '/gacha',
            '/news',
            '/privacypolicy',
            '/projects',
            '/recruit',
            '/works',
            '/news/20210125001',
            '/news/20210124001',
            '/news/20201226001',
            '/news/20201116001',
            '/news/20201113001',
            '/news/20201031001',
            '/news/20201027001',
            '/news/20201004001',
            '/news/20200121001',
            '/news/20200120001'
        ]
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
      },
      clickTara() {
        this.$setUserData(
                (data) => {
                        data.tara += (Math.floor(Math.random() * 8192) % 5) + 1;
                        data.map = Math.floor(Math.random() * 8192) % 4;
                        this.showTara = false;
                        return data;
                    }
                );
        this.$nuxt.$emit('changeUserData');

      }
  },
  computed: {
      taraPosStyle() {
          switch(this.taraPos) {
              case 0:
                return 'left:50px;bottom:50px;'; break;
              case 1:
                return 'right:50px;bottom:50px;'; break;
              case 2:
                return 'left:50px;top:150px;'; break;
              case 3:
                return 'right:50px;top:150px;'; break;
          }
      }
  },
  mounted() {
    if(!this.$storageAvailable('localStorage')) {
        return;
    }
    this.canLS = true;

    let userData = this.$getLocalStorage('userData');
    if(userData) {
        let now = new Date();
        let last = new Date(userData.lastLogin);
        now.setHours(now.getHours() + 9);
        last.setHours(last.getHours() + 9);
        if(this.$formatDate(now, 'yyyy-MM-dd') !== this.$formatDate(last, 'yyyy-MM-dd')) {
            userData.lastLogin = (new Date()).getTime();
            userData.tara += 20;
            this.$setLocalStorage('userData',userData,'save');
            this.loginb = true;
            this.$nuxt.$emit('changeUserData');
        }

    } else {
        this.$setLocalStorage('userData',{lastLogin: (new Date()).getTime(), tara:20 + 20, map:0},'save');
        this.loginb = true;
        this.$nuxt.$emit('changeUserData');
    }
    this.$router.beforeEach((to, from, next) => {
        if(this.canLS) {
            let userData = this.$getLocalStorage('userData');
            if(userData) {
                const pageType = this.pages.indexOf(to.path);
                let prTara = pageType % 4;
                this.showTara = (prTara === userData.map);
                if(this.showTara) {
                    this.taraPos = Math.floor(Math.random() * 8192) % 4;
                }
            }
        }
        next();
    });
  }
}
</script>
