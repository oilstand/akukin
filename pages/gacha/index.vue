<template>
    <div>
        <div class="gacha-visual">
            <h2>タラガチャ</h2>
        </div>
        <section class="gacha-info">
            <img class="gacha-mainbanner" src="/tbanner.png">
            <div class="gacha-info-content">
                <p
                    v-on:click="vm = VM.LINEUP"
                    class="teikyo">ガチャ提供割合</p>
                <div class="gacha-bg">
                    <img src="/gacha/taraicon.png"><span class="taranum">{{ tara }}</span>
                </div>
                <div class="gachabuttons">
                    <button
                        v-for="(val, index) of [1,10]"
                        :key="`gachab_${index}`"
                        class="gachabutton"
                        v-on:click="button_trygacha(val)"
                        >
                        <h4>{{ val }}回引く</h4>
                        <div class="gacha-cost">
                            <img src="/gacha/tara30.png"><span>{{ val }}</span>
                        </div>
                    </button>
                    <button
                        v-if="false"
                        class="gachabutton"
                        v-on:click="test"
                        >
                        <h4>test</h4>
                        <div class="gacha-cost">
                            <img src="/gacha/tara30.png"><span>0</span>
                        </div>
                    </button>
                </div>
                <div v-if="lastResults.length" class="gacharesult">
                    <h3>今回のガチャ結果</h3>
                    <table style="text-align: center;">
                        <tr v-for="(result, index) in lastResults" :key="index">
                            <td>
                                <img v-if="result.mask" :src="result.mask" style="width:36px;height:36px;">
                                <img v-if="result.thumbnail" :src="result.thumbnail" style="width:36px;height:36px;">
                            </td>
                            <td>{{ result.rankStr }}</td>
                            <td>
                                {{ result.title }}
                            </td>
                        </tr>
                    </table>
                    <a class="gacha-share-button" :href="gachaShareUrl" target="_blank">
                        <img src="/twitter_logo24.png">
                        Twitterで結果をシェア
                    </a>
                </div>
                <p
                    v-on:click="vm = VM.COLLECTION"
                    class="teikyo">コレクション</p>
                <p
                    v-on:click="vm = VM.HOWTARA"
                    class="teikyo">タラの入手方法</p>
                <div v-if="vm !== VM.DEFAULT" class="overlay-bg" style="">
                    <div v-if="vm === VM.REQ_OK" class="mcwindow" style="">
                        <h4>スペシャルガチャ</h4>
                        <p>タラを{{ gachaInfo.request }}個使用してガチャを10回引きますか？</p>
                        <p>所持タラ {{ tara }} → <span style="color:red;font-weight:bold;">{{ tara - gachaInfo.request }}</span>個</p>
                        <button
                            class="gachabutton"
                            v-on:click="vm = VM.DEFAULT"
                            >
                            キャンセル
                        </button>
                        <button
                            class="gachabutton"
                            v-on:click="lotExecute"
                            >
                            ガチャを引く
                        </button>
                    </div>
                    <div v-if="vm === VM.REQ_NG" class="mcwindow" style="">
                        <h4>スペシャルガチャ</h4>
                        <p style="color:red;font-weight:bold;">タラが不足しています。</p>
                        <p style="font-size:0.9em;">タラはデイリーログインボーナスとサイト内のタラシンボルクリックで獲得できます</p>
                        <button
                            class="gachabutton"
                            v-on:click="vm = VM.DEFAULT"
                            >
                            閉じる
                        </button>
                    </div>
                    <div v-if="vm === VM.LINEUP" class="mcwindow" style="">
                        <h4>提供割合</h4>
                        <ul style="list-style:none;">
                            <li>N : 50%</li>
                            <li>R : 27.7%</li>
                            <li>SR : 8.0%</li>
                            <li>SSR : 12.5%</li>
                            <li>UR : 1.8%</li>
                        </ul>
                        <button
                            class="gachabutton"
                            v-on:click="vm = VM.DEFAULT"
                            >
                            閉じる
                        </button>
                    </div>
                    <div v-if="vm === VM.COLLECTION" class="mcwindow collectionw" style="">
                        <h4>コレクション</h4>
                        <ul style="">
                            <li v-for="(val, index) in collectionData" :key="`collection_${index}`">
                                <img :class="`rank_${val.rank}`" :src="val.thumbnail" style="">
                                {{ val.count }}
                            </li>
                        </ul>
                        <button
                            class="gachabutton"
                            v-on:click="vm = VM.DEFAULT"
                            >
                            閉じる
                        </button>
                    </div>
                    <div v-if="vm === VM.GACHA_RES" class="mcwindow" style="">
                        <h4>ガチャ結果</h4>
                        <ul style="list-style:none;display:flex;justify-content: center;flex-wrap: wrap;position:relative;">
                            <li v-for="(result, index) in results" :key="index" style="">
                                <div style="position:relative;">
                                    <img v-if="result.mask" class="gachaResMask" :src="result.mask">
                                    <img v-if="result.thumbnail" class="gachaResItem fadeIn" :src="result.thumbnail" :style="`animation-delay: ${0.7 * index + 1.7}s;`">
                                </div>
                            </li>
                        </ul>
                        <button
                            class="gachabutton fadeIn"
                            :style="`animation-delay: ${0.7 * results.length + 1.7}s;`"
                            v-on:click="lastResults = results,vm = VM.DEFAULT"
                            >
                            閉じる
                        </button>
                        <div class="gachaMask fadeHide" :style="`animation-duration: 1s;animation-delay:0.5s;background-color: ${gachaInfo.maskColor}`">
                        </div>
                    </div>
                    <div v-if="vm === VM.HOWTARA" class="mcwindow" style="">
                        <h4>タラの入手方法</h4>
                        <p style="font-size:0.9em;">タラはデイリーログインボーナスとサイト内に表示されるタラアイコンをすると入手できます</p>
                        <button
                            class="gachabutton"
                            v-on:click="vm = VM.DEFAULT"
                            >
                            閉じる
                        </button>
                    </div>
                </div>
            </div>
        </section>


    </div>
