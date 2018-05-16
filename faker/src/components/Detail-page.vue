<template>
  <div class="detail-page">
    <div class="panel">
      <div class="header">
        <span class="topic-title">
<span v-show="pagedetail.top">置顶</span>
          {{pagedetail.title}}
        </span>
      </div>
      <div class="details">
        <span>发布于{{createDate}}前</span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <input type="submit" value="收藏">
      </div>
      <div class="text-content">
        <div class="innertext" v-html="pagedetail.content">

        </div>
      </div>
    </div>
    <div class="panel">
      <div class="reply-header">
        <span>{{pagedetail.reply_count}}</span>
      </div>
          <div class="reply" v-for="item of pagedetail.replies">
            <div class="author-detail">
              <a href='' class="avatar-img">
                <img :src="item.author.avatar_url"  alt="">
              </a>
            </div>
            <div v-html="item.content"></div>
          </div>

    </div>
    <div class="panel"></div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "Detail-page",
    data: function () {
      return {
        data: this.$store.state.certain,
        pagedetail: {}
      }
    },
    computed: {
      createDate:function () {
        var date=new Date();
        var test=this.pagedetail.create_at;
        console.log(test);
        console.log(this);
        console.log(this.pagedetail);
        console.log(this.pagedetail.create_at);
      }
    },
    mounted: function () {
      console.log(this.data);
      axios.get('https://cnodejs.org/api/v1/topic/' + this.data + '')
        .then(function (data) {
          console.log(data);
          this.pagedetail = data.data.data;
        }.bind(this));
    }
  }
</script>

<style scoped>
.author-detail .avatar-img img {
  width: 30px;
  height: 30px;
}

</style>
