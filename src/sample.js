function ChangeItem() {
    // document.getElementById('message').innerText ='Hello!!';
    navigator.camera.getPicture(cameraSuccess, cameraError, { 
        quality: 80, 
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        saveToPhotoAlbum: true,
    });
}

// 写真撮影が成功した時
function cameraSuccess(image){
    var img = document.getElementById("image");
    // img.src = "data:image/jpeg;base64," + image;
}
// 失敗した時
function cameraError(message){
    alert("Failed!!: " + message);
}