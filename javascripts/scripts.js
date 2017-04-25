
var slideSpeed = 600;

function showProject(projectSelectedId){

	var project = [];
		project = $.grep(projects, function(iproject){
			return iproject.id == projectSelectedId;
		});

		$('#project-title').html(project[0].title);
		if(project[0].img != undefined){
			$('#project-img').html('<img class="project-img" src="'+project[0].img+'">');
		} 
		$('#project-description').html(project[0].description);

		if(project[0].link != undefined){
			$('#project-link').html('<a href="http://'+project[0].link+'">'+project[0].link+'</a>');
		} 
		
}


$(document).ready(function() {

	$(".category-text").hide();
	$(".sub-category-text").hide();
	$(".project-panel").css({'margin-left': '-100%'});

	$('#about-photo').hide().css('visibility', 'visible').fadeIn(1000);

	$(".link-category" ).click(function() { 
	 		
	 	$(".category-text").slideUp(slideSpeed);
	 	$(".sub-category-text").slideUp(slideSpeed);
	 	$(this).next().slideDown(slideSpeed);

	});	

	$(".link-sub-category" ).click(function() { 
	 		
		$(".sub-category-text").slideUp(slideSpeed);

	 	$(this).next().slideDown(slideSpeed);
	});	

	$(".symbol-close" ).click(function() { 

		$(".project-panel").animate({'margin-left': '-100%'},slideSpeed,function() {
			showProject('dummy');
		    
		});
		 		
	});

	$(".project" ).click(function() { 

		$(".project-panel").animate({'margin-left': '0%'},slideSpeed);
	 		
		var id = $(this).attr('id');
		
		showProject(id);

	 		
	});	



});






