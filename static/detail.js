$(document).ready(function () {
            show_comment();
            show_content();
        });
    function show_content() {

        let name = $("#name_give").val();
        alert(name)
            $.ajax({
                type: "GET",
                url: "/game/comment",
                data: {'name_give': name},
                success: function (response) {
                    let rows = response['content']
                    for (let i = 0; i < rows.length; i++) {
                        let name = rows[i]['name']

                        let temp_html = `<h1>${name}</h1>`

                        $('#game-title').append(temp_html)

                    }
                }
            });
        }

        function show_comment() {
            $('#comment-list').empty()
            $.ajax({
                type: "GET",
                url: "/game/comment",
                data: {},
                success: function (response) {
                    let rows = response['comments']
                    for (let i = 0; i < rows.length; i++) {
                        let comment = rows[i]['comment']

                        let temp_html = `<li>
                                            <h2>${comment}</h2>
                                        </li>`

                        $('#comment-list').append(temp_html)


                    }
                }
            });
        }

        function save_comment(){
            let comment = $('#comment').val()

            $.ajax({
                type: "POST",
                url: "/game/comment",
                data: {comment_give: comment},
                success: function (response) {
                    alert(response["msg"])
                    window.location.reload()
                }
            });

        }