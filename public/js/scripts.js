const col = document.getElementsByClassName('col-sm-6');
const div = document.createElement('div');
div.className = 'col-sm-6';
// функция для создания дива, в нее надо передавать что то
function createTag() {
  return `<div class="col-sm-6">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text"><label for="file">Заполненность листа: %</label>

                    <progress id="file" max="100" value="0"> 75 </progress></p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`;
}
// создает новый див
document.querySelector('.nashstyle').innerHTML += createTag();
