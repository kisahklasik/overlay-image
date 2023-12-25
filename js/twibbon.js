document.getElementById("uploadBtn").onchange = function () {
document.getElementById("uploadFile").value = this.files[0].name;
};
var canvas = new fabric.Canvas('c');
canvas.setWidth(1024);
canvas.setHeight(1024);
canvas.backgroundColor = 'rgba(0,0,255,0.3)';
    
var canvasWrapper = document.getElementById('c');
var canvasWrapperWidth = canvasWrapper.clientWidth;
$(function () {
$(":file").change(function () {
if (this.files && this.files[0]) {
var reader = new FileReader();
reader.onload = imageIsLoaded;
reader.readAsDataURL(this.files[0]);
}
});
});
fabric.Image.fromURL('badut.png',function(img){
img.scaleToWidth(canvas.getWidth());
canvas.setOverlayImage(img, canvas.renderAll.bind(canvas));
});
function imageIsLoaded(e) {
fabric.Image.fromURL(e.target.result,function(img){
var aspectRatio = 1024/1024;
var factor = 1000 / img.width;
img.set({
scaleX: factor,
scaleY: factor 
});
canvas.add(img);
canvas.item(0).set({
borderColor: 'white',
cornerColor: 'black',
cornerSize: 50,
borderScaleFactor: 10,
hasBorders: true,
                                                
rotatingPointOffset:200,
padding:70, 
transparentCorners: true
});
canvas.setActiveObject(canvas.item(0));
this.__canvases.push(canvas);
canvas.sendToBack(img);
});
};
$("#download").click(function(){
$("#c").get(0).toBlob(function(blob){
saveAs(blob, "twibbon.png");
});
});
canvas.selection = false;
this.__canvases.push(canvas);
fabricCanvas.setDimensions({
  width: '100%',
  height: '100%'
},{
  cssOnly: true
});

// validation
document.getElementById("copyright").innerHTML = new Date().getFullYear();
</script>
<script type="text/javascript">
$(document).ready(function() {
$('#download').bind("click",function() 
{ 
var imgVal = $('#uploadFile').val(); 
if(imgVal=='') 
{ 
alert("Anda belum menambahkan gambar! yakin untuk mengunduh?"); 

} 
return false; 

}); 
});
