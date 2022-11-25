export function alert(...msgs) {
    // console.log("alert", arguments);
    let content = msgs[0] && msgs[1] ? msgs[1] : msgs[0];
    if (typeof content == 'object') content = content.message || content.errMsg || content;
    return new Promise((resolve, reject) => {
        uni.showModal({
            title: msgs[1] && msgs[0] ? msgs[0] : '提示',
            content: content,
            confirmText: msgs[2] || '确定',
            showCancel: false,

            success() {
                resolve();
            },

            fail(e) {
                reject(e);
            }
        });
    });
}
export function alertErr(msg, err) {
    return alert(msg, err.message || err.errMsg || '');
}
export function alertError(msg, err) {
    return alertErr(msg, err);
}
export function confirm(title, message, options = {}) {
    return new Promise((resolve, reject) => {
        uni.showModal({
            title: title,
            content: message,
            ...options,
            showCancel: true,

            success(res) {
                resolve(res.confirm);
            },

            fail(e) {
                reject(e);
            }
        });
    });
}
export function dangerConfirm(title, message, options = {}) {
    return confirm(title, message, {
        confirmColor: '#ff0000',
        ...options
    });
}
export function toast(title, duration = 1000, icon = 'success', mask = true) {
    return new Promise((resolve, reject) => {
        uni.showToast({
            title: title,
            mask: mask,
            icon: icon,
            duration: duration,

            success() {
                setTimeout(resolve, duration);
            },

            fail(e) {
                reject(e);
            }
        });
    });
}
