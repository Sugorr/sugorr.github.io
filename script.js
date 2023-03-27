AOS.init();

const resume = document.getElementById('resume');

function openResume(){
    resume.classList.remove('hidden');
    window.history.pushState({ page: 'resume'}, 'resume', '#resume');
}


function closeResume(){
    resume.classList.add('hidden');
    window.history.go(-1);
}

window.addEventListener('popstate', function(e) {
    if (e.state){
        closeResume();
    }
});