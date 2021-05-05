function click()  {
    var a = document.getElementById("email").value;
    var b = document.getElementById("pass").value;
    var c = document.getElementById("name").value;
if (a =='' && b =='' && c ==''){
        alert('Tên, email, pass')
    }
    else if( a=='' &&  b==''){
        alert('Hãy nhập Email và Password')
        
    }
    else if( c=='' && b==''){
        alert('Hãy nhập Name và Password')
    
    }
    else if(b=='' && a=='' ){
        alert('Hãy nhập Password và Email')
    }
    else if(c==''){
        alert('Hãy nhập Name')
    }
    else if(a==''){
        alert('Hãy nhập Email')
    }
    else if(b==''){
        alert('Hãy nhập Password')
    }
}
