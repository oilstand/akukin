<template>
    <div>
        <div class="recruit-visual">
            <h2>採用情報</h2>
        </div>
        <section class="section_recruit">
            <h3>募集種別</h3>
            <div>AKUKIN建設では新入社員を募集しています</div>
            <div class="fresh-member">新卒採用</div>
            <div class="skill-member">ポテンシャル採用</div>
        </section>
        <section class="section_occupation">
            <h3>ポテンシャル採用</h3>
            <div class="occupation_box">
                <div class="occupation_thumb">
                    <img src="/img/recruit_builder.png">
                </div>
                <div class="occupation_desc">
                    <h4>建築エンジニア</h4>
                    <p>設計図やサンプル画像に従った建築やイメージ図を元とした建築を行います。</p>
                    <div>
                        <span>必須条件</span><br>
                        ブロックの種類・性質の理解。<br>
                        <span>歓迎条件</span><br>
                        マイクラ流体力学の理解
                    </div>
                </div>
            </div>
            <div class="occupation_box">
                <div class="occupation_thumb">
                    <img src="/img/recruit_redstone.png">
                </div>
                <div class="occupation_desc">
                    <h4>赤石エンジニア</h4>
                    <p>要望やイメージを元として回路の設計と構築を行います。</p>
                    <div>
                        <span>必須条件</span><br>
                        赤石の信号の伝達方向の理解、基本的赤石パーツの理解。NOT,OR,AND回路の理解。<br>
                        <span>歓迎条件</span><br>
                        XOR回路の理解。赤石信号長・強度活用の理解。
                    </div>
                </div>
            </div>
            <div class="occupation_box">
                <div class="occupation_thumb">
                    <img src="/img/recruit_design.png">
                </div>
                <div class="occupation_desc">
                    <h4>建築デザイナー</h4>
                    <p>建築物の内装デザイン、建築物の外装・形状デザインを行います。</p>
                    <div>
                        <span>必須条件</span><br>
                        柵・トラップドア・ランタンの応用的利用の知識。装飾用小物の理解。<br>
                        <span>歓迎条件</span><br>
                        ピストンのブロック圧縮を利用した内装構築。羊毛アート制作の経験
                    </div>
                </div>
            </div>
        </section>
        <section class="section_welfare">
            <h3>制度・福利厚生</h3>
            <table>
                <tbody>
                    <tr><th>雇用形態</th><td>正社員</td></tr>
                    <tr><th>勤務時間</th><td>フレックス(8時間のみなし労働)</td></tr>
                    <tr><th>休日休暇</th><td>要相談</td></tr>
                    <tr><th>給与</th><td>要相談</td></tr>
                    <tr><th>賞与</th><td>要相談（現物支給あり）</td></tr>
                    <tr><th>福利厚生</th><td>社用エリトラ貸与</td></tr>
                    <tr><th>諸手当</th><td></td></tr>
                    <tr><th>勤務地</th><td>ホロ鯖</td></tr>
                </tbody>
            </table>
        </section>
    </div>
</template>
<style>
.occupation_thumb {
    position: relative;
    overflow: hidden;
}
.section_welfare,
.section_occupation {
    max-width:1200px;
    margin: 28px auto 0 auto;
}
.section_recruit h3,
.section_occupation h3,
.section_welfare h3 {
    font-size: 1.6em;
}
.section_welfare table {
    width:100%;
}
.section_welfare th {
    width:30%;
}
.section_welfare table tr:nth-of-type(odd) {
    background-color:#c3ebfb;
}
.section_welfare table tr:nth-of-type(even) {
    background-color:#f5f5f5;
}
.section_welfare td {
    padding:4px 16px;
}
@media screen and (max-width:959px) {
    .occupation_desc {
        width:calc(100% - 24px);
        padding:12px;
    }
    .occupation_thumb {
        width: 100%;
        padding-top: 40%;
    }
    .section_recruit h3 {
        width:100%;
        text-align: center;
    }
    .section_welfare h3,
    .section_occupation h3 {
        margin: 0 16px;
        text-align: center;
    }
    .section_welfare {
        padding:12px;
    }
}
@media screen and (min-width:960px) {
    .occupation_desc {
        width:calc(65% - 40px);
        padding:12px 20px;
    }
    .occupation_thumb {
        width: 35%;
        padding-top: 15%;
    }
}
.recruit-visual {
    width:100%;
    color:white;
    font-weight: 300;
    text-align:center;
    font-size: 1.6em;
    background-color: lightblue;
}
.section_recruit {
    max-width:1200px;
    margin:0 auto;
    text-align:center;
    padding: 16px;
    display:flex;
    flex-wrap:wrap;
}



.section_recruit > div:first-of-type {
    width:100%;
    text-align:center;
}
.section_recruit .fresh-member,
.section_recruit .skill-member {
    margin:12px;
    width:calc(50% - 24px - 2px);
    border:solid 1px gray;
    text-align:center;
    line-height:60px;
    font-weight:400;
}
.recruit-visual h2 {
    margin: 16px 0;
}
.occupation_box {
    margin:10px 0;
    display:flex;
    flex-wrap:wrap;
}
.occupation_desc h4 {
    font-size:1.5em;
    color:#3e3e3e;
}
.occupation_desc div {
    margin:10px 0;
}
.occupation_desc div span {
    font-weight:bold;
}
.occupation_thumb img {
    max-height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
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
        title: '採用情報',
    }
  }
}
</script>
