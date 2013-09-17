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
				//content.innerHTML = counter;
				counter--
			} else {
				alert("You have been here for 10 seconds");
				clearInterval(contentTimer);
			}
		}
		
		updateContent();
		//Updates the time every second
		var contentTimer = setInterval(updateContent, "1000");
	
		//Canvas is called and context is defined
		var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		
		//Call Halo Image
		var imageObj = new Image();
		imageObj.src = 'images1.jpg';
		
		//Function to move Halo object at a set interval of time
		function moveobj ()
		{
		var myvar3=setInterval(function4,"30");
		}
		var movex=0;
		var movey=400;
		
		//Moves object by drawing and then clearing the space to simulate movement
		function function4 ()
		{
		
		if (movex<700)
		{
		context.clearRect(0,400,700,500);
		context.drawImage(imageObj, movex, movey);
		
		movex = movex + 5;
		movey = movey + 0;
		}
		else
		{
		clearInterval(myvar3);
		}
		}
		moveobj();
		
		//Draws objects on the canvas
		function draw ()
		{
		//Draw rectangle
		context.clearRect(0, 0, 700, 500);
	    context.beginPath();
        context.rect(250, 200, 200, 100);
        context.fillStyle = 'black';
        context.fill();
	    context.stroke();
		
		//Draw circle
		context.beginPath();
		context.arc(95,50,40,0,2*Math.PI);
		context.stroke();
	  
		}
		//Calls the draw function
		draw ();
	  
		
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
		
		/*var showResults = document.getElementById('showResults'); 
		showResults.addEventListener("click", moveMouse);
		*/
		
		
		
