import config from "@/config.js"

const formatTime = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':');
};

const formatNumber = (n) => {
    n = n.toString();
    return n[1] ? n : '0' + n;
};

const inArray = (search, array) => {
    for (var i in array) {
        if (array[i] === search) {
            return true;
        }
    }

    return false;
};

function getLocalFilePath(path) {
    if (path.indexOf('_www') === 0 || path.indexOf('_doc') === 0 || path.indexOf('_documents') === 0 || path.indexOf('_downloads') === 0) {
        return path
    }
    if (path.indexOf('file://') === 0) {
        return path
    }
    if (path.indexOf('/storage/emulated/0/') === 0) {
        return path
    }
    if (path.indexOf('/') === 0) {
        var localFilePath = plus.io.convertAbsoluteFileSystem(path)
        if (localFilePath !== path) {
            return localFilePath
        } else {
            path = path.substr(1)
        }
    }
    return '_www/' + path
}

function dataUrlToBase64(str) {
    var array = str.split(',')
    return array[array.length - 1]
}

var index = 0
function getNewFileId() {
    return Date.now() + String(index++)
}

function biggerThan(v1, v2) {
    var v1Array = v1.split('.')
    var v2Array = v2.split('.')
    var update = false
    for (var index = 0; index < v2Array.length; index++) {
        var diff = v1Array[index] - v2Array[index]
        if (diff !== 0) {
            update = diff > 0
            break
        }
    }
    return update
}

//path转化base64
export function pathToBase64(path) {
    return new Promise(function(resolve, reject) {
        if (typeof window === 'object' && 'document' in window) {
            if (typeof FileReader === 'function') {
                var xhr = new XMLHttpRequest()
                xhr.open('GET', path, true)
                xhr.responseType = 'blob'
                xhr.onload = function() {
                    if (this.status === 200) {
                        let fileReader = new FileReader()
                        fileReader.onload = function(e) {
                            resolve(e.target.result)
                        }
                        fileReader.onerror = reject
                        fileReader.readAsDataURL(this.response)
                    }
                }
                xhr.onerror = reject
                xhr.send()
                return
            }
            var canvas = document.createElement('canvas')
            var c2x = canvas.getContext('2d')
            var img = new Image
            img.onload = function() {
                canvas.width = img.width
                canvas.height = img.height
                c2x.drawImage(img, 0, 0)
                resolve(canvas.toDataURL())
                canvas.height = canvas.width = 0
            }
            img.onerror = reject
            img.src = path
            return
        }
        if (typeof plus === 'object') {
            plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function(entry) {
                entry.file(function(file) {
                    var fileReader = new plus.io.FileReader()
                    fileReader.onload = function(data) {
                        resolve(data.target.result)
                    }
                    fileReader.onerror = function(error) {
                        reject(error)
                    }
                    fileReader.readAsDataURL(file)
                }, function(error) {
                    reject(error)
                })
            }, function(error) {
                reject(error)
            })
            return
        }
        if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
            wx.getFileSystemManager().readFile({
                filePath: path,
                encoding: 'base64',
                success: function(res) {
                    resolve('data:image/png;base64,' + res.data)
                },
                fail: function(error) {
                    reject(error)
                }
            })
            return
        }
        reject(new Error('not support'))
    })
}

