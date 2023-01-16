$(document).ready(function () {
            listing();
        });

        function listing() {
            $.ajax({
                type: 'GET',
                url: '/game',
                data: {},
                success: function (response) {
                    let rows = response['games']
                    for(let i = 0; i < rows.length; i++){
                        let name = rows[i]['name']
                        let image = rows[i]['img']
                        let rank = rows[i]['rank']

                        let temp_html = `<tr>
                                        <th scope="row">${rank}</th>
                                        <td><img src="${image}"></td>
                                        <td><a href="detail" onclick='detail("${name}")'>${name}</a></td>
                                    </tr>`
                        $('#table-contents').append(temp_html)
                    }
                }
            })
        }

         function detail(name) {
            $.ajax({
                type: 'POST',
                url: '/game/review',
                data: {name_give: name},
                success: function (response) {
                   // alert(response['msg'])
                    window.location.reload()
                }
            })
        }