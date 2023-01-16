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
                                <th scope="row"><h3>${rank}</h3></th>
                                <td>
                                    <div class="card" style="width: 10rem;">
                                    <img class="card-img-top" src="${image}" alt="Card image cap">
                                 </div>
                               </td>
                                <td><a href="#" id="list_a" onclick='my_detail("${name}")'><h4>${name}</h4></a></td>
                            </tr>`
                $('#table-contents').append(temp_html)
            }
        }
    })
}

 function my_detail(name){
    location.href = "/game/review?name_give=" + name;
 }

function logout() {
    $.removeCookie('mytoken');
    alert('로그아웃!')
    window.location.href = '/login'
}
