class customTemplateComponent7{
  renderMessage(msgData){
      if(msgData?.message[0]?.component?.payload?.template_type==='bannerTemplate'){
        var HTMLtext = '<div class="bannerTemplate_wrapper">';
        if (msgData.message[0].component.payload.banner_type == "video") {
          HTMLtext += '<video loop mute autoplay src="'+msgData?.message[0]?.component?.payload?.banner_image+'"></video>';
        } else {
          HTMLtext += '<img src="'+msgData?.message[0]?.component?.payload?.banner_image+'" />';
        }
        
        if (msgData.message[0].component.payload.banner_header || msgData.message[0].component.payload.banner) {
          HTMLtext += '<div class="bannerTemplate_content">';
        }
        if (msgData.message[0].component.payload.banner_header) {
          HTMLtext += '<div class="bannerTemplate_header">'+msgData?.message[0]?.component?.payload?.banner_header+'</div>';
        }
        if (msgData.message[0].component.payload.banner_text) {
          HTMLtext += '<div class="bannerTemplate_text">'+msgData?.message[0]?.component?.payload?.banner_text+'</div>';
        }
        if (msgData.message[0].component.payload.banner_header || msgData.message[0].component.payload.banner) {
          HTMLtext += '</div>';
        }
        HTMLtext += '</div>\
        <div class="bannerTemplate_buttons">';
        for (var i=0; i<msgData.message[0].component.payload.buttons.length; i++) {
            HTMLtext += '<button type="button" class="bannerTemplate_button" onclick="submitBannerOption(\''+msgData.message[0].component.payload.buttons[i].payload+'\');">'+msgData.message[0].component.payload.buttons[i].title+'</button>';
        }
        HTMLtext += '</div>';
        
          return parseHTML(HTMLtext);      
      }else{
          return false;
      }
  } 
}

/***seat booking template events start here***/
function submitBannerOption(usertext) {
        
    chatWindowInstance.sendMessage(usertext);
    //chatInitialize.sendMessage($('.chatInputBox'), string);
}