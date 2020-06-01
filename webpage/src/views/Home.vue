<template>
  <el-container>
    <el-header>
      <i
        class="el-icon-s-operation"
        @click="drawer = true"
        type="primary"
        style="margin-left: 16px;"
      >Ann's</i>
      <div class="demo-image__preview">
        <el-image :src="url" :preview-src-list="srcList" class="header-image"></el-image>
      </div>
      <div class="divider">
        <span>
          <el-tooltip class="item" effect="dark" content="即将跳转我的主页" placement="top">
            <a href="http://www.baidu.com" target="_blank">我的主页</a>
          </el-tooltip>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <el-tooltip class="item" effect="dark" content="即将跳转我的博客" placement="top">
            <a href="http://www.baidu.com" target="_blank">个人博客</a>
          </el-tooltip>
        </span>
        <el-divider direction="vertical"></el-divider>
        <span>
          <el-tooltip class="item" effect="dark" content="即将跳转API" placement="top">
            <a href="htpp://www.baidu.com" target="_blank">API</a>
          </el-tooltip>
        </span>
      </div>
    </el-header>

    <el-main>
      <div class="block" id="app">
        <!-- <span class="demonstration">默认 Hover 指示器触发</span> -->
        <el-carousel height="620px" top="50%">
          <!-- <el-carousel-item v-for="item in 1" :key="item"> -->
          <!-- <h3 class="showWords">{{ show }}</h3> -->
          <h3 class="showWords">{{show}}</h3>
          <br>
          <h3 class="showWordssse">{{showsse}}</h3>

          <!-- </el-carousel-item> -->
        </el-carousel>
      </div>
    </el-main>
    <div class="drawer">
      <el-drawer title="个人简介" :visible.sync="drawer" :direction="direction" :with-header="false">
        <el-image :src="url" :preview-src-list="srcList" class="drawer-image"></el-image>
        <div class="userName">Ann's</div>
        <el-collapse v-model="activeName" accordion>
          <el-collapse-item title="我的主页" name="1" class="collapseItem">
            <div>我们飞去吧，是时候了，我们原是自由的鸟儿</div>
            <div>—普希金(俄国诗人，黑山与情敌决斗身亡)</div>
          </el-collapse-item>
          <el-collapse-item title="个人简介" name="2" class="collapseItem">
            <div>人生劳苦/然而人 诗意地栖居在大地之上</div>
            <div>——荷尔德林(德国)</div>
          </el-collapse-item>
          <el-collapse-item title="我的博客" name="3" class="collapseItem">
            <div>隐隐熟透的光、山丘和森林</div>
            <div>将述说喜悦和再生的荣耀</div>
            <div>——蒙塔莱(意大利)</div>
          </el-collapse-item>
          <el-collapse-item title="call me" name="4" class="collapseItem">
            <div>我们的日子必宁静光明/幸福就是我们的心情</div>
            <div>——华兹华斯(英国)</div>
          </el-collapse-item>
        </el-collapse>
      </el-drawer>
    </div>
    <el-divider content-position="center">这是一条分割线 虽然分割了也没好看到哪里去</el-divider>
    <el-footer>
      <span>© 2020/5/17 嘻嘻毛</span>
    </el-footer>
    <audio
      autoplay="autoplay"
      controls="controls"
      preload="auto"
      src="../assets/HeySong.mp3"
      loop="true"
      hidden="true"
    ></audio>
  </el-container>
</template>

<script>
import axios from 'axios'
// import Vue from 'vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  // name: 'Home',
  // components: {
  //   // HelloWorld
  // },

  data () {
    return {
      drawer: false,
      direction: 'rtl',
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      ],
      show: '',
      showsse: '',
      activeName: '1',
      firstPlayFlag: true
    }
  },

  mounted () {
    const DEBUG = true
    let BASE_URL = ''
    if (DEBUG === true) {
      BASE_URL = 'http://localhost:3000/'
    } else {
      BASE_URL = 'http://api.12ms.xyz/'
    }
    // console.log(this)
    const that = this
    axios({
      method: 'GET',
      url: BASE_URL + '/getrand',
      responseType: 'json'
    })
      .then(function (res) {
        // console.log(that)
        console.log(res) // 在console中查看数据
        that.show = res.data.data
        // console.log(res.data.data)
      })
      .catch(function (error) {
        console.log(error)
      })
    if (this.firstPlayFlag) {
      const source = new EventSource(BASE_URL + '/getrand_sse')
      source.addEventListener(
        'message',
        e => {
          // console.log(e)
          const data = JSON.parse(e.data)
          that.showsse = data.data
          console.log(data.data)

          // console.log(e)
        },
        false
      )
      source.addEventListener('pause', e => {
        console.log('123')
        source.close()
      }, false)
      this.firstPlayFlag = false
    }
  }
}
</script>

<style lang="less" scoped>
.el-header,
.el-footer {
  position: relative;
  background-color: #e8e8e8;
  color: #333;
  // text-align: center;
  line-height: 60px;
}

.el-main {
  background-color: pink;
  color: #333;
  text-align: center;
  // line-height: 520px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  // opacity: 0.75;
  // line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: pink;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: pink;
}

.el-header .header-image,
.drawer .drawer-image {
  position: absolute;
  left: 110px;
  top: 5px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.divider {
  position: absolute;
  top: 0;
  right: 35px;
}
a {
  text-decoration: none;
  color: #333;
}
.block .showWords {
  color: #333;
  font-size: 24px;
}
.drawer .drawer-image {
  margin-top: 20px;
  margin-left: 40px;
  width: 100px;
  height: 100px;
}
.drawer .userName {
  margin: 150px 170px 20px;
  font-size: 24px;
  font-weight: 700;
}
.collapseItem {
  margin-left: 10px;
}
.el-footer span {
  font-size: 12px;
  color: #333;
  margin-left: 590px;
}
</style>
