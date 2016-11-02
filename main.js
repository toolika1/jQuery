$(document).ready(function (){
	
	var $search=$('#search');
	$("#btn").click(function(){
		$("#search").html("")
	
	$('#search').css("background","#eee").css("height","auto");
	$('#pagin').empty();
	var isMatch=false;
	var pgCount=0;
    var find= $("#findMovie").val();
	$.ajax({
		type:'get',
		url: 'http://www.omdbapi.com/?s=' + find,
	    success : function(data){
         
	    
	    	var pattern =new RegExp(find ,"i")
      //  $search.append('<h2 class="text-center">MOVIES</h2><br>')
	    	$.each(data["Search"] , function(i,movie){
	    	
	    			isMatch=true;
	    			pgCount++;
						$search.append('<div class="line-content list-group-item text-center"><img src="'+movie.Poster+'"  alt="Pic" width="180" height="180"><br><strong>Title : '+movie.Title+'</strong><br>Year : '+movie.Year+'<br>ImdbID : '+movie.imdbID+'<br>Type : '+movie.Type+'<br></div>');
	    		
	    		

              
	    	});

	    	//pagination
				 pageSize = 2;
				 var pageCount =  pgCount/pageSize;
			     for(var i = 0 ; i<pageCount;i++)
			     {
			       $('#pagin').addClass('text-center');
			       $('#pagin').append('<li><a href="#">'+(i+1)+'</a></li> ');
			     }
			     $('#pagin li').first().find('a').addClass('current');
				 showPage = function(page) {
					$('.line-content').hide();
					$('.line-content').each(function(n) {
					  	if (n >= pageSize * (page - 1) && n < pageSize * page)
					        {
					           $(this).show();
					   
					        }
			    	});        
				}
				showPage(1);
				$('#pagin li a').click(function() {
				    $('#pagin li a').removeClass("current");
				    $(this).addClass('current');
				    showPage(parseInt($(this).text())) 
				});


           if(isMatch==false)
           {
                 	$('#search').css("background","#eee").css("height","250px");
					$search.append('<h3 class="text-center">No match found, kindly search with some other keyword</h3>');
           }


           

	    },
	    error : function(){
	    		document.location.href = "error.html";
	    },



	});
});


 $("#about").click(function(){
        $(".review").toggle();
    });
     $("#contactUS").click(function(){
        $(".contact").slideToggle("slow");
    });

 
});