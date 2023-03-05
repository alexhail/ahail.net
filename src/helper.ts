export function deslug(string: string){
  return capitalize(string.split("_").join(" ")).replace("And", "&")
}

export function dom(selector: string) {
  return document.querySelector(selector)
}

export function domAll(selector: string) {
  return document.querySelectorAll(selector)
}

export function addEvent(element: any, type: string, handler: void) {
  if (element.attachEvent) element.attachEvent('on'+type, handler); else element.addEventListener(type, handler);
}

export function removeEvent(element: any, type: string, handler: void) {
  if (element.detachEvent) element.detachEvent('on'+type, handler); else element.removeEventListener(type, handler);
}

export function queryString(opts: object) {
  return (<any> Object).entries(opts).reduce((query: string, [key, value]: Array<string>) => query + (Object.keys(opts).indexOf(key) > 0? "&": "")+key+"="+value, "")
}

export function capitalize(string: string) {
  let capitalized: Array<string> = [];

  string.split(' ').forEach(word => {
    capitalized.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  });

  return capitalized.join(' ');
}

export function getCookie(name: string) {
  let match = document.cookie.match(RegExp('(?:^|;\\s*)' + name + '=([^;]*)')); 
  return match ? match[1] : null;
}

export function deleteCookie(name: string) {
  document.cookie = name +"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

export function setCookie(name: string, value: string, days: number) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export function randomString(length: number = 20, schema: string = 'Aa#') {
  let mask: string = ""
  let result: string = ""
  const banks: any = {
    'A': "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    'a': "abcdefghijklmnopqrstuvwxyz",
    '#': "0123456789",
    '$': "$#@!%&*+=~"
  }

  // Store mask banks based on schema
  for(let char of schema)
    if(banks.hasOwnProperty(char))
      mask += banks[char]
    
  // Prevent repeat characters back to back
  let new_random_char_index = Math.floor(Math.random() * mask.length)

  for(let i = 0; i < length; i++){
    if(typeof result[i - 1] !== "undefined")
      while(result[i - 1] == mask[new_random_char_index])
        new_random_char_index = Math.floor(Math.random() * mask.length)

    result += mask[new_random_char_index];
  }

  return result;
}