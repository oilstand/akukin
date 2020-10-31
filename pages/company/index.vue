<template>
    <div>
        <div class="company-visual">
            <h2>会社概要</h2>
        </div>
        <section class="company-info">
            <table>
                <tbody>
                    <tr><th>社名</th><td>AKUKIN建設</td></tr>
                    <tr><th>英文表記</th><td>AKUKIN CONSTRUCTION CORP.</td></tr>
                    <tr><th>所在地</th><td>ホロ鯖 ホロ村 あくあマリンシオン号正面</td></tr>
                    <tr><th>設立</th><td>2019年10月12日</td></tr>
                    <tr>
                        <th>資本金</th>
                        <td>
                            <a target="_blank" href="https://www.youtube.com/watch?v=vlIfmO56pZQ">アクアマリン4つ
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" width="20px" height="20px"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th>事業内容</th>
                        <td>
                            <ol>
                                <li>
                                    道路、鉄道、補助施設(ビーコン)、観光施設の設計・施工。<br>
                                    及び、これらに関するエンジニアリング・マネージメント。
                                </li>
                                <li>ツールを用いた戦闘。及び、世界戦闘力のマネージメント。</li>
                            </ol>
                        </td>
                    </tr>
                    <tr><th>代表取締役社長</th><td>minatoaqua</td></tr>
                    <tr><th>従業員数</th><td>1名（2020年10月時点）</td></tr>
                </tbody>
            </table>
        </section>


    </div>
</template>
<style>
.company-visual {
    width:100%;
    color:white;
    font-weight: 300;
    text-align:center;
    font-size: 1.6em;
    background-color: #ffaab7;
}
.company-info {
    text-align:center;
    padding: 16px;
}
.company-info h2, .company-visual h2 {
    margin: 16px 0;
}

.company-info p {
    margin: 16px;
}
.company-info table {
    margin:16px auto;
    min-width:60%;
    text-align:left;
    border-collapse: collapse;
    border-spacing: 0;
}
@media screen and (max-width:959px) {
    .company-info th, .company-info td {
        padding:8px;
    }
}
@media screen and (min-width:960px) {
    .company-info th, .company-info td {
        padding:8px 20px;
    }
}
.company-info table tr:nth-of-type(odd) {
    background-color:#c3ebfb;
}
.company-info table tr:nth-of-type(even) {
    background-color:#f5f5f5;
}
.company-info ol {
    padding-left:2em;
}
.company-info li {
    padding: 4px 0;
}
.press_label {
    color:white;
    font-weight:300;
    background-color:gray;
    padding: 0 16px;
}
.news_head {
    display:inline-block;
    width:40%;
    text-align:right;
}
.news_title {
    display:inline-block;
    margin-left:5%;
    width:55%;
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
  head: {
    script: [
    ]
  }
}
</script>
