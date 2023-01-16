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
                                        <td>
                                            <div class="card" style="width: 10rem;">
                                            <img class="card-img-top" src="${image}" alt="Card image cap">
                                         </div>
                                       </td>
                                        <td><a onclick='my_detail("${name}")'>${name}</a></td>
                                    </tr>`
                        $('#table-contents').append(temp_html)
                    }
                }
            })
        }

         function my_detail(name){
            location.href = "/game/review?name_give=" + name.split(' ').join('');
         }