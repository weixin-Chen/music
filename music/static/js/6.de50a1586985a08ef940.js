webpackJsonp([6],{BING:function(t,n){},BRgg:function(t,n,i){"use strict";n.b=function(){var t=s()({},c.b,{uin:0,needNewCode:1,platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,c.c)},n.a=function(t){var n=s()({},c.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,c.c)};var e=i("woOf"),s=i.n(e),o=i("Gak4"),c=i("T452")},s3x3:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("Dd8w"),s=i.n(e),o=i("kvay"),c=i("BRgg"),a=i("T452"),r=i("NYxO"),u=i("PvFA"),g={computed:s()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(r.c)(["topList"])),data:function(){return{songs:[],rank:!0}},created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;this.topList.id?Object(c.a)(this.topList.id).then(function(n){console.log(n),n.code===a.a&&(t.songs=t._normalizeSongs(n.songlist))}):this.$router.push("/rank")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var i=t.data;i.songid&&i.albummid&&n.push(Object(u.a)(i))}),n}},components:{MusicList:o.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:this.rank,title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var l=i("VU/8")(g,f,!1,function(t){i("BING")},"data-v-77b4dcb1",null);n.default=l.exports}});
//# sourceMappingURL=6.de50a1586985a08ef940.js.map