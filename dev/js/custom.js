// -- open header menu on mouse over --//

$("details").hover(
    function () {
        $(this).attr('open', true);
    },
    function () {
        $(this).attr('open', false);
    }
);
