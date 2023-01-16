$(document).ready(function () {
            listing();
        });

        function listing() {
            $.ajax({
                type: 'GET',
                url: '/movie',
                data: {},
                success: function (response) {
                    let rows = response['movies']
                    for(let i = 0; i < rows.length; i++){
                        let comment = rows[i]['comment']
                        let title = rows[i]['title']
                        let desc = rows[i]['desc']
                        let image = rows[i]['image']
                        let star = rows[i]['star']

                        let star_image = '⭐'.repeat(star)

                        let temp_html = `<div class="col">
                                            <div class="card h-100">
                                                <img src="${image}"
                                                     class="card-img-top">
                                                <div class="card-body">
                                                    <h5 class="card-title">${title}</h5>
                                                    <p class="card-text">${desc}</p>
                                                    <p>${star_image}</p>
                                                    <p class="mycomment">${comment}</p>
                                                    <button type ="button" onclick='del("${title}")' class ="btn btn-outline-danger btnSize"> 삭제 </button>
                                                </div>
                                            </div>
                                        </div>`


                        $('#cards-box').append(temp_html)
                    }
                }
            })
        }

        function del(title){
            $.ajax({
                type: 'POST',
                url: '/movie/delete',
                data: {title_give: title},
                success: function (response) {
                    alert(response['msg'])
                    window.location.reload()
                }
            });
        }

        function posting() {
            let url = $('#url').val()
            let star = $('#star').val()
            let comment = $('#comment').val()


            $.ajax({
                type: 'POST',
                url: '/movie',
                data: {url_give:url, star_give:star, comment_give:comment},
                success: function (response) {
                    alert(response['msg'])
                    window.location.reload()
                }
            });
        }

        function open_box() {
            $('#post-box').show()
        }

        function close_box() {
            $('#post-box').hide()
        }