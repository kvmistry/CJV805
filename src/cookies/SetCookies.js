import Cookies from "universal-cookie";
const cookies = new Cookies();
class SetCookies{
 static get (key){
     return cookies.get(key);
 }
  static set(key,value,options){
      cookies.set(key,value,options)
  }
 static  remove(key){
      cookies.remove(key)
  }
}

export default SetCookies;