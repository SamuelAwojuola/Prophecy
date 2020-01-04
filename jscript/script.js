//to checkAll and unCheckAll 
$(document).ready(function () {
    // Check or Uncheck All checkboxes
    $("#checkall").change(function () {
        var checked = $(this).is(':checked');
        if (checked) {
            $(".checkbox").each(function () {
                $(this).prop("checked", true);
            });
        } else {
            $(".checkbox").each(function () {
                $(this).prop("checked", false);
            });
        }
    });

    // Changing state of CheckAll checkbox 
    $(".checkbox").click(function () {

        if ($(".checkbox").length == $(".checkbox:checked").length) {
            $("#checkall").prop("checked", true);
        } else {
            $("#checkall").removeAttr("checked");
        }

    });
});
//<!--to hide/unhide checked rows-->
$(document).ready(function () {
    $('#mybutton').click(function () {
        $('table tr td:first-child :checkbox:not(:checked)').closest('tr').toggle('slow');
        //            $(this).text($(this).text() == 'Show All Rows' ? 'Show Only Selected Rows' : 'Show All Rows');
    });
});

//<!--To style the [ and ] of bible references-->

var $test1 = $('.timelineTable').html();
$test1 = $test1.replace(/\[/gi, '<span class="format"><em>[</em></span>');
$('.timelineTable').html($test1);

var $test2 = $('.timelineTable').html();
$test2 = $test2.replace(/\]/gi, '<span class="format"><em>]</em></span>');
$('.timelineTable').html($test2);

//<!--Instead of Reftagger-->
//BGLinks.version = "NKJV";
//    BGLinks.linkVerses();

//<!--Reftagger for Scritpure Refrence-->
var refTagger = {
    settings: {
        bibleVersion: "NKJV",
        roundCorners: true
    }
};
(function (d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = "//api.reftagger.com/v2/RefTagger.js";
    s.parentNode.insertBefore(g, s);
}(document, "script"));


//to check boxes by clicking on parent/container <td>
$("td").click(function (e) {
    var cb = $(this).find(":checkbox")[0];
    if (e.target != cb) cb.checked = !cb.checked;
    $(this).toggleClass("selected", cb.checked);
});


//Highlighting Columns
$(document).ready(function () {
    $('#timelineTable').tableHover({
        rowClass: 'hoverrow',
        colClass: 'hover',
        cellClass: 'hovercell',
        headRows: true,
        footRows: true,
        headCols: true,
        footCols: true,
        clickClass: 'click',
        ignoreCols: [1]
    });
});

//To hide and show menu
$("#navbutton").click(function () {
    $("#nav").toggle(250);
});

//To load nav
$(document).ready(function () {

    $('#titlebar').load("navigation.html");

});

    $(document).ready(function () {

    $('.timelineTableContainer').delay( 100 ).toggle(100);

});

$('li').click(function() {
  $(this).siblings().find('a').removeClass('focus');
  $(this).find('a').addClass('focus');
});