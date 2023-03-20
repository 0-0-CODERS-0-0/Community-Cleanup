const workshopcard = [
    {
        workshopname:'River Cleaning',
       workshopimg:'river.jpg',
       workshoplink:'#' 
   },{
       workshopname:'street cleaning',
       workshopimg:'street.jpg',
       workshoplink:'#'
   },{
       workshopname:'Beach Cleanup',
       workshopimg:'beach.jpg',
       workshoplink:'#'
   },{
        workshopname:'Activity',
       workshopimg:'activity.jpg',
       workshoplink:'#'
   },
];

var workRow = document.querySelectorAll('.workrow')[0];
for(let i=0;i<workshopcard.length;i++){
    let work=document.createElement('div');
    work.className='workcolums';
    let imgurl;
  
        imgurl= 'images/' + workshopcard[i].workshopimg;
        work.innerHTML='<a href="'+workshopcard[i].workshoplink + '" class="sess_card"><div class="sesscardstext">'+workshopcard[i].workshopname+'</div><div class="sesscardsimg"><img class="sess_img" src="'+imgurl+'" alt="'+workshopcard[i].workshopname+'"></div></a>';
    
workRow.append(work);    
}
