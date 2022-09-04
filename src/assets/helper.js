export default {
    isAuthenticated() {
        // get login data if present in storage and return state if session not expired
        if (localStorage.loginData) {
            let loginData = JSON.parse(localStorage.loginData);
            // session timer 1 day
            if (Date.now() - loginData.timestamp < 1000 * 60 * 60 * 24) {
                return true
            } else {
                return false
            }
        } else {
            return false;
        }
    }
}