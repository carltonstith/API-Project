$(document).ready(function(){
	$('.btn').click(function(){

		$.ajax({
			type: "GET",
			url: "http://swapi.co/api/people/",
			success: function(data){
				for(var i = 0; i < data.results.length; i++){
					var hero = "<li>" + data.results[i].name + "</li>";
					$('.text').append(hero);
				}
			}
		});

	});
});