<template>
	<view class="release-page">
		<view class="release-wrap">
			<view class="introduce-wrap">
				<view class="introduce-plate">
					<textarea name="" id="" cols="30" rows="10" placeholder="请输入商品描述" v-model="intro"></textarea>
				</view>
				<view class="item-content">
					<!-- <view class="item-content-left upload-content">
						<view class="profile-wrap">
							<view class="profile-item" v-if="!item.length">
								<text style="color: #999; font-size: 24rpx; overflow: hidden;">.docx、.doc、.ppt、.pptx、.rar、.pdf，30MB以内</text>
							</view>
							<view class="profile-item" v-for="(subitem,subindex) in item" :key="subindex">
								<view class="img-wrap">
									<text class="iconfont icon-file" v-if="fileFormat(subitem.url) != 'image'"></text>
									<image :src="subitem.url" mode="aspectFill" class="img" v-if="fileFormat(subitem.url) == 'image'"></image>
									<text class="img-name">{{subitem.originalName}}</text>
								</view>
								<view class="delete" @click="deleteFile(item,index)">
									删除
								</view>
							</view>
						</view>
					</view>
					<view class="item-content-right" v-if="!item.remark.length">
						<button class="btn" @click="uploadFile(item,index)">点击上传</button>
					</view> -->
					<view class="item" v-for="(item,index) in list" :key="index">
						<view class="image-wrap">
							<image class="image" :src="item.url" mode="aspectFill"></image>
						</view>
					</view>
					<view class="item" @click="uploadFile(item,index)">
						<view class="upload-btn">
							<text class="text">+</text>
						</view>
					</view>
				</view>
			</view>
			
			<view class="price-wrap">
				<view class="left">
					<text>价格</text>
				</view>
				<view class="right">
					<text>￥</text>
					<input class="input" type="text" placeholder="0.00" v-model="price">
					<text class="icon iconfont icon-more"></text>
				</view>
			</view>
			
			<view class="submit-btn" @click="submit">
				<view class="btn">
					发布
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import * as util from '@/utils/util';
import { release } from '@/api/release/release.js'
export default{
	data(){
		return{
			intro:'',
			list:[],
			price:'',

		}
	},
	methods:{
		//上传文件
		uploadFile(){
			uni.chooseImage({
				count:1,
				success:(res)=>{
					console.log(res);
					uniCloud.uploadFile({
						cloudPath: '2' + '.png',
						filePath:res.tempFilePaths[0],
						success: (res) => {
							console.log(res);
							this.src = res.fileID
							this.list.push({
								url:res.fileID,
								originalName:res.fileID
							})
						}
					})
				},
				fail(err){
					console.log(err)
				}
			})
		},
		
		// uploadFile(item,index){
		// 	const that = this
		// 	console.log(item,index);
		// 	util.chooseFile({list:[1,2]}).then(res =>{
		// 		util.upload({path:res.path,type:res.type,name:res.name}).then(res =>{
		// 			that.formData[index].defaultValue = [res.data]
		// 			that.formData[index].remark = res.data.url
		// 			this.$globalData.toast({title:'上传成功'})
		// 		})
		// 	},err =>{
		// 		this.$globalData.toast({title:'已取消'})
		// 	}).catch(err =>{
		// 		this.$globalData.toast({title:'上传失败'})
		// 	})
		// },
		deleteFile(item,index){
			console.log(item,index);
			const that = this
			that.formData[index].defaultValue = []
			that.formData[index].remark = null
		},
		//添加文件类型判断
		fileFormat(url){
			return util.fileFormat(url)
		},
		
		submit(){
			console.log('发布');
			const param = {
				intro:this.intro,
				price:this.price,
				list:this.list,
			}
			console.log(param);
			
			release(param).then(res =>{
				console.log(res);
			})
			
			
			// uniCloud.callFunction({
			// 	name:'release',
			// 	data:param,
			// 	success: (res)=> {
			// 		console.log(res);
			// 	},
			// 	fail(err) {
			// 		console.log(err,'失败');
			// 	}
			// })
		}
	}
}
</script>

<style lang="scss" scoped>
.release-page{
	.release-wrap{
		.introduce-wrap{
			display: flex;
			flex-direction: column;
			padding: 0 32rpx;
			.introduce-plate{
				
			}
			.item-content{
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
				padding: 12rpx 20rpx 20rpx;
				.item{
					margin-right: 20rpx;
					margin-bottom: 20rpx;
					width: 30%;
					border: 2rpx solid #ddd;
					border-radius: 12px;
					.image-wrap{
						width: 100%;
						height: 200rpx;
						border-radius: 12px;
						.image{
							width: 100%;
							height: 100%;
							border-radius: 12px;
						}
					}
					.upload-btn{
						display: flex;
						justify-content: center;
						align-items: center;
						width: 100%;
						height: 200rpx;
						border-radius: 12px;
						background-color: #e1e1e1;
						.text{
							font-size: 88rpx;
							color: #fff;
						}
					}
				}
				.item:nth-child(3n){
					margin-right: 0;
				}
			}
		}
		
		.price-wrap{
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin: 0 32rpx;
			.right{
				flex: 1;
				display: flex;
				justify-content: flex-end;
				text-align: right;
				.input{
				}
			}
		}
		
		.submit-btn{
			margin: 0 32rpx;
			margin-top: 44rpx;
			.btn{
				width: 100%;
				line-height: 40px;
				text-align: center;
				padding: 8rpx 0;
				color: #fff;
				background-color: #d1e321;
			}
		}
	}
}
</style>