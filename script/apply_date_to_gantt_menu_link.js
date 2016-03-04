/*
Path pattern: /gantt$
Type: JavaScript
Apply date to gantt menu link.
*/
$(function() {
  $('#main-menu > ul').find('li .gantt').attr('href', function(){
    // Apply previous month
    var date = new Date();
    return this + '?months=2&month=' + date.getMonth() + '&year=' + date.getFullYear() + '&zoom=4';
  });
});