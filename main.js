// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// share

Share = {
  facebook: function(purl, ptitle, pimg, text) {
  url = 'http://www.facebook.com/sharer.php?s=100';
  url += '&p[title]=' + encodeURIComponent(ptitle);
  url += '&p[summary]=' + encodeURIComponent(text);
  url += '&p[url]=' + encodeURIComponent(purl);
  url += '&p[images][0]=' + encodeURIComponent(pimg);
  Share.popup(url);
  },
  twitter: function(purl, ptitle) {
  url = 'http://twitter.com/share?';
  url += 'text=' + encodeURIComponent(ptitle);
  url += '&url=' + encodeURIComponent(purl);
  url += '&counturl=' + encodeURIComponent(purl);
  Share.popup(url);
  },
  popup: function(url) {
  window.open(url,'','toolbar=0,status=0,width=626, height=436');
  }
  };