var videoID = ""
var videoVolume = 5

$(document).ready(function ()
{
	//Loading Config from Json//
	$.getJSON("config.json", function(config)
	{
		var useBackgroundColour = false;
		var useBackgroundImage = false;

		if(config[0].useBackgroundColour == "true")
		{
			$("#background").css("background-color", "rgb(" + config[0].backgroundColour + ")", "!important");
		}

		if(config[0].useBackgroundImage == "true")
		{
			$("#background").css("background-image", "url('" + config[0].backgroundImagePath + "')");
		}

		if(config[0].useTextColour == "true")
		{
			for(var i = 1; i < 6; i++)
			{
				$("#useTextColour" + i).css("color", "rgb(" + config[0].textColour + ")");
			}

			$("#serverTitle").css("color", "rgb(" + config[0].textColour + ")");

			console.log("true");
		}
		else if(config[0].useTextColour == "false")
		{
			for(var i = 1; i < 6; i++)
			{
				$("#useTextColour" + i).css("color", "rgb(255,255,255)");
			}
			
			$("#serverTitle").css("color", "rgb(255,255,255)");

			console.log("false");
		}

		if(config[0].useBoldText == "true")
		{
			for(var i = 1; i < 6; i++)
			{
				$("#useTextColour" + i).addClass("bold-text");
			}

			$("#serverTitle").addClass("bold-text");
		}
		else if(config[0].useBoldText == "false")
		{
			for(var i = 1; i < 6; i++)
			{
				$("#useTextColour" + i).addClass("light-text");
			}

			$("#serverTitle").addClass("light-text");
		}

		if(config[0].playAudioInBackground == "true")
		{
			videoID = config[0].YTVideoID
			videoVolume = config[0].videoVolume
		}

		$("#serverTitle").text(config[0].serverTitle);

		for(var i = 1; i < 8; i++)
		{
			$("#rule" + i).text(config[1]["rule" + i]);
		}

		for(var i = 1; i < 8; i++)
		{
			$("#servers" + i).text(config[2]["servers" + i]);
		}

		for(var i = 1; i < 8; i++)
		{
			$("#content" + i).text(config[3]["content" + i]);
		}
	});

	//Animating Server Title//
	animateServerTitle_Add();


	function animateServerTitle_Remove()
	{
		$("#serverTitle").removeClass("pulse");
		$("#serverTitle").removeClass("animated");

		setTimeout(animateServerTitle_Add, 1500);
	}

	function animateServerTitle_Add()
	{
		$("#serverTitle").addClass("pulse");
		$("#serverTitle").addClass("animated");

		setTimeout(animateServerTitle_Remove, 1500);
	}
});