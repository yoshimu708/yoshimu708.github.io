'user strict';

{
  document.getElementById("task").addEventListener('mouseover',()=>{
    document.getElementById("task-sent").style.display="block";
  },false);
  document.getElementById("task").addEventListener('mouseout',()=>{
    document.getElementById("task-sent").style.display="none";
  },false);

  document.getElementById("furima").addEventListener('mouseover',()=>{
    document.getElementById("furima-sent").style.display="block";
  },false);
  document.getElementById("furima").addEventListener('mouseout',()=>{
    document.getElementById("furima-sent").style.display="none";
  },false);

}