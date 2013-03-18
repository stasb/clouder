
function js_audioPlayer(file,location){
  $(document).ready(function(){

    $('#jquery_jplayer_' + location).jPlayer({
                    ready: function () {
                            $(this).jPlayer("setMedia", {
                                    mp3: file
                            });
                    },
                    play: function() { // To avoid both jPlayers playing together.
                            $(this).jPlayer("pauseOthers");
                    },
                    repeat: function(event) { // Override the default jPlayer repeat event handler
                            if(event.jPlayer.options.loop) {
                                    $(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
                                    $(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerRepeat", function() {
                                            $(this).jPlayer("play");
                                    });
                            } else {
                                    $(this).unbind(".jPlayerRepeat").unbind(".jPlayerNext");
                                    $(this).bind($.jPlayer.event.ended + ".jPlayer.jPlayerNext", function() {
                                            $("#jquery_jplayer_2").jPlayer("play", 0);
                                    });
                            }
                    },
                    cssSelectorAncestor: "#jp_container_" + location,
                    swfPath: "../assets/javascripts",
                    supplied: "mp3",
                    wmode: "window",
                    solution: "flash, html"
            });

  });
};

js_audioPlayer('http://api.soundcloud.com/tracks/82813970/stream?client_id=f837b00cd8d79383183d405b33a8a25d', 1);
js_audioPlayer('http://api.soundcloud.com/tracks/83415815/stream?client_id=f837b00cd8d79383183d405b33a8a25d', 2);
js_audioPlayer('http://api.soundcloud.com/tracks/82060013/stream?client_id=f837b00cd8d79383183d405b33a8a25d', 3);
