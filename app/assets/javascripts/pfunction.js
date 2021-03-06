$(function() {
        // Setup the player to autoplay the next track
        var a = audiojs.createAll({
          trackEnded: function() {
            var next = $('.playing').next();
            if (!next.length) next = $('.span3').first();
            next.addClass('playing').siblings().removeClass('playing');
            audio.load($('a', next).attr('data-src'));
            audio.play();
            var title = $('.playing .track-title').text();
            var count = $('.playing .play-count').text();
            var time = $('.playing .timeago').text();
            var url = $('.playing .url').text();
            $('.i-track-title').replaceWith('<a class="i-track-title" target="_blank" href="' + url + '">' + title + '</a>');
            $('.i-play-count').replaceWith('<div class="i-play-count">' + count + ' plays' + '</div>');
            if (time != '')
              {
              $('.i-time-ago').replaceWith('<div class="i-time-ago">' + 'Release date:' + time + '</div>');
              }
            else
              {
              $('.i-time-ago').replaceWith('<div class="i-time-ago"></div>');
              }
          },
          imageLocation: '/assets/player-graphics.gif',
          swfLocation: '/assets/audiojs.swf',
          setVolume: '100'
        });

        // Load in the first track
        var audio = a[0];
            first = $('.span3 a').attr('data-src');
        $('.span3').first().addClass('playing');
        // var current = $('.playing a').text();
        // $('.currently-playing').replaceWith('<div class="currently-playing">' + current + '</div>');
        var title = $('.playing .track-title').text();
        var count = $('.playing .play-count').text();
        var time = $('.playing .timeago').text();
        var url = $('.playing .url').text();
        $('.i-track-title').replaceWith('<a class="i-track-title" target="_blank" href="' + url + '">' + title + '</a>');
        $('.i-play-count').replaceWith('<div class="i-play-count">' + count + ' plays' + '</div>');
        if (time != '')
          {
          $('.i-time-ago').replaceWith('<div class="i-time-ago">' + 'Release date:' + time + '</div>');
          }
        else
          {
          $('.i-time-ago').replaceWith('<div class="i-time-ago"></div>');
          }
        audio.load(first);

        // Load in a track on click
        $('.span3').click(function(e) {
          e.preventDefault();
          if ($(this).hasClass('pausable'))
            {
            audio.playPause();
            $(this).removeClass('pausable');
            $(this).addClass('paused');
            }
          else if ($(this).hasClass('paused'))
            {
            $(this).addClass('pausable').siblings().removeClass('pausable');
            audio.play();
            }
          else
            {
            $(this).addClass('playing').siblings().removeClass('playing');
            $(this).addClass('pausable').siblings().removeClass('pausable').removeClass('paused');
            audio.load($('a', this).attr('data-src'));
            var title = $('.playing .track-title').text();
            var count = $('.playing .play-count').text();
            var time = $('.playing .timeago').text();
            var url = $('.playing .url').text();
            $('.i-track-title').replaceWith('<a class="i-track-title" target="_blank" href="' + url + '">' + title + '</a>');
            $('.i-play-count').replaceWith('<div class="i-play-count">' + count + ' plays' + '</div>');
            if (time != '')
              {
              $('.i-time-ago').replaceWith('<div class="i-time-ago">' + 'Release date:' + time + '</div>');
              }
            else
              {
              $('.i-time-ago').replaceWith('<div class="i-time-ago"></div>');
              }
            audio.play();
            }
        });

        // Next/previous buttons

        $('.next').click(function(e) {
          var next = $('.playing').next();
          next.click();
        });

        $('.previous').click(function(e) {
          var prev = $('.playing').prev();
          prev.click();
        });

        // Keyboard shortcuts
        $(document).keydown(function(e) {
          var unicode = e.charCode ? e.charCode : e.keyCode;
             // right arrow
          if (unicode == 39) {
            var next = $('.playing').next();
            if (!next.length) next = $('.span3').first();
            next.click();
            // back arrow
          } else if (unicode == 37) {
            var prev = $('.playing').prev();
            if (!prev.length) prev = $('.span3').last();
            prev.click();
            // spacebar
          } else if (unicode == 32) {
            $('.playing').click();
          }
        });

      });
