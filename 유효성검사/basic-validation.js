// document.querySelector('.renum').alert('비밀번호가 다릅니다.')
//완료를 눌렀을 때  complete onclick
//폰번과 폰번다시가 다르면,  if(num.textContent!==renum.textContent)
//'비밀번호가 다릅니다'라는 경고창 출력 return alert('비밀번호가 다릅니다.')
 
function numfunc (){
    if((document.querySelector('.num1').value) !== (document.querySelector('.renum1').value) ){
        return alert('번호가다릅니다')
    }
 
   else if((document.querySelector('.lname1').value) !== '강'){
        return alert('성이다릅니다')
    }
 
   else if((document.querySelector('.fname1').value) !== '한얼'){
        return alert('이름이다릅니다')
    }
 
   else if((document.querySelector('.email1').value) !== 'rkdgksdjfwkd92@gmail.com'){
        return alert('메일이다릅니다')
    }
 }
 
 document.querySelector('.완료버튼').onclick = numfunc