</template>
<style scoped>
@keyframes fadeIn {
    0% {
        opacity:0;
    }
    100% {
        opacity:1;
    }
}
@keyframes fadeOut {
    0% {
        opacity:1;
    }
    100% {
        opacity:0;
    }
}
@keyframes fadeHide {
    0% {
        opacity:1;
    }
    99% {
        opacity:0;
        width:100%;
    }
    100% {
        width:0%;
    }
}
.fadeIn {
    opacity:0;

    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-fill-mode:forwards;
}
.fadeOut {
    opacity:1;

    animation-name: fadeOut;
    animation-duration: 0.5s;
    animation-fill-mode:forwards;
}
.fadeHide {
    opacity:1;

    animation-name: fadeHide;
    animation-duration: 0.5s;
    animation-fill-mode:forwards;
}
.gachaResMask {

    width:36px;
    height:36px;
    background-color: #8b8b8b;
    border-bottom: solid 3px #fff;
    border-right: solid 3px #fff;
    border-top: solid 3px rgba(0,0,0,.55);
    border-left: solid 3px rgba(0,0,0,.55);
    /*opacity:0;

    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-fill-mode:forwards;*/
}
.gachaResItem {
    position:absolute;
    left:0;top:0;
    width:42px;
    height:42px;
    /*opacity:0;

    animation-name: fadeIn;
    animation-duration: 0.5s;
    animation-fill-mode:forwards;*/

}
.gacha-share-button {
    background-color: #1da1f2;
    border-radius:3px;
    color:white;
    text-decoration:none;
    padding: 6px 12px 6px 12px;
    font-size:16px;
}
.gacha-share-button img {
    vertical-align:bottom;
}
.overlay-bg {
    position:absolute;
    background-color: rgba(0,0,0,.4);
    width:100%;
    height:100%;
    left:0;top:0;
    display:flex;
    justify-content:center;
    align-items:center;
}
.mcwindow {
    padding:12px;
}
.gachaMask {
    position:absolute;
    background-color: #ffffff;
    width:100%;
    height:100%;
    left:0;top:0;
}
.gachabutton:hover {
    box-shadow: 0 0 0 1px white;
}
.gacha-cost {
    display:flex;
    background-color: rgba(255,255,255,.5);
    border-radius: 15px;
    border-top: solid 2px rgba(0,0,0,.4);
    border-left: solid 2px rgba(0,0,0,.4);
    padding:0 16px;
}
.gachabutton {
    margin: 0 8px;
    padding: 4px 8px;
    background-image: url(/stonepattern.png);
    box-shadow: 0 0 0 1px black;
    border-top: solid 3px #b7b7b7;
    border-bottom: solid 3px rgba(0,0,0,.4);
    border-right: solid 3px rgba(0,0,0,.4);
    border-left: solid 3px #b7b7b7;
    outline:none;
}
.gachabutton img {
    width: 30px;
    height:30px;
    margin:0 16px 0 0;
}
.gachabutton span {
    line-height: 30px;
    font-weight:bold;
}
.gacha-bg {
    display:flex;
    justify-content:flex-end;
    padding: 8px 0;
    
}
.collectionw ul {
    list-style:none;
    display:flex;
    flex-wrap:wrap;
    justify-content: center;
}
.collectionw ul li {
    margin: 0 6px;
}
.collectionw ul li img {
    width:36px;height:36px;
    vertical-align: bottom;
}
.collectionw .rank_0 { border:solid 2px white;}
.collectionw .rank_1 { border:solid 2px gray;}
.collectionw .rank_2 { border:solid 2px lightblue;}
.collectionw .rank_3 { border:solid 2px gold;}
.collectionw .rank_4 { border:solid 2px red;}
.taranum {
    background-color: #8b8b8b;
    width: 120px;
    height:26px;
    display: block;
    text-align: right;
    padding: 4px 12px;
    border-bottom: solid 3px #fff;
    border-right: solid 3px #fff;
    border-top: solid 3px rgba(0,0,0,.55);
    border-left: solid 3px rgba(0,0,0,.55);
    color:white;
}
.gacha-visual {
    width:100%;
    color:white;
    font-weight: 300;
    text-align:center;
    font-size: 1.6em;
    background-color: #ffaab7;
}
.gacha-info {
    position:relative;
    text-align:center;
    background-color: #c6c6c6;
    box-shadow: 0 0 0 2px black;
    border-top: solid 4px #ffffff;
    border-bottom: solid 4px #555555;
    border-right: solid 4px #555555;
    border-left: solid 4px #ffffff;
}
.gacha-info h2, .gacha-visual h2 {
    margin-top: 16px;
}

