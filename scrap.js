const axios = require("axios")
const cheerio =require("cheerio")
const express=require("express")




axios.get("https://www.ssbcrack.com/notification")
.then((res)=>{
        let notifications=[];
        const $=cheerio.load(res.data);
        // // const notification=$(".td-module-container");
        // const notification=$(".td-module-title");
        // console.log(notification.text())
        
        // console.log(res.data)

    //     $(".td-module-title").each((index,element)=>{
    //         // console.log($(element).text())
    //         const notification=$(element).text()
    //         notifications[index]={notification};
    //     })
    //   console.log(notifications)  


    const notif= $("#tdi_43").children(".tdb_module_header").children(".td-module-container").children(".td-module-meta-info").children(".td-module-title");

        notif.each((index,element)=>{
            // console.log($(element).text())
            const notification=$(element).text();
            notifications[index]={notification};
        })
        console.log(notifications)
    
        //storing this data into database
        axios.post("https://ssbnotifications-864d7-default-rtdb.firebaseio.com/notifications.json",notifications)
        .then((res)=> console.log("data success"),
        (error)=>{
            console.log(error);
        }
        )
})
    
