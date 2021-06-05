const axios=require("axios")

const notifications=[];
axios.get("https://ssbnotifications-864d7-default-rtdb.firebaseio.com/notifications.json")
    .then(res=>{
        // console.log(res.data[0])
        for(const key in res.data){
            notifications.push(res.data[key]);
        }
        // console.log(notifications)
        notifications.map(ele =>{
                // console.log(ele)
                for(const i in ele){
                    console.log(ele[i].notification)
                }
        })
    })