.teikyo {
    text-align: right;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
}
.gacha-info table {
    margin:16px auto;
    min-width:60%;
    text-align:left;
    border-collapse: collapse;
    border-spacing: 0;
}
.gacharesult table {
    font-size: 16px;
}
.gacharesult table img {
    vertical-align:bottom;
}
@media screen and (max-width:959px) {
    .gacha-info {
        padding: 8px 0;
        max-width:100%;
        margin:16px 0;        
    }
    .gacha-mainbanner {
        width:100%;
    }
    .gacharesult {
        padding: 16px 0;
    }
    .gacharesult table {
        width:100%;
    }
    .gacha-info-content {
        padding: 0 16px;
    }
    .teikyo {
        margin: 4px 0;
    }
    .gachabuttons {
        margin: 8px 0;
    }
}
@media screen and (min-width:960px) {
    .gacha-info {
        padding: 16px;
        max-width:800px;
        margin:16px auto;        
    }
    .gacharesult {
        padding: 16px;
    }
}
.gacha-info table tr:nth-of-type(odd) {
    background-color:#c3ebfb;
}
.gacha-info table tr:nth-of-type(even) {
    background-color:#f5f5f5;
}
.gacha-info ol {
    padding-left:2em;
}
.gacha-info li {
    padding: 4px 0;
}

</style>
<script>

