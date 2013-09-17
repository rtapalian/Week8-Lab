//Richard Tapalian
//SE240
//Week 8 Lab
//09/11/2013		
		
		//Counter for 10 sec countdown with appropriate alert
		var content = document.getElementById('content');  
		var counter = 10;
		
		function updateContent() {
			//content.innerHTML = new Date();
			
			if ( counter >= 0 ) {
				content.innerHTML = counter;
				counter--
			} else {
				alert("You have been here for 10 seconds");
				clearInterval(contentTimer);
			}
		}
		
		updateContent();
		//Updates the time every second
		var contentTimer = setInterval(updateContent, "1000");
				
				
		var img = new Image();
		
		img.src = "download.jpg";
		
		img.onload = function() {
			console.log("image Loaded");
		}
		
		
		
		//Canvas is called and context is defined
		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		
		//Call Halo Image
		var imageObj = new Image();
		imageObj.src = 'images1.jpg';
		
		//Draws a rectangle on the screen inside the canvas
		function draw ()
		{
		context.clearRect(0, 0, 500, 400);
		context.beginPath();
		context.moveTo(50, 100);
		context.lineTo(200, 100);
		context.lineWidth = 15;
		context.stroke();
		
		//Uses the canvas to draw the image and place it
		var x = 10,
		    y = 20;	
		    context.drawImage(imageObj,x,y);
		}
		//Calls the draw function
		draw ();
	  
		//The image animate function 
		var mouseImg = document.getElementById('mouseObj'); 
		var mouseX = 1;
		var mouseY = 1;
		
		
		function moveMouse() {
		
			mouseX += 10;
			mouseY += 3;
			mouseImg.style.top =  mouseY+"px";
			mouseImg.style.left =  mouseX+"px";
			

		}
		//Fader for the div
		var fader = document.getElementById('fader');
		var opacity1 = 1;
		var myVar1;
		var myVar2;
		
		//Fade out function
		function FaderOut()
		{
		//Use interval to automatically fade out the image
		myVar1=setInterval(function2, "100");
		}
		
		function function2()
		{
		if (opacity1 >=0)
			{
		opacity1 -=.10;
		fader.style.opacity = opacity1;
			}
		else
			{
		//Stops the fade and clears the interval when complete	
		clearInterval(myVar1);
		opacity1=0;
			}
		}
		
		//Fade in function
		function FaderIn()
		{
		//Use interval to automatically fade in the image
		myVar2=setInterval(function3, "100");
		}
		
		function function3 ()
		{
		if (opacity1 <1)
			{
		opacity1 += .10;
		fader.style.opacity = opacity1;
			}
		else
			{
		//Stops the fade and clears the interval when complete	
			clearInterval(myVar2);
			opacity1=1;
			}
		}
		//These are the three buttons on the page
		var fadeout = document.getElementById('fadeout');
		fadeout.addEventListener("click",FaderOut);
		
		var fadein = document.getElementById('fadein');
		fadein.addEventListener("click",FaderIn);
		
		var showResults = document.getElementById('showResults'); 
		showResults.addEventListener("click", moveMouse);
		
		
		
		
