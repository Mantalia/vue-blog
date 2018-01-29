export default {
	state: {
		token: 'token'
	},
	mutations: {

	},
	actions: {
		loginAuth({commit, state}, that) {
			const options = {
				method: 'post',
				url: '/user/login',
				data: {
					username: that.username,
					password: that.password
				}
			}
			that.$axios(options).then(res => {
				if (res.data.code === '200') {
					that.$router.push({ name: 'index' })
				} else {
					console.log('登录失败')
				}
			}).catch(err => {
				console.log(err)
			})
		}
	}
}
