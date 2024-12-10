
class customTemplateComponent5{
  renderMessage(msgData){

      //if(msgData?.message[0]?.component?.payload?.template_type==='paragraph_snippet'){
    //  if(msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "citation_snippet"){
		if (msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "active_citation_snippet") { 
		var snippetObj={};
	var snippetReference =[];
	msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content.forEach((item)=>{
	snippetReference = [...snippetReference,...item.sources];
	})
	var set = new Set();
	var unionArray = snippetReference.filter(item => {
	if (!set.has(item.title)) {
	set.add(item.title);
	return true;
	}
	return false;
	}, set);
	snippetReference = unionArray;
	msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content.forEach((item)=>{
	item.sources.forEach((source)=>{
	let sourceIndex = snippetReference.findIndex((d)=>d.title == source.title);
	if(sourceIndex>-1){
	source['_id']= sourceIndex+1;
	}
	})
	}) 
	var listmsgData = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content;
	var answer_data = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content[0].answer_fragment;
	var source_title = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content[0].sources[0].title;
	var source_url = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content[0].sources[0].url;
	var listmsgData = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content;
	//var listmsgData = msgData.message[0].component.payload?.center_panel?.data[0]?.answer;

	snippetObj = {'title':this.helpers.convertMDtoHTML(msgData.message[0].component.payload?.center_panel?.data[0]?.title),'answer':listmsgData, page_url:msgData.message[0].component.payload?.center_panel?.data[0]?.url,'source':msgData.message[0].component.payload?.center_panel?.data[0]?.source,'template_type':msgData.message[0].component.payload.center_panel?.type};
	snippetObj['reference']=snippetReference;
			
			
		
var active_citation_snippet  = ' <div class="search-temp-one active-citation-snippet">\
        <div class="top-header">\
        </div>\
        {{if msgData && msgData.title}}\
        <div class="img-temp-title sa-sdk-title" data-title="'+source_title+'">'+source_title+'</div>\
        {{/if}}\
        <div class="citation-data-desc {{if msgData.title==""}}snippet_padding_top_0{{/if}}">\
        <span class="snippet-answer-fragment-block fragment-hover-event  fragment-"\
          fragment=" .fragment-"><span class="sub-fragment"><span class="snippet-answer-fragment">'+answer_data+'</span><span class="snippet-citation"><a href="'+snippetObj['reference'][0].url+'" target="_blank"></a></span></span></span></span>\
        </div>\
        <div class="active-snippet-referene-block">\
          <div class="active-reference-block-header">Sources </div>\
          <div class="active-reference-list-temp-block">\
                  <div class="active-reference-list-temp fragment-hover-event fragment-"  title="'+snippetObj['reference'][0].title+'" fragment=".fragment-$,"><a href="$" target="_blank"><span class="reference-no">$</span><span class="reference-title">'+snippetObj['reference'][0].title+'}</span></a></div>\
                  </div>\
        </div>\
        {{if msgData && msgData.source !== "Answered by AI"}}\
        <div class="snippet-source-block">\
          <div class="snippet-source-file-name {{if !msgData.source}} display-none{{/if}}">{{html msgData.source}}</div>\
          <a href="${msgData?.page_url}" target="_blank" ><div class="snippet-source-url {{if !msgData.page_url}} display-none{{/if}}"><span class="snippet-source-url-name" title="${msgData?.page_url}">${msgData?.page_url}</span><img src="https://koregeneric.s3.amazonaws.com/SearchAssist_UI_Img/Icons/external-link.svg"/></div></a>\
        </div>\
        {{/if}}\
        <div class="temp-footer-block">\
            <div class="temp-footer {{if msgData && msgData.source !== "Answered by AI"}} justify-content-end {{/if}}">\
                {{if msgData && msgData.source === "Answered by AI"}}\
                <div class="btn-link"><span class="bot-bg-purple"><img src="https://koregeneric.s3.amazonaws.com/SearchAssist_UI_Img/snippet_imgs/bot.svg"/></span>ANSWERED BY AI</div>\
                {{/if}}\
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
	
	
	  return parseHTML(active_citation_snippet);
  }
   
}
  }

