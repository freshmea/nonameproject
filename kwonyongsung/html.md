<!DOCTYPE html>
<html lang=ko>
  <head>
    <title>신호등</title>
    <link rel="stylesheet" href="./stylesheets/style.css">
  </head>
  
  <body> 
    <table border="0">
      <tr>
        <td colspan="4"><h2> 신호등 </h2></td>
      </tr>
      <tr>
        <td><img src="./images/green1.png" id="car"></td>
		<td> &nbsp; &nbsp; &nbsp; &nbsp; </td>
        <td><img src="./images/red2.png" id="Pedestrian"></td>
      </tr>
    </table>
    &nbsp;
	<table border="0">
		<tr>
			<td>
				<a href target="response"><div onClick="green1()">green</div></a>
			</td>
			<td>
				<a href target="response"><div onClick="yellow1()">yellow</div></a>
			</td>
			<td>
				<a href target="response"><div onClick="red1()">red </div></a>
			</td>	
		</tr>
    </table>
	
	
	<iframe src="about:blank" width="0" height="0" frameborder="0"
          marginwidth="0" marginheight="0" name="response"></iframe>

    <script src="javascripts/jquery-1.12.4.min.js"></script>
    <!-- script src="//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.0/annyang.min.js"></script -->
    <script>
      function red1(){
        document.getElementById("car").src = "./images/red1.png";
		document.getElementById("Pedestrian").src = "./images/green2.png";
      }
      function yellow1(){
        document.getElementById("car").src = "./images/yellow1.png";
      }
      function green1(){
        document.getElementById("car").src = "./images/green1.png";
		document.getElementById("Pedestrian").src = "./images/red2.png";
      }
	  
	  
	  
	  $(document).ready(function() 
	{
		$(function()
        {      
			var socket = io();
				
			socket.on('led', function( ledStatus ){
				$('#led').text(ledStatus);
				console.log(ledStatus);
				if(ledStatus=='on') {
					$('#car').attr('src', "images/red1.gif");
					$('#Pedestrian').attr('src', "images/green2.gif");
				}
				else {
					$('#car').attr('src', "images/green1.gif");
					$('#Pedestrian').attr('src', "images/red2.gif");
				}
			});
        });
	});
    </script>
  </body>
</html>
