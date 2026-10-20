const dialog=document.querySelector('#lightbox');
document.querySelectorAll('[data-image]').forEach(button=>button.addEventListener('click',()=>{dialog.querySelector('img').src=button.dataset.image;dialog.showModal();}));
dialog.querySelector('.close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
document.querySelectorAll('[data-copy]').forEach(button=>button.addEventListener('click',async()=>{const status=document.querySelector('.copy-status');try{await navigator.clipboard.writeText(button.dataset.copy);status.textContent='邮箱已复制';}catch{status.textContent='请手动复制：'+button.dataset.copy;}}));
