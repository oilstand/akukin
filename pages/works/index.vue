<template>
    <div>
        <div class="works-visual">
            <h2>実績</h2>
        </div>
        <section class="section_works">
            <ul>
                <li v-for="data in pickups" :key="data.url">
                    <router-link v-if="data.url != '#'" :to="data.url">
                        <img :src="data.thumb">
                        <h3>{{data.date}}<br>{{data.title}}</h3>
                    </router-link>
                    <div v-else>
                        <img :src="data.thumb">
                        <h3>{{data.date}}<br>{{data.title}}</h3>
                    </div>
                </li>
            </ul>
        </section>

    </div>
</template>
<style>
.works-visual {
    width:100%;
    color:white;
    font-weight: 300;
    text-align:center;
    font-size: 1.6em;
    background-color: lightblue;
}
.works-visual h2 {
    margin: 16px 0;
}
@media screen and (max-width:959px) {
    .section_works {
        text-align:center;
        padding: 16px 4px;
    }
    .section_works ul li {
        width: calc(50% - 8px);
        padding: 4px;
    }

}
@media screen and (min-width:960px) {
    .section_works {
        text-align:center;
        padding: 16px;
    }
    .section_works ul li {
        width: calc(25% - 16px);
        padding:8px;
    }

}
.section_works h2 {
    margin: 16px 0;
}
.section_works ul {
    display:flex;
    flex-wrap:wrap;
    list-style:none;
    max-width:1200px;
    margin:0 auto;
}
.section_works ul li a {
    text-decoration:none;
    color:black;
    display:block;
}
.section_works ul li a {
    transition:background-color 0.4s;
}
.section_works ul li a:hover {
    background-color:#ffecef;
    transition:background-color 0.2s;
}
.section_works ul li img {
    width: 100%;
}
.section_works ul li h3 {
    text-align:left;
    font-weight:normal;
    font-size:1em;
}
</style>
<script>
export default {
  async asyncData({ params }) {

    const a = await import(`~/posts/worksdats.json`)
    let newsdats = a.default;

    return {pickups:newsdats};
  },
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
        title: '実績',
        meta: [
            { hid: 'description', name: 'description', content: `AKUKIN建設の実績を掲載しています。` },
            { hid: 'og:title', property: 'og:title', content: `実績 | AKUKIN建設` },
            { hid: 'og:description', property: 'og:description', content: "AKUKIN建設の実績を掲載しています。" },
        ],
    }
  }
}
</script>
