$(document).ready(function(){
	$('.btn').click(function(){
		
		$.ajax({
			type: "GET",
			url: "https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true",
			success: function(response){
				for(var i = 0; i < response.data.children.length; i++){
					var image = "<img src='" + response.data.children[i].data.thumbnail + "' />";
					$('.text').append(image);
				}
			}
		});

	});
});