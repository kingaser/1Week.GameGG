$(document).ready(function () {
            show_comment();
        });

        function show_comment() {
            $.ajax({
                type: "GET",
                url: "/game/<name>",
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

        function save_comment(){
            let bucket = $('#bucket').val()

            $.ajax({
                type: "POST",
                url: "/bucket",
                data: {bucket_give: bucket},
                success: function (response) {
                    alert(response["msg"])
                    window.location.reload()
                }
            });

        }