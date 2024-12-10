class customTemplateComponentSSO{
  renderMessage(msgData){
      if(msgData?.message[0]?.component?.payload?.template_type==='ssoTemplate'){
        var HTMLtext = '<div class="ssoTemplate_wrapper">\
        <div class="ssoTemplate_header">'+msgData.message[0].component.payload.title+'</div>\
        <div class="ssoTemplate_buttons">';
        for (var i=0; i<msgData.message[0].component.payload.buttons.length; i++) {
            HTMLtext += '<a id="ssoTemplate_button_link" class="ssoTemplate_button" href="'+msgData.message[0].component.payload.buttons[i].url+'" target="_blank" onclick=ssoClick(this);><img class="invertible" src="'+msgData.message[0].component.payload.buttons[i].image+'" /></a>';
        }
        HTMLtext += '<div id="ssoTemplate_button_done" class="ssoTemplate_button"></div></div></div>';
        
          return parseHTML(HTMLtext);      
      }else{
          return false;
      }
  } 
}

/***seat booking template events start here***/
function ssoClick(e) {
    //chatWindowInstance.sendMessage(usertext);
    //chatInitialize.sendMessage($('.chatInputBox'), string);
    //alert(JSON.stringify(e));
    e.style.display = "none";
    var ee = document.getElementById("ssoTemplate_button_done");
    ee.style.display = "block";
}

/*
message={
    "type":"template",
    "payload":{
        "template_type":"ssoTemplate",
        "title": "Welcome! Please use an option below to sign-in and continue.",
        "buttons": [
            {
                "image":"https://user-images.githubusercontent.com/1770056/58111071-c2941c80-7bbe-11e9-8cac-1c3202dffb26.png",
                "url": context.googleAuth.customAuthenticationURL
            },{
                "image":"https://cdn.iconscout.com/icon/free/png-256/free-facebook-74-189794.png",
                "url": context.googleAuth.customAuthenticationURL
            }
            ]
        }
    };

    */