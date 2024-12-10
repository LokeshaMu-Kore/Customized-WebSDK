
class customTemplateComponent2{
  renderMessage(msgData){

      //if(msgData?.message[0]?.component?.payload?.template_type==='paragraph_snippet'){
      if(msgData.message[0] && msgData.message[0].component && msgData.message[0].component.payload && msgData.message[0].component.payload.template_type == "citation_snippet"){
		 
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
	var sin;
	msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content.forEach((item)=>{
	item.sources.forEach((source)=>{
	let sourceIndex = snippetReference.findIndex((d)=>d.title == source.title);
	if(sourceIndex>-1){
	source['_id']= sourceIndex+1;
	sin = sourceIndex+1;
	}
	})
	}) 
	var listmsgData = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content;
	var answer_data = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content[0].answer_fragment;
	var source_data = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content[0].sources[0].title;
	var source_url = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content[0].sources[0].url;
	//alert(answer_data);
	snippetObj = {'title':msgData.message[0].component.payload?.center_panel?.data[0]?.title,'answer':listmsgData, page_url:msgData.message[0].component.payload?.center_panel?.data[0]?.url,'source':msgData.message[0].component.payload?.center_panel?.data[0]?.source,'image_url':msgData.message[0].component.payload?.center_panel?.data[0]?.image_url,'template_type':msgData.message[0].component.payload.center_panel?.type};
	snippetObj['reference']=snippetReference;
	//alert(snippetObj['reference'][0].title)
	//alert(snippetObj['reference'][0].url)
	
	var citation_snippet = '<div class="search-temp-one snippet-margin">\
        <div class="top-header">\
        </div>\
        <div class="citation-data-desc {{if msgData.title==""}}snippet_padding_top_0{{/if}}">\
       '+answer_data+'\
        <sup class="snippet-citation"><a href="'+source_url+'" target="_blank">['+sin+']</a></sup> </span>\
        </div>\
        <div class="snippet-referene-block">\
          <div class="reference-block-header">References: </div>\
          <ol type="1" class="reference-list-temp-ul">\
                  <li class="reference-list-temp-li" title="'+snippetObj['reference'][0].title+'"><a  href="'+snippetObj['reference'][0].url+'" target="_blank"><span class="bold_title">'+snippetObj['reference'][0].title+'</span></a></li>\
                   </ol>\
        </div>\
        <div class="temp-footer-block">\
            <div class="temp-footer ">\
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
	  return parseHTML(citation_snippet);
  }
   
}
  }