//base64转化path
export function base64ToPath(base64) {
    return new Promise(function(resolve, reject) {
        if (typeof window === 'object' && 'document' in window) {
            base64 = base64.split(',')
            var type = base64[0].match(/:(.*?);/)[1]
            var str = atob(base64[1])
            var n = str.length
            var array = new Uint8Array(n)
            while (n--) {
                array[n] = str.charCodeAt(n)
            }
            return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], { type: type })))
        }
        var extName = base64.split(',')[0].match(/data\:\S+\/(\S+);/)
        if (extName) {
            extName = extName[1]
        } else {
            reject(new Error('base64 error'))
        }
        var fileName = getNewFileId() + '.' + extName
        if (typeof plus === 'object') {
            var basePath = '_doc'
            var dirPath = 'uniapp_temp'
            var filePath = basePath + '/' + dirPath + '/' + fileName
            if (!biggerThan(plus.os.name === 'Android' ? '1.9.9.80627' : '1.9.9.80472', plus.runtime.innerVersion)) {
                plus.io.resolveLocalFileSystemURL(basePath, function(entry) {
                    entry.getDirectory(dirPath, {
                        create: true,
                        exclusive: false,
                    }, function(entry) {
                        entry.getFile(fileName, {
                            create: true,
                            exclusive: false,
                        }, function(entry) {
                            entry.createWriter(function(writer) {
                                writer.onwrite = function() {
                                    resolve(filePath)
                                }
                                writer.onerror = reject
                                writer.seek(0)
                                writer.writeAsBinary(dataUrlToBase64(base64))
                            }, reject)
                        }, reject)
                    }, reject)
                }, reject)
                return
            }
            var bitmap = new plus.nativeObj.Bitmap(fileName)
            bitmap.loadBase64Data(base64, function() {
                bitmap.save(filePath, {}, function() {
                    bitmap.clear()
                    resolve(filePath)
                }, function(error) {
                    bitmap.clear()
                    reject(error)
                })
            }, function(error) {
                bitmap.clear()
                reject(error)
            })
            return
        }
        if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
            var filePath = wx.env.USER_DATA_PATH + '/' + fileName
            wx.getFileSystemManager().writeFile({
                filePath: filePath,
                data: dataUrlToBase64(base64),
                encoding: 'base64',
                success: function() {
                    resolve(filePath)
                },
                fail: function(error) {
                    reject(error)
                }
            })
            return
        }
        reject(new Error('not support'))
    })
}

//判断文件格式
export function fileFormat(url){
	if(!url) return false
	//字符串分割
	let arr = url.split('.')
	let str = arr[arr.length-1]
	//大小写统一
	let format = str.toLowerCase()
	//图片判断
	if(format == 'jpg' || format == 'png' || format == 'jpeg'){
		return 'image'
	}
	if(format == 'doc' || format == 'docx'){
		return 'doc'
	}
	if(format == 'ppt' || format == 'pptx'){
		return 'ppt'
	}
	if(format == 'xls' || format == 'xlsx'){
		return 'xls'
	}
	if(format == 'txt'){
		return 'txt'
	}
	return 'other'
}

//下载
export function downloadFile(url){
	const type = fileFormat(url)
	if(type == 'image'){
		return downloadImage(url)
	}else{
		return downloadEnclosure(url)
	}
}

//保存图片
function downloadImage(url){
	return new Promise((resolve,reject) =>{
		uni.showLoading({
			title: '加载中'
		});
		uni.downloadFile({
			url:url,
			success: (resp) => {
				if (resp.statusCode === 200) {
					uni.saveImageToPhotosAlbum({
						filePath: resp.tempFilePath,
						success: function (res) {
							resolve(res)
						},
						fail: function (e) {
							reject('取消保存')
						},
					})
				}
			},
			fail:(err) =>{
				reject('图片下载失败')
			},
			complete: function(){
				uni.hideLoading();
			}
		})
	})
}

//下载附件
function downloadEnclosure(url){
	return new Promise((resolve,reject) =>{
		previewFile(url).then(res =>{
			resolve(res)
		},err =>{
			reject(err)
		})
	})
}

//预览文件
export function previewFile(url){
	return new Promise((resolve,reject) =>{
		uni.showLoading({
			title: '加载中'
		});
		uni.downloadFile({
			url:url,
			success: (resp) => {
				if (resp.statusCode === 200) {
					uni.openDocument({
						filePath: resp.tempFilePath, 
						showMenu: true,
						// 如果文件名包含中文，建议使用escape(resp.tempFilePath)转码，防止ios和安卓客户端导致的差异
						success: function(res) {
							resolve(res)
						},
						fail:function(err){
							reject(err)
						}
					});
				}
			},
			fail:(err) =>{
				reject(err)
			},
			complete: function(){
				uni.hideLoading()
			}
		})
	})
}

//预览图片
export function previewImage(url){
	return new Promise((resolve,reject) =>{
		uni.previewImage({
			urls: [url],
		})
		resolve()
	})
}

