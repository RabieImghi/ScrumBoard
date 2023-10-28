function drog_drop_function(){
    let lists_story_user=document.getElementsByClassName('story');
    let todo_box=document.getElementById('todo_box');
    let doing_box=document.getElementById('doing_box');
    let finish_box=document.getElementById('finish_box');
    for(list_story of lists_story_user){
        list_story.addEventListener('dragstart', function(e){
            let selected = e.target;
            todo_box.addEventListener('dragover', function(e){
                e.preventDefault();
            })
            todo_box.addEventListener('drop', function(e){
                todo_box.appendChild(selected);
                selected=null;
            })
            doing_box.addEventListener('dragover', function(e){
                e.preventDefault();
            })
            doing_box.addEventListener('drop', function(e){
                doing_box.appendChild(selected);
                selected=null;
            })
            finish_box.addEventListener('dragover', function(e){
                e.preventDefault();
            })
            finish_box.addEventListener('drop', function(e){
                finish_box.appendChild(selected);
                selected=null;
            })
        });         
    }
}