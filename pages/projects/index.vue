<template>
    <div class="projects">
        <div class="project-visual">
            <div class="project_edge"></div>
            <a class="project_view project_tara" href="/projects#tara"><div>タラ事業</div></a>
            <div class="project_edge"></div>
        </div>
        <section id="tara">
            <h2>タラ事業</h2>
            <p>ホロ鯖の食糧問題を解決するため、ガーディアントラップによるタラ漁を行っています。</p>
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
    width: 10%;
    height: calc(100% * 3);
    background-color:lightblue;
    line-height: calc(480px * 3);
    overflow:hidden;
}
.project-visual > .project_view {
    display:flex;
    align-items:center;
    justify-content:center;
    text-decoration:none;
    color:white;
    background-color:gray;
    font-weight:500;
    font-size: 1.8em;
}
@media screen and (max-width:959px) {
    .project-visual {
        height:100px;
        flex-wrap:wrap;
    }
    .project_tenku, .project_becon, .project_tour {
        background-size: 100% auto;
    }
    .project_tara {
        background-image: url(~assets/project_tara.png);
        background-position-x: center;
        background-size: 100% auto;
        background-position-y: center;
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
    .project_tara {
        background-image: url(~assets/project_tara.png);
        background-position-x: center;
    }
    .project-visual > .project_view {
        width: 60%;
    }
    .project-visual > .project_view:hover {
    }
    .project-visual > div > div, .project-visual > a > div {
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