export default {
    data () {
        return {
            mt: null,
            lott: {
                entry:[
                    {title:'1', weight:2, stock:1, next:'first', value:false},
                    {title:'2', weight:1, stock:1, next:'second', value:false},
                    {title:'3', weight:1, stock:1, next:'third', value:false},
                ],
                first:[
                    {title:'1', weight:1, stock:1, next:false, value:'g11'},
                    {title:'2', weight:1, stock:1, next:false, value:'g12'},
                    {title:'3', weight:1, stock:1, next:false, value:'g13'},
                ],
                second:[
                    {title:'1', weight:1, stock:1, next:false, value:'g21'},
                    {title:'2', weight:1, stock:1, next:false, value:'g22'},
                    {title:'3', weight:1, stock:1, next:false, value:'g23'},
                    {title:'4', weight:1, stock:1, next:false, value:'g24'},
                    {title:'5', weight:1, stock:1, next:false, value:'g25'},
                    {title:'6', weight:1, stock:1, next:false, value:'g26'},
                ],
                third:[
                    {title:'1', weight:3, stock:1, next:'forth', value:false},
                    {title:'2', weight:3, stock:1, next:'fifth', value:false},
                    {title:'3', weight:1, stock:1, next:'sixth', value:false},
                ],
                forth:[
                    {title:'1', weight:1, stock:1, next:false, value:'g41'},
                    {title:'2', weight:1, stock:1, next:false, value:'g42'},
                    {title:'3', weight:1, stock:1, next:false, value:'g43'},
                    {title:'4', weight:1, stock:1, next:false, value:'g44'},
                ],
                fifth:[
                    {title:'1', weight:1, stock:1, next:false, value:'g51'},
                    {title:'2', weight:1, stock:1, next:false, value:'g52'},
                    {title:'3', weight:1, stock:1, next:false, value:'g53'},
                    {title:'4', weight:1, stock:1, next:false, value:'g54'},
                ],
                sixth:[
                    {title:'1', weight:1, stock:1, next:false, value:'g61'},
                    {title:'2', weight:1, stock:1, next:false, value:'g62'},
                ],
            },
            itemList: [
                // rank 0:N 1:R 2:SR 3:SSR 4:UR
                {   title: '古代の遺物',
                    stitle: '古代の遺物',
                    id: 'g21',     rank: 1,    thumbnail: '/gacha/items/ancientdebris.png',   prcond: 0 },
                {   title: '弓(エンチャ)',
                    stitle: '弓(ｴﾝﾁｬ)',
                    id: 'g41',     rank: 2,    thumbnail: '/gacha/items/bow.png',   prcond: 0 },
                {   title: 'ダイヤ斧(エンチャ)',
                    stitle: 'ﾀﾞｲﾔ斧(ｴﾝﾁｬ)',
                    id: 'g42',     rank: 2,    thumbnail: '/gacha/items/diamondaxe.png',   prcond: 0 },
                {   title: 'ダイヤブーツ(エンチャ)',
                    stitle: 'ﾀﾞｲﾔﾌﾞｰﾂ(ｴﾝﾁｬ)',
                    id: 'g51',     rank: 3,    thumbnail: '/gacha/items/diamondfoot.png',   prcond: 0 },
                {   title: 'ダイヤパンツ(エンチャ)',
                    stitle: 'ﾀﾞｲﾔﾊﾟﾝﾂ(ｴﾝﾁｬ)',
                    id: 'g52',     rank: 3,    thumbnail: '/gacha/items/diamondleg.png',   prcond: 0 },
                {   title: 'エンチャ本（）',
                    stitle: 'ｴﾝﾁｬ本（）',
                    id: 'g43',     rank: 2,    thumbnail: '/gacha/items/enchant.png',   prcond: 0 },
                {   title: '金ブーツ(エンチャ)',
                    stitle: '金ﾌﾞｰﾂ(ｴﾝﾁｬ)',
                    id: 'g44',     rank: 1,    thumbnail: '/gacha/items/goldfoot.png',   prcond: 0 },
                {   title: 'ネザライトブーツ(エンチャ)',
                    stitle: 'ﾈｻﾞﾗｲﾄﾌﾞｰﾂ(ｴﾝﾁｬ)',
                    id: 'g61',     rank: 4,    thumbnail: '/gacha/items/netherfoot.png',   prcond: 0 },
                {   title: 'ネザライトの欠片',
                    stitle: 'ﾈｻﾞﾗｲﾄの欠片',
                    id: 'g22',     rank: 1,    thumbnail: '/gacha/items/netheritescrap.png',   prcond: 0 },
                {   title: '鱈',
                    stitle: '鱈',
                    id: 'g11',     rank: 0,    thumbnail: '/gacha/items/tara.png',   prcond: 0 },
                {   title: '泣く黒曜石',
                    stitle: '泣く黒曜石',
                    id: 'g23',     rank: 1,    thumbnail: '/gacha/items/bedrock.png',   prcond: 0 },
                {   title: '鎖',
                    stitle: '鎖',
                    id: 'g12',     rank: 0,    thumbnail: '/gacha/items/chain.png',   prcond: 0 },
                {   title: 'ダイヤチェスト(エンチャ)',
                    stitle: 'ﾀﾞｲﾔﾁｪｽﾄ(ｴﾝﾁｬ)',
                    id: 'g53',     rank: 3,    thumbnail: '/gacha/items/diamondchest.png',   prcond: 0 },
                {   title: 'ダイヤヘルメット(エンチャ)',
                    stitle: 'ﾀﾞｲﾔﾍﾙﾒｯﾄ(ｴﾝﾁｬ)',
                    id: 'g54',     rank: 3,    thumbnail: '/gacha/items/diamondhead.png',   prcond: 0 },
                {   title: 'ダイヤ',
                    stitle: 'ﾀﾞｲﾔ',
                    id: 'g24',     rank: 1,    thumbnail: '/gacha/items/diamond.png',   prcond: 0 },
                {   title: '金ブロック',
                    stitle: '金ﾌﾞﾛｯｸ',
                    id: 'g25',     rank: 1,    thumbnail: '/gacha/items/goldblock.png',   prcond: 0 },
                {   title: '鉄ブーツ(エンチャ)',
                    stitle: '鉄ﾌﾞｰﾂ(ｴﾝﾁｬ)',
                    id: 'g26',     rank: 1,    thumbnail: '/gacha/items/ironfoot.png',   prcond: 0 },
                {   title: 'ネザライトインゴット',
                    stitle: 'ﾈｻﾞﾗｲﾄｲﾝｺﾞｯﾄ',
                    id: 'g62',     rank: 3,    thumbnail: '/gacha/items/netheriteingot.png',   prcond: 0 },
                {   title: 'レール',
                    stitle: 'ﾚｰﾙ',
                    id: 'g13',     rank: 0,    thumbnail: '/gacha/items/rail.png',   prcond: 0 },
            ],
            results: [],
            lastResults: [],
            tara: 0,
            vm: 0,
            VM: {   DEFAULT:0,  REQ_OK:1,  REQ_NG:2,    GACHA_RES:3,    LINEUP:4,   COLLECTION:5,
                    HOWTARA:6,  LSNOTICE:7    },
            gachaInfo: {request:0, maskColor:'#ffffff'},
            prColorTbl: ['#ffffff', '#ffffff', 'gray', 'lightgreen', 'pink'],
            collection: {}
        }
    },
    methods: {
        button_trygacha(num = 1) {
            this.getUserData();
            this.gachaInfo.request = num;
            this.vm = this.tara < this.gachaInfo.request ? this.VM.REQ_NG : this.VM.REQ_OK;
        },
        lotExecute() {
            this.getUserData();
            if(this.tara < this.gachaInfo.request) {
                this.vm = this.VM.DEFAULT;
                return;
            }
            let results = [];
            let rank = 0;
            for(let i = 0; i < this.gachaInfo.request; i++) {
                let res = this.lot();
                let item = this.exchange(res);
                rank = rank < item.rank ? item.rank : rank;
                results.push(item);
            }
            this.results = results;
            let base = 0;
            if(rank >= 1) {
                base = rank - 1;
                rank -= base;
            }
            let pr = this.mt.nextInt(0, 65535) % (rank + 1);
            console.log(rank, base, pr);
            this.gachaInfo.maskColor = this.prColorTbl[base + pr];
            this.$setUserData(
                (data) => {
                        data.tara -= this.gachaInfo.request;
                        if(!data.collection) {
                            data.collection = {};
                        }
                        for(let res of this.results) {
                            data.collection[res.id] = data.collection[res.id] ? data.collection[res.id] + 1 : 1;
                        }
                        return data;
                    }
                );
            this.getUserData();
            this.vm = this.VM.GACHA_RES;
        },
        test() {
            let analy = this.lotanalysis();
            console.log(analy);
            let list = this.makeoutlist(analy);
            console.log(list);
            let sum = 0;
            let rankout = [0,0,0,0,0];
            for(let [key,val] of Object.entries(list)) {
                sum += val.out;
                let item = this.exchange({result:key});
                val.title = item.title;
                val.rank = item.rank;
                rankout[item.rank] += val.out;
            }
            console.log(sum);
            console.log(rankout);
        },
        exchange(res) {
            const rank = ['N','R','SR','SSR','UR'];
            for(let i = 0; i < this.itemList.length; i++) {
                if(res.result === this.itemList[i].id) {
                    let item = this.itemList[i];
                    switch(item.rank) {
                        case 0:
                        case 1:
                            item.mask = '/gacha/tara72.png';
                            break;
                        case 2:
                            item.mask = '/gacha/tarag72.png';
                            break;
                        case 3:
                        case 4:
                            item.mask = '/gacha/taras72.png';
                            break;
                    }
                    item.rankStr = rank[item.rank];
                    return item;
                }
            }
            return false;
        },
        lot(entry = 'entry') {
            let max = 0;
            if(this.mt && this.lott[entry]) {
                const tbl = this.lott[entry];
                for(let i = 0; i < tbl.length; i++) {
                    max += tbl[i].weight;
                }
                let res = this.mt.nextInt(0, max);
                for(let i = 0; i < tbl.length; i++) {
                    res -= tbl[i].weight;
                    if(res < 0) {
                        if(tbl[i].next !== false) {
                            let res = this.lot(tbl[i].next);
                            res.tbl.push(entry);
                            return res;
                        } else {
                            return {tbl:[entry], result:tbl[i].value};
                        }
                    }
                }
            }
            return false;
        },
        lotanalysis(entry = 'entry', total = 1) {
            let max = 0;
            if(this.lott[entry]) {
                const tbl = this.lott[entry];
                let result = {};
                for(let i = 0; i < tbl.length; i++) {
                    max += tbl[i].weight;
                    let key = tbl[i].next ? 'next_' + tbl[i].next : tbl[i].value;

                    if(result[key]) {
                        result[key].weight += tbl[i].weight;
                    } else {
                        result[key] = { weight:tbl[i].weight, next:tbl[i].next, value:tbl[i].value };
                    }
                }
                for( const [key, value] of Object.entries(result) ) {
                    value.out = total / max * value.weight;
                    if(value.next) {
                        value.nresult = this.lotanalysis(value.next, value.out);
                    }
                }
                return result;
            }
            return false;
        },
        makeoutlist(tbl) {
            let result = {};
            for(const [key, val] of Object.entries(tbl)) {
                if(val.next) {
                    if(val.nresult) {
                        let tmp = this.makeoutlist(val.nresult);
                        for(const [key2, val2] of Object.entries(tmp)) {
                            if(!result[key2]) {
                                result[key2] = { out: 0 };
                            }
                            result[key2].out += val2.out;
                        }
                    }
                } else {
                    if(!result[val.value]) {
                        result[val.value] = { out: 0 };
                    }
                    result[val.value].out += val.out;
                }
            }
            return result;
        },
        getUserData() {
            let userData = this.$getLocalStorage('userData');
            if(userData) {
                this.tara = userData.tara;
                this.collection = userData.collection ? userData.collection : {};
            }
            return userData;
        },
        onChangeUserData() {
            this.getUserData();
        }
    },
    computed: {
        gachaResultText() {
            const add = this.lastResults.length > 1 ? ` ${this.lastResults.length}連`:" 単発";
            let text = `AKUKIN建設 TARAガチャ${add}%0D%0A%0D%0A`;
            for(let [key, val] of Object.entries(this.lastResults)) {
                text += val.rankStr + ': ' + val.stitle + '%0D%0A';
            }
            return text;
        },
        gachaShareUrl() {
            return "https://twitter.com/share?url=https://akukin.jp/gacha&text="+this.gachaResultText+"&count=none&lang=ja";
        },
        collectionData() {
            let collection = [];
            for(let item of this.itemList) {
                collection.push({
                    thumbnail: item.thumbnail,
                    count: this.collection && this.collection[item.id] ? this.collection[item.id] : 0,
                    rank: item.rank
                    });
            }
            return collection;
        }
    },
    mounted() {
        /* https://magicant.github.io/sjavascript/mt.html */
        this.mt = new MersenneTwister();
        this.getUserData();

        this.$nuxt.$on('changeUserData', this.onChangeUserData);
    },
    head() {
        return {
            htmlAttrs: {
                lang: 'ja'
            },
            title: 'スペシャルタラガチャフェス',
            meta: [
                { hid: 'description', name: 'description', content: `AKUKIN建設スペシャルTARAガチャフェス開催中！` },
                { hid: 'keywords', name: 'keywords', content: 'AKUKIN建設,アクキン建設,あくきん建設,TARAガチャ,タラガチャ,鱈ガチャ' },
                { hid: 'og:site_name', property: 'og:site_name', content: 'AKUKIN建設' },
                { hid: 'og:type', property: 'og:type', content: 'website' },
                { hid: 'og:url', property: 'og:url', content: 'https://akukin.jp/' + this.$nuxt.$route.path },
                { hid: 'og:title', property: 'og:title', content: `スペシャルタラガチャフェス | AKUKIN建設` },
                { hid: 'og:description', property: 'og:description', content: 'AKUKIN建設スペシャルタラガチャフェス開催中！' },
                { hid: 'og:image', property: 'og:image', content: 'https://akukin3-dot-minatoaquajp.an.r.appspot.com/gacha/taragacha_ogp_summary2.png' },
                { name: 'twitter:card', content: 'summary' }
            ],
        }
    },
}
</script>
