class customTemplateComponent8{
  renderMessage(msgData){
      if(msgData?.message[0]?.component?.payload?.template_type==='custom_table'){
		  if (msgData.message[0].component.payload.text){
	var HTMLtext = '<div class="messageBubble tableChart" style="padding: 20px;">';
	//var HTMLtext = '<div class="bubble-msg-with-img"><div class="bubble-msg" style="background-color: rgb(234, 236, 240); color: rgb(16, 24, 40);">'+msgData.message[0].component.payload.text+'</div></div>';
	var HTMLtext = '<section class="table-wrapper-section"><span style="font-size: 14px;">'+msgData.message[0].component.payload.text+'</span></section>';
		   }
 HTMLtext += '<section class="table-wrapper-section">\
 <table id="" class="table-regular-view" >\
  <thead><tr>';
  msgData.message[0].component.payload?.columns.forEach((key)=>{
    HTMLtext += '<th>'+key+'</th>';
  })
  HTMLtext += '</tr></thead/';
 
   msgData.message[0].component.payload?.elements.forEach((tableRow)=>{
	   HTMLtext += '<tr>';
	   tableRow.Values.forEach((cellValue)=>{
		   if(cellValue[1] == "button"){
			   var cls = "cursor: pointer !important;color: #009dab !important;";
			   var clickf = 'onclick="submitItemOption(\''+cellValue['0']+'\');"';
		   }
		   
    HTMLtext += '<td style="'+cls+'" '+clickf+'>'+cellValue['0']+'</td>';
  })
  HTMLtext += '</tr>';
  })
  
 								
    
  HTMLtext += '</tr>\
</table></section></div>';
       
        
          return parseHTML(HTMLtext);      
      }else{
          return false;
      }
  } 
}
function submitItemOption(usertext) {
        
    chatWindowInstance.sendMessage(usertext);
    //chatInitialize.sendMessage($('.chatInputBox'), string);
}