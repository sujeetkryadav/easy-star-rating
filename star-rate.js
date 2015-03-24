 $( document ).ready(function() {

                   var rate=0;
                   var source_id=document.getElementById("caseId").value;
                   var route=document.getElementById("rate").value;
                    //alert(route);
                    $("#star-1").click(function(){
                   	rate=1;
                   	alert(rate);
                   	myFunction(rate);
                   });
                   
                     $("#star-2").click(function(){
                   	rate=2;
                   	alert(rate);
                   	myFunction(rate);
                   });

                      $("#star-3").click(function(){
                   	rate=3;
                   	alert(rate);
                   	myFunction(rate);
                   });

                       $("#star-4").click(function(){
                   	rate=4;
                   	alert(rate);
                   	myFunction(rate);
                   });
                        $("#star-5").click(function(){
                   	rate=5;
                   	alert(rate);
                   	myFunction(rate);
                   });
              function myFunction(rate) {
             	
                     $.ajax({
                url: route,
                type: "POST",
                data: { 'rate': rate , 'source_id' : source_id},
                success:function(response){
                   // alert(response);
                  if(response === "true"){
                    alert('Thank you for rating.');
                  }else{
                    //alert('Sorry, You have already rated this case study.');
                  }
                 }

                }); 
               }  
           });