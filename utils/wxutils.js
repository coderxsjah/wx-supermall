//使用promise封装一些wx内置请求
export const getSetting = ()=>{
    return new Promise((resolve,reject)=>{
        wx.getSetting({
            success: (result)=>{
                resolve(result);
            },
            fail: (err)=>{
                reject(err);
            },
            complete: ()=>{}
        });
    }) 
}

export const openSetting = ()=>{
    return new Promise((resolve,reject)=>{
        wx.openSetting({
            success: (result)=>{
                resolve(result);
            },
            fail: (err)=>{
                reject(err);
            },
            complete: ()=>{}
        });
    })
}

export const chooseAddress = ()=>{
    return new Promise((resolve,reject)=>{
        wx.chooseAddress({
            success: (result)=>{
                resolve(result);
            },
            fail: (err)=>{
                reject(err);
            },
            complete: ()=>{}
        });
    })
}