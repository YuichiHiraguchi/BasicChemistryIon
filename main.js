'use strict';

{
  const btn1=document.getElementById('btn1');
  const btn2=document.getElementById('btn2');
  const kotae=document.getElementById('kotae');
  const jikan=document.getElementById('jikan');
  const hyouji=document.getElementById('hyouji');
  var timerID=null;
  var s=0
  var m=0

  var sec=0;
  var min=0
    function timer() {
      sec=sec+1;
      if (min=0) {
       jikan.textContent=min +"　分　"+sec+ "　秒";
        }
         else {
          let min1=Math.floor(sec/60);
          let sec1=sec-min1*60;
          if (min1>=10) {
            jikan.textContent="終了";
            //nyuryoku.readOnly=true;
          }else {
          jikan.textContent=min1 +"　分　"+sec1+ "　秒";
                }
              }
            };

  btn1.addEventListener('click',()=>{
      let mondai=['H<sup>+</sup>','Li<sup>+</sup>','Na<sup>+</sup>','K<sup>+</sup>','Ag<sup>+</sup>','Cu<sup>+</sup>','NH<sub>4</sub><sup>+</sup>','H<sub>3</sub>O<sup>+</sup>','Mg<sup>2+</sup>','Ca<sup>2+</sup>','Ba<sup>2+</sup>','Zn<sup>2+</sup>','Fe<sup>2+</sup>','Cu<sup>2+</sup>','Al<sup>3+</sup>','Fe<sup>3+</sup>','F<sup>-</sup>','Cl<sup>-</sup>','Br<sup>-</sup>','I<sup>-</sup>','OH<sup>-</sup>','NO<sub>3</sub><sup>-</sup>','CH<sub>3</sub>COO<sup>-</sup>','O<sup>2-</sup>','S<sup>2-</sup>','SO<sub>4</sub><sup>2-</sup>','CO<sub>3</sub><sup>2-</sup>','PO<sub>4</sub><sup>3-</sup>','水素イオン','リチウムイオン','ナトリウムイオン','カリウムイオン','銀イオン','銅(Ⅰ)イオン','アンモニウムイオン','オキソニウムイオン','マグネシウムイオン','カルシウムイオン','バリウムイオン','亜鉛イオン','鉄(Ⅱ)イオン','銅(Ⅱ)イオン','アルミニウムイオン','鉄(Ⅲ)イオン','フッ化物イオン','塩化物イオン','臭化物イオン','ヨウ化物イオン','水酸化物イオン','硝酸イオン','酢酸イオン','酸化物イオン','硫化物イオン','硫酸イオン','炭酸イオン','リン酸イオン']

      let results=['水素イオン','リチウムイオン','ナトリウムイオン','カリウムイオン','銀イオン','銅(Ⅰ)イオン','アンモニウムイオン','オキソニウムイオン','マグネシウムイオン','カルシウムイオン','バリウムイオン','亜鉛イオン','鉄(Ⅱ)イオン','銅(Ⅱ)イオン','アルミニウムイオン','鉄(Ⅲ)イオン','フッ化物イオン','塩化物イオン','臭化物イオン','ヨウ化物イオン','水酸化物イオン','硝酸イオン','酢酸イオン','酸化物イオン','硫化物イオン','硫酸イオン','炭酸イオン','リン酸イオン','H<sup>+</sup>','Li<sup>+</sup>','Na<sup>+</sup>','K<sup>+</sup>','Ag<sup>+</sup>','Cu<sup>+</sup>','NH<sub>4</sub><sup>+</sup>','H<sub>3</sub>O<sup>+</sup>','Mg<sup>2+</sup>','Ca<sup>2+</sup>','Ba<sup>2+</sup>','Zn<sup>2+</sup>','Fe<sup>2+</sup>','Cu<sup>2+</sup>','Al<sup>3+</sup>','Fe<sup>3+</sup>','F<sup>-</sup>','Cl<sup>-</sup>','Br<sup>-</sup>','I<sup>-</sup>','OH<sup>-</sup>','NO<sub>3</sub><sup>-</sup>','CH<sub>3</sub>COO<sup>-</sup>','O<sup>2-</sup>','S<sup>2-</sup>','SO<sub>4</sub><sup>2-</sup>','CO<sub>3</sub><sup>2-</sup>','PO<sub>4</sub><sup>3-</sup>']
      let n = Math.floor(Math.random()*results.length);
      //nyuryoku.readOnly=false;
      //nyuryoku.value='';
      kotae.textContent=results[n];
      btn1.innerHTML=mondai[n];
      m=m+1
      hyouji.textContent="";
      mondaisuu.textContent="問題数："+m
      btn2.textContent="答え合わせ"
      if (m==1) {
        timerID = setInterval(timer,1000);
      }

    })

  btn2.addEventListener('click',()=>{
      if (btn2.textContent=="答え合わせ" && jikan.textContent!=="終了") {
        const nyuryokup=document.getElementById("hyouji");
        onclick="disabled=true";
        //nyuryoku.readOnly=true
        if (kotae.textContent==nyuryokup.innerHTML && nyuryokup.innerHTML!=="") {
          btn2.textContent="正解";
            s=s+1;
          seikaisuu.textContent="正解数："+s
        }else if (nyuryokup.innerHTML!=="") {
          btn2.innerHTML="不正解 : "+kotae.textContent;
        }else {
      //    nyuryoku.readOnly=false;
        }

      if (m>=20 &&s/m>=0.8) {
        goukaku.textContent="合格！";
        clearInterval(timerID);
      }else {
        goukaku.textContent=""
      }
    }
  })

  document.getElementById("tuujyoubtn").onclick=function(){
    let hyouji=document.getElementById("hyouji");
    let tuujyou=document.getElementById('tuujyou').value;
    let newhyouji=hyouji.innerHTML + tuujyou;
    hyouji.innerHTML=newhyouji;
    document.getElementById('tuujyou').value="";
  }

  document.getElementById("uebtn").onclick=function(){
    let hyouji=document.getElementById("hyouji");
    let ue=document.getElementById('ue').value;
    let newhyouji=hyouji.innerHTML + ue.sup();
    hyouji.innerHTML=newhyouji;
    document.getElementById('ue').value="";
  }

  document.getElementById("sitabtn").onclick=function(){
    let hyouji=document.getElementById("hyouji");
    let sita=document.getElementById('sita').value;
    let newhyouji=hyouji.innerHTML + sita.sub();
    hyouji.innerHTML=newhyouji;
    document.getElementById('sita').value="";
  }
  document.getElementById("clear").onclick=function(){
    hyouji.innerHTML="";
  }
}
