import Request from '../requests/main.js';

const getNewsData= () => {
    let promise=Request.getNews();
    promise.then((res)=>{
      // console.log(res);
        $('.news-ui li').remove();
        for(let i=0;i<res.length;i++)
        {
         // console.log(res.time);
            $('.news-ui').append(`

            <li>
            <div id=${i} class="content">
             </div>
            <div class="time">
              <h4>${res[i].time}</h4>
            </div>
          </li>

            `);
            document.getElementById(i).innerHTML=res[i].datahtml;
        }
        document.getElementById('time-news-line').classList.add('timeline');
        $('.news-ui').append(`<div style="clear:both;"></div>`);
    })
}

export default {getNewsData};