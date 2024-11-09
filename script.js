$(document).ready(function () {

    //adicionar tarefa
  $('#addTarefabutton').on('click', function () {
    var tarefatext = $('#tarefaInput').val();
    if(tarefatext.length > 0) addTarefa(tarefatext)
  })

  //função para adicionar tarefa
  function addTarefa(text) {
    $('#tarefalist').append('<li><span>&times;</span>' + text + '</li>') 
  }


  //marcar/desmarcar tarefa como concluida
  $(document).on('click', 'li', function () {
    $(this).toggleClass('completed');
  })


  //remover tarefa
  $(document).on('click', 'span', function (e) {
    e.stopPropagation(); //evitar a propagaração do evento para o elemento pai (li)
    $(this).parent().fadeOut(500, function () {
     $(this).remove();
    })

  //função para salvar tarefas localmente
    function salvartarefa() {
     var tarefa = $('#tarefalist').html();
     localStorage.setItem('tarefa', tarefa);
    }
  })

})