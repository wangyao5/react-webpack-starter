
export const fetchData = (callback)=>{
    fetch('http://oaapi.lecommons.com/Le/menu/findby?accessKey=trhjfrw3tg0lu1i6gincea7o94vqt2bq&sid=wangyao6@le.com=5xbd2l668uwq6eh7spdqthvjd0tf&nomeanforie=1517535753361',{
        method:'GET',
        // headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json' 
        // },
        // body:JSON.stringify({'data':json})
    }).then(response => response.json()).then(data=>{
        console.log(data);console.dir(callback);callback(data)}
    )
}