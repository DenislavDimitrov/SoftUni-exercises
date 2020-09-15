function login(a){
  
    console.log(a.charCodeAt(0)>=65 && a.charCodeAt(0) <= 90 ? 'upper-case' : 'lower-case')
}
login(`a`)