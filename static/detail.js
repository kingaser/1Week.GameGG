$(document).ready(function () {
    show_comment();
    show_content();
});

function show_content() {

    let name = $("#name_give").val();

    $.ajax({
        type: "GET",
        url: "/game/content",
        data: {'name_give': name},
        success: function (response) {
            console.log(response['name_give'])

            let name = response['name_give']
            let company = response['company_give']
            let genre = response['genre_give']
            let charge = response['charge_give']


            let temp_html = `
                        <h2>${name}</h2> <br>
                        <h5>${company} &nbsp|&nbsp ${genre} &nbsp ${charge}</h5>
                        
                    `

            $('#game-title').append(temp_html)


        }
    });
}

function show_comment() {
    let name_form = $('#name_give').val()
    $.ajax({
        type: "GET",
        url: "/game/comment",
        data: {name_give: name_form},
        success: function (response) {
            let rows = response['reviews']
            let count = rows.length;

            let temp_html = ``
            if (count == 0) {
                temp_html = `<li>
                                <h2>코멘트가 없습니다</h2>
                             </li>`
                $('#comment-list').append(temp_html)
            } else {
                for (let i = 0; i < rows.length; i++) {
                    let content = rows[i]['comment']

                    temp_html = `<li>
                                    <h2>${content}</h2>
                                </li>`

                    $('#comment-list').append(temp_html)
                }
            }




        }
    });
}

function save_comment() {
    let comment = $('#comment').val()
    let name = $("#name_give").val();

    $.ajax({
        type: "POST",
        url: "/game/comment",
        data: {comment_give: comment, name_give: name},
        success: function (response) {
            alert(response["msg"])
            window.location.reload()
        }
    });

}