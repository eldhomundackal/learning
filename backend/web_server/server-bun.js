import {serve} from 'bun'

serve({
  fetch(request){
    const url = new URL(request.url)
    if (url.pathname ==='/') {
      return new Response('Hello user',{status:200})
      
    }else if (url.pathname ==='/book-now') {
      return new Response('Booking confirmed and the id is 687978KKL667',{status:200})
      
    }
    else{
      return new Response('404! Not found',{status:404})
    }
  },
  port:3000,
  hostname:'127.0.0.1'
})