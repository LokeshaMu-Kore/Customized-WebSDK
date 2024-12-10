
class customTemplateComponent4{
  renderMessage(msgData){

      //if(msgData?.message[0]?.component?.payload?.template_type==='paragraph_snippet'){
      if(msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "paragraph_snippet"){
		 
		var snippetObj={};
	var listmsgData = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_title;
	var snippet_title = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_title;
	var snippet_content = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content;
	var snip_title = msgData.message[0].component.payload?.center_panel?.data[0]?.source;
	var snip_url = msgData.message[0].component.payload?.center_panel?.data[0]?.url;
	snippet_content = snippet_content.split("*").join("");
	snippetObj = {'snippet_title':msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_title,'snippet_content':snippet_content,'answer':listmsgData, page_url:msgData.message[0].component.payload?.center_panel?.data[0]?.url,'source':msgData.message[0].component.payload?.center_panel?.data[0]?.source,'template_type':msgData.message[0].component.payload.center_panel?.type};
	//alert(snippetObj['reference'][0].title)
	//alert(snippetObj['reference'][0].url)
		
var itunesResponse = {
  "results": [{
      "trackName": "Goat"
    },
    {
      "trackName": "Another Track"
    }
  ]
};

	var paragraph_snippet = '<div class="search-temp-one">\
      <div class="top-header">\
          <div class="top-header-with-img">\
              <span class="logo-span"><img src="https://koregeneric.s3.amazonaws.com/SearchAssist_UI_Img/snippet_imgs/snippet-avathar.svg"/></span>\
              <div class="btn-chip">SUGGESTED ANSWER</div>\
          </div>\
          </div>\
		  <div class="temp-data-desc" id="temp-data-desc">\
      '+snippet_title+'\
      </div>\
      <div class="temp-data-desc" id="temp-data-desc">\
      '+snippet_content+'\
      </div>\
      <div class="temp-read-link">\
      <span class="desc-read-more">Read more</span> <span class="desc-read-less">Show Less</span>\
      </div>\
      <div class="snippet-source-block">\
        <div class="snippet-source-file-name  display-none">'+snip_title+'</div>\
        <div class="snippet-source-url '+snip_url+' display-none">\
		<span class="snippet-source-url-name" title='+snip_title+'>'+snip_title+'</span>\
		<a href="'+snip_url+'" target="_blank" target="_blank"><img src="https://koregeneric.s3.amazonaws.com/SearchAssist_UI_Img/Icons/external-link.svg"/></a></div>\
      </div>\
      <div class="temp-footer-block">\
          <div class="temp-footer justify-content-end">\
             <div class="temp-right">\
                  <div class="is-it-usefull">Is it useful?</div>\
                  <div class="temp-fotter-actions">\
                      <img  class="snippet-feedback  snippet-like-img" src="https://koregeneric.s3.amazonaws.com/SearchAssist_UI_Img/snippet_imgs/like-gray.svg" />\
                      <img class="snippet-feedback  snippet-dislike-img" src="https://koregeneric.s3.amazonaws.com/SearchAssist_UI_Img/snippet_imgs/dislike-gary.svg" />\
                  </div>\
              </div>\
          </div>\
      </div>\
  </div>';
	  return parseHTML(paragraph_snippet);
  }
   
}
  }

