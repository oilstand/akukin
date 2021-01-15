<template>
    <div>
        <div class="company-visual">
            <h2>会社概要</h2>
        </div>
        <section class="company-info">
            <table>
                <tbody>
                    <tr><th>社名</th><td>TARAKIN建設</td></tr>
                    <tr><th>英文表記</th><td>TARAKIN SEAFOOD CORP.</td></tr>
                    <tr><th>所在地</th><td>ガーディアントラップ</td></tr>
                    <tr><th>設立</th><td>2019年10月12日</td></tr>
                    <tr>
                        <th>資本金</th>
                        <td>
                            タラ 4LC
                        </td>
                    </tr>
                    <tr>
                        <th>事業内容</th>
                        <td>
                            <ol>
                                <li>
                                    ガーディアントラップを用いたタラの水揚げ<br>
                                    及び、かまどを利用したタラの調理。
                                </li>
                            </ol>
                        </td>
                    </tr>
                    <tr><th>代表取締役社長</th><td>minatoaqua</td></tr>
                    <tr><th>従業員数</th><td>10名（2020年12月時点）</td></tr>
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
    }
  }
}
</script>
