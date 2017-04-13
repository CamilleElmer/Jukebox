// var videocontrols = HTMLMediaElement.autoplay;

// $('.objects1').slick({
//   infinite: true,
//   slidesToShow: 3,
//   slidesToScroll: 3
// });

// // API

// p.then(function(play) {
//    // fulfillment
//   }, function(stop) {
//   // rejection
// });

// this.fa fa-play-circle = (function()
// 	_this.currentStream.then(function(player){
// 		console.log(player);
// 		player.fa fa-play-circle();
// 		});
// 	};
// this.fa fa-pause-circle = (function()
// 	_this.currentStream.then(function(player){
// 		console.log(pause);
// 		player.fa fa-pause-circle();
// 		});
// 	};
// this.fa fa-stop-circle = (function()
// 	_this.currentStream.then(function(player){
// 		console.log(player);
// 		player.fa fa-stop-circle();
// 		});
// 	};

///------this one directly below works for sure
$.ajax({
	type: "GET",
	url:"http://api.soundcloud.com/tracks?client_id=fd4e76fc67798bfa742089ed619084a6"
}).then(function(response){
	console.log(response);
	for(var i=0; i < response.length; i++){
		console.log(response[i].stream_url)
		document.getElementsByClassName("music")[0].insertAdjacentHTML
		('beforeend',
			`<h1>`+response[i].title+`</h1>
				<audio controls>
				<source
				src='`+response[i].stream_url+`?client_id=fd4e76fc67798bfa742089ed619084a6'
				</audio>`); 
	}
});

// $(document).ready(function(){
//     var juke = new JukeBox();
//     $("#play").click(function(){
//       juke.play();
//       juke.info();
//     });
//     $("#pause").click(function(){
//       juke.pause();
//     };
//   });


