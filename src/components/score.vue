<template>
    <div id="score">
        <div class="your-score">
            <div class="score-num"><span>{{score}}</span>分！</div>
            <div class="score-tip">{{scoreTips}}</div>
        </div>
        <div class="share-btn" @click="maskShow"></div>
        <div class="wechat">
            <div>扫一扫下方二维码，获取答案。</div>
            <img src="http://nos.netease.com/house-public/1507711552.png">
        </div>
        <div class="share-mask" v-show="isShow" @click="maskShow">
            <img src="http://nos.netease.com/house-public/mask.png">
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    name: 'score',
    created(){
        this.computedScore();
        this.getScoreTip();
        document.body.style.backgroundImage = 'url(./static/img/4-1.jpg)';
    },
    data() {
        return {
            isShow: false,
            score: 0,
            scoreTips: "",//分数提示
            rightAnswer: [2, 7, 12, 13, 18], //正确答案
            scoreTipsArr: ['你说，是不是把知识都还给小学老师了？','还不错，但还需要继续加油哦！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','你也太聪明啦，葡萄之家欢迎你！']
        }
    },
    computed: mapState(['answerid']),
    methods: {
        //计算分数
        computedScore() {
            this.answerid.forEach((item, index) => {
                if (item == this.rightAnswer[index]) {
                    this.score += 20;
                }
            })
        },
        //根据分数显示提示
        getScoreTip: function (){
            if(this.score <= 20) {
                this.scoreTips = this.scoreTipsArr[0];
                return;
            }
            if(this.score <= 40) {
                this.scoreTips = this.scoreTipsArr[1];
                return;
            }
            if(this.score <= 60) {
                this.scoreTips = this.scoreTipsArr[2];
                return;
            }
            if(this.score <= 80) {
                this.scoreTips = this.scoreTipsArr[3];
                return;
            }
            if(this.score <= 100) {
                this.scoreTips = this.scoreTipsArr[4];
                return;
            }
        },
        maskShow: function (){
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style scoped lang="less">
#score{
    width: 100%;
    height: 100%;
    background: url("http://nos.netease.com/house-public/back.jpg") no-repeat;
    background-size: 100% 100%;
    padding-top: 0.75rem;
    .your-score{
        width: 6.0625rem;
        height: 5.6875rem;
        background: url("http://nos.netease.com/house-public/scoreBack.png") no-repeat;
        background-size: 100% 100%;
        font-family: Microsoft YaHei;
        margin: 0 auto;
        position: relative;
        .score-num{
            width: 100%;
            text-align: center;
            text-indent: 1.0625rem;
            padding-top: 2.9375rem;
            font-family: Microsoft YaHei,Tahoma,Helvetica,Arial;
            color: #a51d31;
            font-size: 0.875rem;
            font-weight: 900;
        }
        .score-tip{
            margin-top: 0.2rem;
            width: 5.625rem;
            margin-left: .375rem;
            color: #3e2415;
            font-size: .40625rem;
            text-align: center;
        }
    }
    .share-btn{
        width: 3.765625rem;
        height: 1.5rem;
        margin: .5rem auto 0;
        background: url("http://nos.netease.com/house-public/share.png") no-repeat .25rem 0;
        background-size: 3.640625rem 100%;
    }
    .wechat{
        // width: 3.3125rem;
        margin-top: 0.9375rem;
        div{
            color: #664718;
            font-size: .296875rem;
            font-family: Microsoft YaHei;
            // width: 4.375rem;
            text-align: center;
            font-weight: 500;
        }
        img{
            height: 3.3125rem;
            width: 3.3125rem;
            margin: 0 auto;
            margin-top: 0.3125rem;
        }
    }
    .share-mask{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,.8);
        img{
            display: block;
            height: 6.859375rem;
            width: 7.46875rem;
            margin-top: 0.3125rem;
            margin-left: 1.3rem;
        }
    }
}
</style>