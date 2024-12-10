class customTemplateComponent11{
  renderMessage(msgData){
      if(msgData?.message[0]?.component?.payload?.template_type==='worknotesTemplate'){
		var HTMLtext = '<div class="worknote-template">';
  if (msgData.message[0].component.payload.sliderView){
    HTMLtext += '<button class="close-button" title="Close"><img src="data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jbG9zZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0NC4wMDAwMDAsIC0yMjkuMDAwMDAwKSIgZmlsbD0iIzhBOTU5RiI+CiAgICAgICAgICAgIDxnIGlkPSJjbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ0LjAwMDAwMCwgMjI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjE0IDEuNCAxMi42IDAgNyA1LjYgMS40IDAgMCAxLjQgNS42IDcgMCAxMi42IDEuNCAxNCA3IDguNCAxMi42IDE0IDE0IDEyLjYgOC40IDciPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></button>';
  }
  HTMLtext += '<div class="worknote-template-content">';
    if (msgData.message[0].component.payload.title){
      HTMLtext += '<div class="WtemplateHeading">\
                <div class = "worknotes-icon"> \
                  <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMC44Mjc1IDEuMzMzMjVINS4xNzIzOUM0LjYzNTc1IDEuMzMzMjQgNC4xOTI4NCAxLjMzMzI0IDMuODMyMDQgMS4zNjI3MkMzLjQ1NzMxIDEuMzkzMzMgMy4xMTI4NCAxLjQ1OTA0IDIuNzg5MjggMS42MjM5QzIuMjg3NTIgMS44Nzk1NiAxLjg3OTU3IDIuMjg3NTEgMS42MjM5MSAyLjc4OTI4QzEuNDU5MDUgMy4xMTI4NCAxLjM5MzM0IDMuNDU3MyAxLjM2MjcyIDMuODMyMDRDMS4zMzMyNCA0LjE5MjgzIDEuMzMzMjUgNC42MzU3NCAxLjMzMzI2IDUuMTcyMzlMMS4zMzMyNSAxMy41ODA2QzEuMzMzMjIgMTMuNzM3NCAxLjMzMzE5IDEzLjg5NzMgMS4zNDUwOSAxNC4wMjgzQzEuMzU2NDcgMTQuMTUzNiAxLjM4NjYxIDE0LjM5MDEgMS41NTE3MiAxNC41OTY5QzEuNzQxNyAxNC44MzQ5IDIuMDI5OCAxNC45NzM0IDIuMzM0MzQgMTQuOTczQzIuNTk4OTkgMTQuOTcyOCAyLjgwMjQ5IDE0Ljg0ODYgMi45MDc0NCAxNC43NzkyQzMuMDE3MTcgMTQuNzA2NiAzLjE0MTk5IDE0LjYwNjcgMy4yNjQ0NCAxNC41MDg3TDQuODczMiAxMy4yMjE3QzUuMjE4OTIgMTIuOTQ1MSA1LjMyMTU2IDEyLjg2NzEgNS40MjgyMiAxMi44MTI2QzUuNTM1MiAxMi43NTc5IDUuNjQ5MDggMTIuNzE4IDUuNzY2NzYgMTIuNjkzOEM1Ljg4NDA5IDEyLjY2OTcgNi4wMTMwMiAxMi42NjY2IDYuNDU1NzYgMTIuNjY2NkgxMC44Mjc1QzExLjM2NDEgMTIuNjY2NiAxMS44MDcgMTIuNjY2NiAxMi4xNjc4IDEyLjYzNzFDMTIuNTQyNSAxMi42MDY1IDEyLjg4NyAxMi41NDA4IDEzLjIxMDYgMTIuMzc1OUMxMy43MTIzIDEyLjEyMDMgMTQuMTIwMyAxMS43MTIzIDE0LjM3NTkgMTEuMjEwNkMxNC41NDA4IDEwLjg4NyAxNC42MDY1IDEwLjU0MjUgMTQuNjM3MSAxMC4xNjc4QzE0LjY2NjYgOS44MDcwMSAxNC42NjY2IDkuMzY0MTEgMTQuNjY2NiA4LjgyNzQ3VjUuMTcyMzdDMTQuNjY2NiA0LjYzNTczIDE0LjY2NjYgNC4xOTI4MyAxNC42MzcxIDMuODMyMDRDMTQuNjA2NSAzLjQ1NzMgMTQuNTQwOCAzLjExMjg0IDE0LjM3NTkgMi43ODkyOEMxNC4xMjAzIDIuMjg3NTEgMTMuNzEyMyAxLjg3OTU2IDEzLjIxMDYgMS42MjM5QzEyLjg4NyAxLjQ1OTA0IDEyLjU0MjUgMS4zOTMzMyAxMi4xNjc4IDEuMzYyNzJDMTEuODA3IDEuMzMzMjQgMTEuMzY0MSAxLjMzMzI0IDEwLjgyNzUgMS4zMzMyNVpNNC42NjY1OSA0Ljk5OTkyQzQuMjk4NCA0Ljk5OTkyIDMuOTk5OTIgNS4yOTg0IDMuOTk5OTIgNS42NjY1OUMzLjk5OTkyIDYuMDM0NzggNC4yOTg0IDYuMzMzMjUgNC42NjY1OSA2LjMzMzI1SDcuOTk5OTJDOC4zNjgxMSA2LjMzMzI1IDguNjY2NTkgNi4wMzQ3OCA4LjY2NjU5IDUuNjY2NTlDOC42NjY1OSA1LjI5ODQgOC4zNjgxMSA0Ljk5OTkyIDcuOTk5OTIgNC45OTk5Mkg0LjY2NjU5Wk00LjY2NjU5IDcuMzMzMjVDNC4yOTg0IDcuMzMzMjUgMy45OTk5MiA3LjYzMTczIDMuOTk5OTIgNy45OTk5MkMzLjk5OTkyIDguMzY4MTEgNC4yOTg0IDguNjY2NTkgNC42NjY1OSA4LjY2NjU5SDkuOTk5OTJDMTAuMzY4MSA4LjY2NjU5IDEwLjY2NjYgOC4zNjgxMSAxMC42NjY2IDcuOTk5OTJDMTAuNjY2NiA3LjYzMTczIDEwLjM2ODEgNy4zMzMyNSA5Ljk5OTkyIDcuMzMzMjVINC42NjY1OVoiIGZpbGw9IiMxNTVFRUYiLz4KPC9zdmc+Cg==">\
                </div> \
                <div class = "title">'+msgData.message[0].component.payload.title+'</div>\
              </div>';
            }
            if (msgData.message[0].component.payload.elements){
              HTMLtext += '<div class="worknote-elements">';
			  let i = 0;
                      msgData.message[0].component.payload?.elements.forEach((element)=>{
						  var description_ = markdownConvert(element.description)
                        HTMLtext += '<div class="worknote-element" id="test'+i+'" onclick="submitItemOption2(\'test'+i+'\');"> \
                              <div class="worknote-header worknote-toggle" > \
                                  <div class="header-title"> \
                                  <span class="category-title worknote-tooltip" data-title="'+element.categoryTitle+'">\
                                    <span class="worknote-tooltip-inner">'+element.categoryTitle+'</span>\
                                  </span>\ |  <span class="subCategory-title worknote-tooltip" data-title="'+element.subCategoryTitle+'">\
                                    <span class="worknote-tooltip-inner">'+element.subCategoryTitle+'</span>\
                                  </span>\
                                  </div> \
                                  <span class="header-icon"> \
                                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjU1NTE4IDExLjcyMkM4LjM1ODQ1IDExLjkxODcgOC4wNDY2OCAxMS45MzAzIDcuODM2NDEgMTEuNzU2N0w3Ljc5ODIzIDExLjcyMkwzLjExMTI1IDcuMDM0OThDMi45MDIyMiA2LjgyNTk1IDIuOTAyMjIgNi40ODcwNSAzLjExMTI1IDYuMjc4MDNDMy4zMDc5OCA2LjA4MTMgMy42MTk3NSA2LjA2OTcyIDMuODMwMDIgNi4yNDMzMUwzLjg2ODIgNi4yNzgwM0w4LjE3NjcgMTAuNTg2NEwxMi40ODUyIDYuMjc4MDNDMTIuNjgxOSA2LjA4MTMgMTIuOTkzNyA2LjA2OTcyIDEzLjIwNCA2LjI0MzMxTDEzLjI0MjIgNi4yNzgwM0MxMy40Mzg5IDYuNDc0NzYgMTMuNDUwNSA2Ljc4NjUzIDEzLjI3NjkgNi45OTY3OUwxMy4yNDIyIDcuMDM0OThMOC41NTUxOCAxMS43MjJaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"> \
                                  </span> \
                              </div> \
                              <div class="worknote-content" id="content'+i+'"> \
                                  <div class="worknote-title"><p>'+element.title+'</p></div>\
                                  <div class="worknote-descripton"> \
                                    <p>'+description_+'</p>\
                                  </div> \
                                  <div class="worknote-feedback"> \
                                    <div class="feedback-message">'+msgData.message[0].component.payload.feedbackMessage+'</div> \
                                    <div class="feedback-btns feedback-btns-'+element.worknoteId+'"> \
                                        <span id = "like '+element.worknoteId+'" class="feedback-like feedbackbtn" onclick="submitfeedback(\''+element.worknoteId+'\',\'like\',\''+msgData.message[0].component.payload.feedbackWebhookURL+'\');"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTUuMjc0MzMgMTAuMzEyNUM1LjI3NDMzIDkuNzk0NzMgNS42OTQwNiA5LjM3NSA2LjIxMTgzIDkuMzc1QzYuNzI5NiA5LjM3NSA3LjE0OTMzIDkuNzk0NzMgNy4xNDkzMyAxMC4zMTI1TDcuMTQ5MzMgMTQuMDYyNUM3LjE0OTMzIDE0LjU4MDMgNi43Mjk2IDE1IDYuMjExODMgMTVDNS42OTQwNiAxNSA1LjI3NDMzIDE0LjU4MDMgNS4yNzQzMyAxNC4wNjI1TDUuMjc0MzMgMTAuMzEyNVoiIGZpbGw9IiMzMkQ1ODMiLz4KPHBhdGggZD0iTTcuNzc0MzMgMTAuMjA4M0w3Ljc3NDMzIDEzLjYwMjVDNy43NzQzMyAxNC4wNzU5IDguMDQxODMgMTQuNTA4OCA4LjQ2NTMxIDE0LjcyMDVMOC40OTY0NyAxNC43MzYxQzguODQzNiAxNC45MDk2IDkuMjI2MzkgMTUgOS42MTQ1IDE1TDEyLjk5OTYgMTVDMTMuNTk1NCAxNSAxNC4xMDg0IDE0LjU3OTQgMTQuMjI1MyAxMy45OTUxTDE0Ljk3NTMgMTAuMjQ1MUMxNS4xMyA5LjQ3MTY2IDE0LjUzODQgOC43NSAxMy43NDk2IDguNzVMMTEuNTI0MyA4Ljc1TDExLjUyNDMgNi4yNUMxMS41MjQzIDUuNTU5NjQgMTAuOTY0NyA1IDEwLjI3NDMgNUM5LjkyOTE1IDUgOS42NDkzMyA1LjI3OTgyIDkuNjQ5MzMgNS42MjVMOS42NDkzMyA2LjA0MTY3QzkuNjQ5MzMgNi41ODI1OSA5LjQ3Mzg5IDcuMTA4OTMgOS4xNDkzMyA3LjU0MTY3TDguMjc0MzMgOC43MDgzM0M3Ljk0OTc3IDkuMTQxMDcgNy43NzQzMyA5LjY2NzQxIDcuNzc0MzMgMTAuMjA4M1oiIGZpbGw9IiMzMkQ1ODMiLz4KPC9zdmc+Cg==" alt="Icon"> \
                                        </span>\
                                        <span id = "dislike '+element.worknoteId+'" class="feedback-dislike feedbackbtn" onclick="submitfeedback(\''+element.worknoteId+'\',\'dislike\',\''+msgData.message[0].component.payload.feedbackWebhookURL+'\');"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjcyNTcgOS42ODc1QzE0LjcyNTcgMTAuMjA1MyAxNC4zMDU5IDEwLjYyNSAxMy43ODgyIDEwLjYyNUMxMy4yNzA0IDEwLjYyNSAxMi44NTA3IDEwLjIwNTMgMTIuODUwNyA5LjY4NzVWNS45Mzc1QzEyLjg1MDcgNS40MTk3MyAxMy4yNzA0IDUgMTMuNzg4MiA1QzE0LjMwNTkgNSAxNC43MjU3IDUuNDE5NzMgMTQuNzI1NyA1LjkzNzVWOS42ODc1WiIgZmlsbD0iI0ZEQTI5QiIvPgo8cGF0aCBkPSJNMTIuMjI1NyA5Ljc5MTY3VjYuMzk3NTRDMTIuMjI1NyA1LjkyNDA4IDExLjk1ODIgNS40OTEyNSAxMS41MzQ3IDUuMjc5NTFMMTEuNTAzNSA1LjI2MzkzQzExLjE1NjQgNS4wOTAzNiAxMC43NzM2IDUgMTAuMzg1NSA1TDcuMDAwNDIgNUM2LjQwNDU3IDUgNS44OTE1NiA1LjQyMDU3IDUuNzc0NyA2LjAwNDg1TDUuMDI0NyA5Ljc1NDg1QzQuODcgMTAuNTI4MyA1LjQ2MTYyIDExLjI1IDYuMjUwNDIgMTEuMjVIOC40NzU2N1YxMy43NUM4LjQ3NTY3IDE0LjQ0MDQgOS4wMzUzMSAxNSA5LjcyNTY3IDE1QzEwLjA3MDggMTUgMTAuMzUwNyAxNC43MjAyIDEwLjM1MDcgMTQuMzc1VjEzLjk1ODNDMTAuMzUwNyAxMy40MTc0IDEwLjUyNjEgMTIuODkxMSAxMC44NTA3IDEyLjQ1ODNMMTEuNzI1NyAxMS4yOTE3QzEyLjA1MDIgMTAuODU4OSAxMi4yMjU3IDEwLjMzMjYgMTIuMjI1NyA5Ljc5MTY3WiIgZmlsbD0iI0ZEQTI5QiIvPgo8L3N2Zz4K" alt="Icon"> \
                                        </span>\
                                      </div> \
                                  </div> \
                              </div>\
                          </div>';
						  i++;
                        })
                        HTMLtext += ' </div>';
                }
                HTMLtext += '</div> \
      </div>';
		
          return parseHTML(HTMLtext);      
      }else{
          return false;
      }
  } 
}
 
  function markdownConvert(string) {
    return string.replaceAll('\n', '<br>');
}

 function submitfeedback(id,feedbackvalue,feedbackurl) {
	 var feedbackData = {};
  
	 // console.log(msgData);
	  var worknoteId = id;
	  var feedbackValue = feedbackvalue;
      if (!feedbackData[worknoteId]) {
        feedbackData[worknoteId] = feedbackvalue;
        sendFeedbackToAPI(worknoteId, feedbackvalue,feedbackurl);
      }
  
}
//var element = document.getElementById("test0");
  // element.classList.toggle("worknote-expanded");
 function submitItemOption2(id) {
   var element = document.getElementById(id);
   element.classList.toggle("worknote-expanded");
   
   
}

 function sendFeedbackToAPI(worknoteId, feedbackvalue, feedbackurl) {
		//alert(feedbackurl);
		//alert(worknoteId);
		//alert(feedbackvalue);
		var chatConfig=KoreChatSDK.chatConfig;
		var botOptions=chatConfig.botOptions;
		var accountId=chatConfig.botOptions.botInfo._id;
		//alert(accountId);
		var taskBotId=chatConfig.botOptions.botInfo.taskBotId;
		console.log(botOptions);
     var config = {
		host: feedbackurl,
      accountId: accountId,
      botId: taskBotId,
      userId: "user",
    };
	const myHeaders = new Headers();
myHeaders.append("accountid", config.accountId);
myHeaders.append("botid", config.botId);
myHeaders.append("userid", config.userId);
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "type": "feedback",
  "worknotes": [
    {
      "worknote_id": worknoteId,
      "action": feedbackvalue
    }
  ]
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch(config.host, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
	 
 }