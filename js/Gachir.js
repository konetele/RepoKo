         var videos = ["https://www.youtube.com/embed/tyYWuLyuosc?autoplay=1", "https://www.youtube.com/embed/zxptc68Mpw4?autoplay=1", "https://www.youtube.com/embed/L_pALlfb8oM?t=19?autoplay=1",
		  "https://www.youtube.com/embed/GApwTU_Wygo?autoplay=1", "https://www.youtube.com/embed/CnEJlPAl_mQ?autoplay=1", "https://www.youtube.com/embed/89AehHTc4no?autoplay=1", "https://www.youtube.com/embed/IzVSnx7C3HI?autoplay=1", "https://www.youtube.com/embed/m1BrqlKaEOU?autoplay=1"];
         window.onload = function () {
            var playerDiv = document.getElementById("random_player");
            var player = document.createElement("IFRAME");
            var randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];
            player.setAttribute('width', '640');
            player.setAttribute('height', '390');
            player.setAttribute('src', randomVideoUrl);
			player.setAttribute('frameborder', '0');
            playerDiv.appendChild(player);
        };