//选择文件
export function chooseFile({menu = [],list = []}){
	let menus = [
		{
			title: '拍摄',
			action: () => chooseImageFromCamera()
		},
		{
			title: '从相册选择',
			action: () => chooseImageFromAlbum()
		},
		{
			title: '从聊天记录选择',
			action: () => chooseImageFromMessageFile()
		}
	];
	let newMenus = []
	if(menu.length){
		menu.forEach(item =>{
			newMenus.push(item)
		})
	}
	if(list.length){
		list.forEach(item =>{
			newMenus.push(menus[item - 1])
		})
	}
	return new Promise((resolve, reject) => {
		uni.showActionSheet({
			itemList: newMenus.map((menu) => menu.title),
			success: ({ tapIndex }) => {
				if (newMenus[tapIndex]) {
					newMenus[tapIndex].action().then(res =>{
						resolve(res)
					},err =>{
						reject(err)
					})
				}
			}
		})
	});
}
//拍照
function chooseImageFromCamera(){
	return new Promise((resolve, reject) => {
		uni.chooseImage({
			count: 1,
			sourceType: ['camera'],
			mediaType: ['image','video'],
			sizeType: ['compressed'],
			success: ({ tempFiles }) => {
				resolve(tempFiles[0]);
			},
			fail: (err) => {reject(err)}
		});
	});
}
//相册
function chooseImageFromAlbum(){
	return new Promise((resolve, reject) => {
		uni.chooseImage({
			count: 1,
			sourceType: ['album'],
			mediaType: ['image','video'],
			sizeType: ['compressed'],
			success: ({ tempFiles }) => {
				resolve(tempFiles[0]);
			},
			fail: (err) => {reject(err)}
		});
	});
}
//聊天记录
function chooseImageFromMessageFile(){
	return new Promise((resolve, reject) => {
		uni.chooseMessageFile({
			count: 1,
			// type: 'image',
			success: ({ tempFiles }) => {
				resolve(tempFiles[0]);
			},
			fail: (err) => {reject(err)}
		});
	});
}


//上传文件
export function upload(data){
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中'
		});
		uni.uploadFile({
			url: config.BaseUrl + '/api/file/web/upload',
			filePath: data.path,
			type:data.type,
			name: 'file',
			formData: {
				fileName:data.name || '',
			},
			success: (res) => {
				resolve(JSON.parse(res.data))
			},
			fail: (err) =>{
				reject(err)
			},
			complete:function(){
				uni.hideLoading();
			}
		})
	});
}

//上传文件方法
export function uploadMedia(fileInfo) {
	if (!fileInfo || !fileInfo.url) {
		throw new Error('文件路径错误');
	}

	return http('qiniu/token', fileInfo, 'POST').then((resp) => {
		const fileURL = resp.url;
		return new Promise((resolve, reject) => {
			uni.uploadFile({
				url: resp.upload_url,
				filePath: fileInfo.url,
				name: 'file',
				formData: {
					key: resp.key,
					token: resp.token
				},

				success(e) {
					if (e.statusCode == 200) {
						resolve(fileURL);
					} else {
						reject(new Error('文件上传出错: ' + e.statusCode));
					}
				},

				fail: function (err) {
					reject(err);
				}
			});
		});
	});
}

//获取时间格式
export function getDate(type){
	let myDate = new Date()
	let year = myDate.getFullYear()
	let month = String(myDate.getMonth() + 1)
	let day = myDate.getDate().toString()
	let hour = myDate.getHours().toString()
	let minutes = myDate.getMinutes().toString()
	let second = myDate.getSeconds().toString()
	if(month.length == 1){
		month = '0' + month
	}
	if(day.length == 1){
		day = '0' + day
	}
	if(hour.length == 1){
		hour = '0' + hour
	}
	if(minutes.length == 1){
		minutes = '0' + minutes
	}
	if(second.length == 1){
		second = '0' + second
	}
	if(type.toLowerCase() == 'yyyy-mm-dd hh:mm'){
		return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes
	}else if(type.toLowerCase() == 'yyyy-mm-dd'){
		return year + '-' + month + '-' + day
	}else if(type.toLowerCase() == 'yyyy-mm-dd hh:mm:ss'){
		return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + second
	}
}


//查看微信本地下载的文件
// uni.getSavedFileList({
// 	success: function(res) {
// 		console.log(res);
// 	},
// })