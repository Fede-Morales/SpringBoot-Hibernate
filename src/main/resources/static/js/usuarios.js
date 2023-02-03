// Call the dataTables jQuery plugin
$(document).ready(function() {
    cargarUsuarios();
  $('#usuarios').DataTable();
  actualizarEmailUsser();
});

async function cargarUsuarios(){
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers: getHeaders()
  });
  const usuarios = await request.json();

function actualizarEmailUsser(){
     document.getElementById('txt-email-usser').innerHTML = localStorage.email;
}


  let listadoHtml = ' ';
  for(usuario of usuarios){
    let buttonDelete = '<a href="#" onclick="deleteUsuario('+usuario.id+')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
    //Condicional para cuando se registra el usuario, que el campo telefono no aparezca con "null"
    let telefono = usuario.telefono == null ? '-' : usuario.telefono;
    let usuarioHtml = '<tr><td>' + usuario.id + '</td><td>'+usuario.nombre + ' ' + usuario.apellido+ '</td><td>'
                    + usuario.email + '</td><td>' + telefono
                    + '</td><td>'+ buttonDelete +'</td></tr>'
    listadoHtml += usuarioHtml
  }


  document.querySelector('#usuarios tbody').innerHTML = listadoHtml;
}

function getHeaders() {
    return {'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': localStorage.token
    }
}

async function deleteUsuario(id){

    if(!confirm('Desea eliminar este usuario?')){

        return;
    }
    const request = await fetch('api/usuarios/'+ id, {
      method: 'DELETE',
      headers: getHeaders()
    });
    alert('Usuario eliminado')
    location.reload();
}