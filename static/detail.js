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
                        <h5>${company}</h5>
                        <h5>${genre}</h5>
                        <h5>${charge}</h5>
                    `

                    $('#game-title').append(temp_html)


                }
            });
        }

        function show_comment() {
            $.ajax({
                type: "GET",
                url: "/game/review",
                data: {},
                success: function (response) {
                    let rows = response['comments']
                    for (let i = 0; i < rows.length; i++) {
                        let content = rows[i]['content']

                        let temp_html = `<li>
                                            <h2>${content}</h2>
                                        </li>`

                        $('#comment-list').append(temp_html)


                    }
                }
            });
        }

        // function save_comment(){
        //     let bucket = $('#comment').val()
        //
        //     $.ajax({
        //         type: "POST",
        //         url: "/game/comment",
        //         data: {comment_give: comment},
        //         success: function (response) {
        //             alert(response["msg"])
        //             window.location.reload()
        //         }
        //     });
        //
        // }