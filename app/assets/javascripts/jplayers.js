
function js_audioPlayer(file,location){
  $(document).ready(function(){

    $('#jquery_jplayer_' + location).jPlayer({
                    ready: function () {
                            $(this).jPlayer("setMedia", {
                                    mp3: file,
                                    volume: 1
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
                                            var next_player = location + 1;
                                            $('#jquery_jplayer_' + next_player).jPlayer("play", 0);
                                    });
                            }
                    },
                    cssSelectorAncestor: "#jp_container_" + location,
                    swfPath: "../",
                    supplied: "mp3",
                    wmode: "window",
            });

  });
};
