import Cookies from 'vue-cookies'

/**
 * token 存取操作
 * @type {string}
 */
export const TOKEN_KEY = 'Token'
export const TOKEN_USER = 'UserDataZ'
export const setUser = (data) => {
	Cookies.set(TOKEN_USER,JSON.stringify(data),{expires:1});
}
export const getUser = () => {
	const UserData = Cookies.get(TOKEN_USER)
	if(UserData) return UserData
	else return false
}
export const clearUser = () => {
	Cookies.remove(TOKEN_USER);
}