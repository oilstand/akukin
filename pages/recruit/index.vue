<template>
    <div>
        <div class="recruit-visual">
            <h2>採用情報</h2>
        </div>
        <section class="section_recruit">
            <div>AKUKIN建設では新入社員を募集しています</div>
            <div class="fresh-member">新卒採用</div>
            <div class="skill-member">ポテンシャル採用</div>
        </section>
    </div>
</template>
<style>
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
section h2, .recruit-visual h2 {
    margin: 16px 0;
}

section {
    text-align:center;
    padding: 16px;
}
section h2 {
    margin: 16px 0;
}

section p {
    margin: 16px;
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
  head() {
    return {
        title: '採用情報',
    }
  }
}
</script>
