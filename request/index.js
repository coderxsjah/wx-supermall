//定义事务锁
let ajaxTimes = 0;
//使用promise封装request请求
export function request(params){
    ajaxTimes ++;
    //显示加载中中
    wx.showLoading({
        title: "加载中",
        mask: true,
        // success: (result)=>{
        // },
        // fail: ()=>{},
        // complete: ()=>{}
    });

    const baseUrl = "https://api-hmugo-web.itheima.net/api/public/v1"
    return new Promise((resolve,reject)=>{
        wx.request({
            url: baseUrl + params.url,
            data: params.data? params.data:{},
            header:params.header? params.header: {'content-type':'application/json'},
            method: params.method==="GET"?"GET":params.method,
            dataType: params.dataType? params.dataType: 'json',
            responseType: params.responseType?params.responseType:'text',
            success: (result)=>{
                resolve(result);
            },
            fail: (err)=>{
                reject(err);
            },
            complete: ()=>{
                ajaxTimes --;
                if(ajaxTimes===0){
                    wx.hideLoading();
                }
                
            }
        });
    })
}