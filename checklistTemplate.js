class customTemplateComponent10{
  renderMessage(msgData){
      if(msgData?.message[0]?.component?.payload?.template_type==='checkListTemplate'){
		var HTMLtext = '<div class="check-list-template">\
    <div class="profile-photo">\
        <div class="user-account avtar" style="background-image:url(https://demo-bots.kore.ai:443/api/getMediaStream/market/f-17e41b97-ed25-542d-ab61-87f679965c6f.png?n=1517148785&amp;s=IkNRYlluanlZSnJpOTN2K01URjFZVVNMQ0dVV3V1MUVWZUd0RUtTeW5Tcmc9Ig$$)"></div>\
    </div>\
    <div class="check-list-template-content">';
	 if (msgData.message[0].component.payload.title){
			   HTMLtext += '<div class="templateHeading" style="padding-left: 10px;">'+msgData.message[0].component.payload.title+'</div>';
		   }
        HTMLtext += '<div class="check-list-elements" style="padding-left: 10px;">';
		msgData.message[0].component.payload?.elements.forEach((keys)=>{
            HTMLtext += '<div class="checklist-element clickable" id="0" onclick="submitItemOption(\''+keys.title+'\');" actionobj="{&quot;payload&quot;:&quot;659b3877848c287712&quot;,&quot;title&quot;:&quot;Performance appraisal tasks&quot;,&quot;type&quot;:&quot;postback&quot;}">\
    <div class="checklist-heading">\
        <div class="headig-with-progress">\
            <div class="element-title-block">'+keys.title+'</div>\
            <div class="checklist-progress" id="progress'+keys.id+'" style="--percentage: '+keys.taskProgress+';">\
                <div class="checklist-percentage"> '+keys.taskProgress+' </div>\
            </div>\
        </div>';
		if (keys.subInformation){
            HTMLtext += '<div class="checklist-options">';
			keys.subInformation.forEach((key)=>{
			HTMLtext += '<div class="option-info">\
                <div class="option-title">'+key.title+'</div>\
                <div class="option-value">'+key.value+'</div>\
            </div>';
			})
			HTMLtext += '</div>';
		}
		if (keys.subElements &&  keys.subElements.length){
			HTMLtext += '<div class="checklist-subElements">';
			keys.subElements.forEach((sub_key)=>{
				HTMLtext += '<div class="subelement-info">\
													<div class="subelement-header">\
														<div class="subelemt-title-text">'+sub_key.title+'</div>';
														if (sub_key.rightContent && sub_key.rightContent.icon){
															HTMLtext += '<div class="icon-block" actionObj="">\
																<img src="'+sub_key.rightContent.icon+'">\
															</div>';
														}
													HTMLtext += '</div>';
													if(sub_key.values){
														HTMLtext += '<div class="subelemnt-values">';
															sub_key.values.forEach((val)=>{
																HTMLtext += '<div class="subelement-value">\
																	<span class="val-title">'+val.title+'</span>';
																	if (val.icon){
																			HTMLtext += '<span class="val-icon"><img src="'+val.icon+'"></span>';
																	}
																	HTMLtext += '<span class="val-value">'+val.value+'</span>';
																HTMLtext += '</div>';
															})
														HTMLtext += '</div>';
													}
											HTMLtext += '</div>';
			})
			HTMLtext += '</div>';
		} 
        HTMLtext += '</div>\
</div>';
	  })
       HTMLtext += ' </div>\
    </div>\
</div>';
		
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

/*
[
    {
        "type": "text",
        "component": {
            "type": "template",
            "payload": {
                "type": "template",
                "payload": {
                    "template_type": "checkListTemplate",
                    "title": "Here's your to-do tasks :",
                    "elements": [
                        {
                            "title": "Performance appraisal tasks",
                            "taskProgress": "75%",
                            "id": 0,
                            "subInformation": [
                                {
                                    "title": "Total tasks :",
                                    "value": 4
                                },
                                {
                                    "title": "Completed :",
                                    "value": 3
                                },
                                {
                                    "title": "In progress :",
                                    "value": 1
                                }
                            ],
                            "default_action": {
                                "payload": "659b3877848c287712",
                                "title": "Performance appraisal tasks",
                                "type": "postback"
                            }
                        },
                        {
                            "title": "Manager offboarding checklist",
                            "taskProgress": "0%",
                            "id": 1,
                            "subInformation": [
                                {
                                    "title": "Total tasks :",
                                    "value": 5
                                },
                                {
                                    "title": "Completed :",
                                    "value": 0
                                },
                                {
                                    "title": "In progress :",
                                    "value": 5
                                }
                            ],
                            "default_action": {
                                "payload": "7d2367c1a7fd680b13",
                                "title": "Manager offboarding checklist",
                                "type": "postback"
                            }
                        }
                    ]
                }
            }
        },
        "cInfo": {
            "body": "{\"type\":\"template\",\"payload\":{\"template_type\":\"checkListTemplate\",\"title\":\"Here's your to-do tasks :\",\"elements\":[{\"title\":\"Performance appraisal tasks\",\"taskProgress\":\"75%\",\"id\":0,\"subInformation\":[{\"title\":\"Total tasks :\",\"value\":4},{\"title\":\"Completed :\",\"value\":3},{\"title\":\"In progress :\",\"value\":1}],\"default_action\":{\"payload\":\"659b3877848c287712\",\"title\":\"Performance appraisal tasks\",\"type\":\"postback\"}},{\"title\":\"Manager offboarding checklist\",\"taskProgress\":\"0%\",\"id\":1,\"subInformation\":[{\"title\":\"Total tasks :\",\"value\":5},{\"title\":\"Completed :\",\"value\":0},{\"title\":\"In progress :\",\"value\":5}],\"default_action\":{\"payload\":\"7d2367c1a7fd680b13\",\"title\":\"Manager offboarding checklist\",\"type\":\"postback\"}}]}}"
        }
    }
]
*/