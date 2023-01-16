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
            let url = response['img_give']
            let desc = response['desc_give']

            url = encodeURI(url).replace("(", "%28").replace(")", "%29");


            let temp_html = `
                        <p>${name}</p>
                        <h7>${company} &nbsp|&nbsp ${genre} &nbsp ${charge}</h7>
                    `
            let temp_html2 = `
                           <img class="card-img-top" id="detail_img" src="${url}" alt="Card image cap">
                                <div class="card-body">
                                    <h2 class="card-title" id="card_title">Information</h2>
                                    <p class="card-text">${desc}</p>
<!--                            
                                </div>
                             `
            $('#game-title').append(temp_html)
            $('#detail_info').append(temp_html2)


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