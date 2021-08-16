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
                    <tr><th>所在地</th><td>ホロ鯖 あくあマリンシオン号-地下帝国間 AKUKIN建設社屋</td></tr>
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
                    <tr>
                        <th>代表取締役社長</th>
                        <td>
                            <a href="https://www.youtube.com/channel/UC1opHUrw8rvnsadT-iGp7Cg" target="_blank">minatoaqua</a>
                            （<a href="https://twitter.com/minatoaqua" target="_blank">Twitter</a>）
                        </td>
                    </tr>
                    <tr class="stuff">
                        <th>従業員数</th>
                        <td>
                            10名（2021年8月時点）<br>
                            <div>
                                <h4>従業員リスト（順不同）</h4>
                                <ul>
                                    <li><a href="https://www.youtube.com/channel/UCp-5t9SrOQwXMU7iIjQfARg" target="_blank">大神ミオ</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCCzUftO8KOVkV4wQG1vkUvg" target="_blank">宝鐘マリン</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCFKOVgVbGmX65RxO3EtH3iw" target="_blank">雪花ラミィ</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCD8HOxPs4Xvsm8H0ZxXGiBw" target="_blank">夜空メル</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCZlDXzGoo7d44bwdNObFacg" target="_blank">天音かなた</a></li>
                                    <li><a href="https://www.youtube.com/channel/UC1suqwovbL1kzsoaZgFZLKg" target="_blank">癒月ちょこ</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCAoy6rzhSf4ydcYjJw3WoVg" target="_blank">Airani Iofifteen</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCAWSyEs_Io8MtpY3m-zqILA" target="_blank">桃鈴ねね</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCFTLzh12_nrtzqBPsTCqenA" target="_blank">アキロゼ</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCDqI2jOz0weumE8s7paEk6g" target="_blank">ロボ子さん</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4>派遣・アルバイト（順不同）</h4>
                                <ul>
                                    <li><a href="https://www.youtube.com/channel/UCvInZx9h3jC2JzsIzoOebWg" target="_blank">不知火フレア（派遣・狩り仲間）</a></li>
                                    <li><a href="https://www.youtube.com/channel/UCXTpFs_3PqI41qX2d9tL2Rw" target="_blank">紫咲シオン（炎上アルバイト）</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
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

.stuff ul {
    padding:4px 16px;
}
.stuff dev {
    margin:4px 0;
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
        title: '会社情報',
        meta: [
            { hid: 'description', name: 'description', content: `AKUKIN建設の会社情報です。` },
            { hid: 'og:title', property: 'og:title', content: `会社情報 | AKUKIN建設` },
            { hid: 'og:description', property: 'og:description', content: "AKUKIN建設の会社情報です。" },
        ],
    }
  }
}
</script>
