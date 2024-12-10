class customTemplateComponent6{
  renderMessage(msgData){
      if(msgData?.message[0]?.component?.payload?.template_type==='articleTemplate'){
		  
	var HTMLtext = '<dic  id="msg_" class="fromOtherUsers fromCurrentUser with-icon"> \
		   <div class="article-template">\
				<div class="profile-photo"> <div class="user-account avtar" style="background-image:url"></div> </div> \
				<button class="close-button" title="Close"><img src="data:image/svg+xml;base64, PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTRweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgMTQgMTQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDUyLjMgKDY3Mjk3KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5jbG9zZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0NC4wMDAwMDAsIC0yMjkuMDAwMDAwKSIgZmlsbD0iIzhBOTU5RiI+CiAgICAgICAgICAgIDxnIGlkPSJjbG9zZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzQ0LjAwMDAwMCwgMjI5LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBvbHlnb24gaWQ9IlNoYXBlIiBwb2ludHM9IjE0IDEuNCAxMi42IDAgNyA1LjYgMS40IDAgMCAxLjQgNS42IDcgMCAxMi42IDEuNCAxNCA3IDguNCAxMi42IDE0IDE0IDEyLjYgOC40IDciPjwvcG9seWdvbj4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"></button>\
					<div class="article-template-content" actionObj="">\
					<div class="article-template-elements" >';
        //HTMLtext += '<div class="article-template-elements">';
        HTMLtext += '<div class="media-block media-blue">';
		
msgData.message[0].component.payload?.elements.forEach((item)=>{
	console.log(item.title);
	var artititle=item.title
	var art_description=item.description
	var updatedOn=item.updatedOn
	var createdOn=item.createdOn
	var icon=item.icon
	var button_url=item.button.url
	var wrapper = document.getElementById('wrapper');
	artititle = artititle.split('*').join(' ');
	//art_description = art_description.split('((https://').join(' ');
	var art_description = art_description.replace(/ *\([^)]*\) */g, "");
	
	HTMLtext += '<div class="media-header" id="media-header">'+artititle+'</div>';
	 HTMLtext += '<div class="media-desc">'+art_description+'</div><br><br>';
	 HTMLtext += '<div class="media-space-between">\
<div class="media-icon-block">\
<div class="media-icon">\
<img src="'+icon+'"/>\
</div>\
<div class="media-icon-desc">\
<div class="media-icon-desc-data">'+createdOn+'</div>\
<div class="media-icon-desc-data">'+updatedOn+'</div>\
</div>\
</div>\
<div><a href="'+button_url+'" target="_blank"><button class="btn-primary btn" type="url" url="'+button_url+'" style="">Show Article</button></a></div>\
</div>';
        
    })    
       // for (var i=0; i<msgData.message[0].component.payload.buttons.length; i++) {
        //    HTMLtext += '<button type="button" class="bannerTemplate_button" onclick="submitBannerOption(\''+msgData.message[0].component.payload.buttons[i].payload+'\');">'+msgData.message[0].component.payload.buttons[i].title+'</button>';
        //}
		
//HTMLtext += '</div>';
        HTMLtext += '</div>';

        HTMLtext += '</div>';
        HTMLtext += '</div>';
        HTMLtext += '</div>';
        HTMLtext += '</div>';
        
          return parseHTML(HTMLtext);      
      }else{
          return false;
      }
  } 
}
