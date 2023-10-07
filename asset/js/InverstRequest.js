var tabBtn;
var tabDiv;
var currentTab = 0;
var tabCount;
function initialTab() {

     tabBtn = document.querySelectorAll('.k-tab-btn');
     tabDiv = document.querySelectorAll('.k-tab');
     currentTab = 0;
     tabCount = document.querySelectorAll('.k-tab').length;
    showTab(currentTab);
    tabBtn.forEach(element => {
        element.addEventListener('click', function () {
            currentTab = parseInt(this.getAttribute('data-tab'));
            showTab(currentTab);
        });
    });

}
function showTab(n) {
    // n == 0 ? document.getElementById('prevBtn').style.display = 'none' : document.getElementById('prevBtn').style.display = 'inline-block';
    if (n == tabCount - 1) {
        $("#nextBtn").addClass("d-none");
        $("#registerbtn").removeClass("d-none");
    }
    else {
        $("#registerbtn").addClass("d-none");
    }
    n == tabCount - 1 ? document.getElementById('nextBtn').innerText = "ثبت اطلاعات" : document.getElementById('nextBtn').innerText = "از شرایط و نحوه مشارکت آگاه شدم و آن را می‌پذیرم";
    //n == tabCount - 1 ? document.getElementById('nextBtn').setAttribute('type', 'submit') : document.getElementById('nextBtn').setAttribute('type', 'button');
    tabBtn.forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector(`button[data-tab='${n}']`).classList.add('active');
    tabDiv.forEach(item => {
        item.classList.remove('show', 'active');
    });
    document.querySelector(`div[data-tab='${n}']`).classList.add('show', 'active');
}

function nextTab() {
    if (currentTab < tabCount - 1) {
        currentTab += 1;
        showTab(currentTab);
    }
};
function BooststrapFileinput($selector) {

    $selector.fileinput({
        browseClass: "d-none",
        language: 'fa',
        theme: "explorer",
        uploadUrl: "/file-upload-batch/2",
        allowedFileExtensions: ['jpg', 'png', 'gif', 'pdf'],
        overwriteInitial: false,
        initialPreviewAsData: false,
        maxFileSize: 30000,
        removeFromPreviewOnError: true,
        showUpload: false,
        showRemove: false,
        showCaption: false,
        rotatableFileExtensions: false,
    });
}