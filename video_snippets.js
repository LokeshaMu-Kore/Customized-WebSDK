class customTemplateComponent9{
  renderMessage(msgData){
      if(msgData?.message[0]?.component?.payload?.template_type==='video_snippet'){
		
		const youtubeURL=(url)=>{
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
const match = url.match(regExp);
if (match && match[2].length == 11) {
return match[2]+'?start='+url.split('&t=')[1];
} else {
//error
}
}

		var title = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_title;
		var url = msgData.message[0].component.payload?.center_panel?.data[0]?.url;
		var snippet_content = msgData.message[0].component.payload?.center_panel?.data[0]?.snippet_content;
	console.log(title);
	const url_youtube = 'https://www.youtube.com/embed/'+youtubeURL(url)+';start=';
	var HTMLtext = '<section class="table-wrapper-section"><div class="search-temp-one snippet-margin tour-snippet-temp">\
<div class="top-header">\
<div class="top-header-with-img">\
<span class="logo-span" style="display: none;">\
<img src="https://koregeneric.s3.amazonaws.com/SearchAssist_UI_Img/snippet_imgs/snippet-avathar.svg" alt=""></span>\
<div class="btn-chip"><span class="bot-bg-purple">\
<img alt="botIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAA79JREFUWAnVmb1uE0EQx+cR/Ab4DRJxZ0QX8wAg6hQkFXSEJyB+ABLRUhBL2GckJBIrCAoQ2E1o8uE0IFlWYlPgJolOTgENaNF/7+Y4O/exu2efIdJqL7uzu7+dnZ0Z3xFl+KvSYqFG1t0aWU8dsnccsvoOWa5DtvCKfO7UyW5BBrIYk2FJs6E1ssuAGIdjSKV6B/Bmq2uMwiKeFpWgfC0nyVr9F3R9VQNBTbRKi0VPo0mLZ+rrYA01mhSpOtmPMhy9gpaDjbpYKwUnudshe/3vBQom1oEwkV1PporpnRMsb1APes6wetCezeZ2/AwXWafaNG5qThcsEjDivriJ3sMhuxMxSHXymcg1yG5FXjM48H8Nlnkio+J0I9i074DVH9OyF3LVFxmdDsXevcqYCbxfui96z3fF6GQofv0W4ufFpTg77Ire1q5AH2sL9eeVihidfB9rC/dHPSN/CaDrZDejhOLaAHT8+JlcsFm8I4YfDwJIAKIP5dt2S2BzkB9st0Tz2m05Bn1oi5s/qj2wZaR7UQJJbQz8bmFZahLamtR4eLzU6OlQavXtwrLcjC6wQzY8RoF0zQEgWKy39SaAZc2FISefcRLQ9o+LS2kmBsCigZTU8ZJvrePBYijQrAoswzM0j+d21Ro/AsgkbeQFk8wgDgLmwePjZOLacdfIJFiwduMmTmuHB8EcaXJX+60+gEO/wdRcGxbDrecJ9x8+kS4Nbi2uhE8D9m8GbLsADhZWfcZi7NZ4cdYa+iYL9/EmTdwas2UGBtyXzYbAhZoE5f9xMb9uNgKtZgU2MgnW8PDTgfQWCBIMOFkPXnsB5PywK08zA7BLdbIGrG7VGkAMLCMdoBEYEgo2xi4wA3AHbk0rLGNTYWDVTYblMgC3jQMHazgMovpsCiwDh2longewDM1+8qN18WASnPC8KtxSdouQ3VupiLOjbuAxVE8FcsF7OaRuOgMP1jaCtBHwyHuRYiJoQPPhgjbpJfw8GfLwy/trG8obBZsMy5wQIznWAWbZD0sPBKIcXJp0b37uCygu8BznR14iD1mM4fE6tTQHBkbdoFJfZ4I8ZcEWZpXPJpcvP+hS9BtOXVvOCbhzRbvc8JJuFk2ytxmCu2Bivsj6v3pVxTtwyK7MUGuqXqLCPEr1nKH1YHlHc4I2g2Vo36a1QrehOWX/ZMDQvveY5ZvNdqo3YBid2qHS6jQjIuaq0Y28vtfpJ/6+qcC82mMv93S0lkW2SmX/020Jn27bdbKOJwKP63g/wZo1KvmfbsuZPt3+AUCWWFJQA3A8AAAAAElFTkSuQmCC"></span><span>Answered By AI</span></div>\
</div>\
<div class="btn-link"></div>\
</div>\
<span class="video-title">'+title+'</span>\
<div class="video-division"><iframe width="100%" height="100%" src="'+url_youtube+'" allowfullscreen="true"></iframe></div>\
<div class="answer-desc">\
<div id="sa-llm-html">'+snippet_content+'</div>\
</div>\
<div class="temp-footer-block">\
<div class="temp-footer">\
<div class="btn-link"><span class="bot-bg-purple" style="display: none;"><img alt="" src="https://koregeneric.s3.amazonaws.com/SearchAssist_UI_Img/snippet_imgs/bot.svg"></span><span class="sdk-i18n-lang" sdk-i18n-key="sa_sdk_answered_by_ai"></span></div>\
<div class="temp-right">\
<div class="is-it-useful" sdk-i18n-key="sa_sdk_is_useful"></div>\
</div>\
</div>\
</div>\
</div></section>';
	
       
        
          return parseHTML(HTMLtext);      
      }else{
          return false;
      }
  } 
}