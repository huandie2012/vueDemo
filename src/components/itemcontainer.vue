 <template>
	<section>
	  	<header>
	  		<div v-if="fatherComponent == 'home'" class="week-num">{{level}}</div>
	  		<div v-if="fatherComponent == 'question'" class="week-num">题目{{itemNum}}</div>
	  	</header>
	  	<div v-if="fatherComponent == 'home'" class="home-logo-outer">
	  		<div class="home-logo"></div>
	  		<router-link to="question" class="start-btn" ></router-link>
	  	</div>
	  	<div v-if="fatherComponent == 'question'" class="question-item-outer">
	  		<div class="question-item" v-if="itemDetail.length > 0">
	  			<div class="question-title">{{itemDetail[itemNum-1].topic_name}}</div>
	  			<ul>
	  				<li class="question-list" v-for="(item,index) in itemDetail[itemNum-1].topic_answer" @click="choosed(index,item.topic_answer_id)">
	  					<span class="option-type" :class="{'has-choosed':choosedNum == index}">{{chooseType(index)}}</span>
	  					<span class="option-answer">{{item.answer_name}}</span>
	  				</li>
	  			</ul>
	  		</div>
	  		<div class="next-btn" v-if="itemNum < itemDetail.length" @click="nextItem"></div>
	  		<div class="next-btn" v-else @click="submitAnswer"></div>
	  	</div>
	</section>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    name: 'itemcontainer',
    props: ['fatherComponent'],
    created() {
    	this.initializeData();
    },
    data() {
      	return {
      		test: 123,
      		itemId: null, //题目ID
			choosedNum: null, //选中答案索引
			choosedId:null //选中答案id
        }
    },
    computed: mapState([//mapState相当于映射，map其实就是一个在store文件中的映射而已，就是不用让你要调用一个值需要敲这么多代码：this.$state.itemnum;而只需要用itemnum，mapAction，mapMutations的原理是一样样的
    	'itemNum',
    	'level',
    	'itemDetail'
    ]),
    methods: {
        ...mapActions([//mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）
  			'addNum', 
  			'initializeData'
  		]),
  		//选中的答案信息
	  	choosed(type,id) {
	  		this.choosedNum = type;
	  		this.choosedId = id;
	  	},
  		//点击下一题
  		nextItem() {
  			if (this.choosedNum !== null) {
	  			this.choosedNum = null;
	  			//保存答案, 题目索引加一，跳到下一题
	  			this.addNum(this.choosedId)
  			}else{
  				alert('您还没有选择答案哦')
  			}
  		},
  		//索引0-3对应答案A-D
	  	chooseType: type => {
	  		switch(type){
	  			case 0: return 'A';
	  			case 1: return 'B';
	  			case 2: return 'C';
	  			case 3: return 'D';
	  		}
	  	},
	  	//到达最后一题，交卷，请空定时器，跳转分数页面
	  	submitAnswer(){
	  		if (this.choosedNum !== null) {
	  			this.addNum(this.choosedId)
	  			this.$router.push('score')
  			}else{
  				alert('您还没有选择答案哦')
  			}
	  	}
    }
}
</script>

<style scoped lang="less">
header{
	position: absolute;
    height: 4.59375rem;
    width: 2.03125rem;
    top: -0.8125rem;
    right: 1rem;
	background: url("http://nos.netease.com/house-public/cloud.png") no-repeat;
	background-size: 100% 100%;
	z-index: 10;
	.week-num{
		line-height: 0.4375rem;
		font-family: '微软雅黑';
    	font-weight: 600;
    	font-size: 0.375rem;
    	margin-top: 3.5rem;
    	color: #a57c50;
    	text-align: center;
	}
}
.home-logo-outer{
	position: absolute;
	top: 2.5625rem;
	left: 0.625rem;
	.home-logo{
		width: 8.21875rem;
		height: 7.265625rem;
		background: url("http://nos.netease.com/house-public/home.png") no-repeat;
		background-size: 100% 100%;
	}
	.start-btn{
		display: block;
		width: 2.71875rem;
		height: 1.3125rem;
		background: url("http://nos.netease.com/house-public/start.png") no-repeat;
		background-size: 100% 100%;
		margin-top: 0.484375rem;
		margin-left: 3rem;
	}
}
.question-item-outer{
    background-repeat: no-repeat;
    margin-top: 2.5625rem;
    margin-left: 0.625rem;
    height: 7.265625rem;
    width: 8.21875rem;
	background: url("http://nos.netease.com/house-public/questionBack.png") no-repeat;
	background-size: 100% 100%;
	position: relative;
    .question-item{
		height: 4.375rem;
	    width: 5rem;
	    padding-top: 1.5rem;
		margin-left: 1.875rem;
		font-family: "微软雅黑";
		font-size: 0.40625rem;
		.question-title{
			color: #ffffff;
			line-height: 0.4375rem;
			text-align: left;
		}
		.question-list{
			margin-top: 0.25rem;
			text-align: left;
			.option-type{
				display: inline-block;
				height: .453125rem;
			    width: .453125rem;
			    border: 1px solid #fff;
			    border-radius: 50%;
			    line-height: .453125rem;
			    text-align: center;
			    margin-right: .1875rem;
			    font-size: .3125rem;
			    color: #ffffff;
			}
			.has-choosed{
				background-color: #ffd400;
				color: #575757;
				border-color: #ffd400;
			}
			.option-answer{
				display: inline-block;
			    // width: .453125rem;
			    line-height: .453125rem;
			    font-size: .375rem;
			    color: #ffffff;
			}
		}
    }
    .next-btn{
    	position: absolute;
    	display: block;
	    height: 1.3125rem;
	    width: 2.71875rem;
	    position: absolute;
	    top: 7.7rem;
	    left: 50%;
	    margin-left: -1.2rem;
	    background: url("http://nos.netease.com/house-public/next.png") no-repeat;
		background-size: 100% 100%;
    }
}
</style>
