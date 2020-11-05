<template>
    <div class="projects">
        <div class="project-visual">
            <div class="project_edge"></div>
            <a class="project_view project_tenku" href="/projects#road"><div>天空地下交通事業</div></a>
            <a class="project_view project_becon" href="/projects#becon"><div>ビーコン事業</div></a>
            <a class="project_view project_tour" href="/projects#tours"><div>観光施設事業</div></a>
            <div class="project_edge" style="width:10%;"></div>
        </div>
        <section id="road">
            <h2>天空地下交通事業</h2>
            <p>ホロ村地下に広がるアクアライン、ホロ村上空に広がる天空アクアラインをはじめとする交通関連施設の建設・運用・メンテナンスを行っています。</p>
        </section>
        <section id="becon">
            <h2>ビーコン事業</h2>
            <p>ホロ村周辺にビーコンの建造・メンテナンスを行いホロ村周辺の利便性向上を目指しています。</p>
        </section>
        <section id="tours">
            <h2>観光施設事業</h2>
            <p>ホロ鯖の新しい観光名所の設置を目的として施設の建設を行っています。また、季節のイベントなどに向けた建造物の設置も行っています。</p>
        </section>

    </div>
</template>
<style>
.project-visual {
    width:100%;
    color:white;
    font-weight: 300;
    text-align:center;
    background-position-y:-48px;
    font-size: 1.6em;
    display:flex;
    overflow: hidden;
    justify-content: center;
    background-color: lightpink;
}
.project-visual > .project_edge {
    width: 15%;
    height: calc(100% * 3);
    background-color:lightblue;
    line-height: calc(480px * 3);
    transform: translate3d(0px, -480px, 0px) rotate3d(0, 0, 1, 45deg);
    overflow:hidden;
}
.project-visual > .project_view {
    display:block;
    text-decoration:none;
    color:white;
    background-color:gray;
}
.project-visual > div > div, .project-visual > a > div {
    display:block;
    width:100%;
    height:100%;
    text-align:left;
}
@media screen and (max-width:959px) {
    .project-visual {
        height:300px;
        flex-wrap:wrap;
    }
    .project_tenku, .project_becon, .project_tour {
        background-size: 100% auto;
    }
    .project_tenku {
        background-image: url(/road_wide.png);
    }
    .project_becon {
        background-image: url(/becon_wide.png);
    }
    .project_tour {
        background-image: url(/tours_wide.png);
    }

    .project-visual > .project_edge {
        display:none;
    }
    .project-visual > .project_view {
        width: 100%;
        height: 100px;
    }
    .project-visual > div > div, .project-visual > a > div {
        padding: 0 4px;
    }
}
@media screen and (min-width:960px) {
    .project-visual {
        height:480px;
    }
    .project_tenku {
        background-image: url(/road.png);
        background-position-x: -150px;
        background-size: cover;
    }
    .project_becon {
        background-position-x: -250px;
        background-position-y: 220px;
        background-size: cover;
        background-image: url(/becon.png);
    }
    .project_tour {
        background-size: cover;
        background-image: url(/tours.png);
    }
    .project-visual > .project_view {
        font-weight:500;
        width: 20%;
        height: calc(100% * 3);
        line-height: calc(480px * 3);
        transform: translate3d(0px, -480px, 0px) rotate3d(0, 0, 1, 45deg);
        transition: transform .3s ease-out;
    }
    .project-visual > .project_view:hover {
        transform: translate3d(-100px, -480px, 0px) rotate3d(0, 0, 1, 45deg);
    }
    .project-visual > div > div, .project-visual > a > div {
        transform: rotate3d(0, 0, 1, -45deg);
        margin-left: 30px;
    }

}
.projects section {
    text-align:center;
    padding: 16px;
}
.projects section h2 {
    margin: 16px 0;
}

.projects section p {
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
        title: '事業',
    }
  }
}
</script>
