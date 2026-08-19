const GITHUB_CLIENT_ID = import.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = import.env.GITHUB_CLIENT_SECRET

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    if(url.pathname === '/api/auth'){
      return Response.redirect(`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&scope=repo&redirect_uri=https://banana.zqxcc.dpdns.org/api/callback`)
    }
    if(url.pathname === '/api/callback'){
      const code = url.searchParams.get("code")
      const res = await fetch("https://github.com/login/oauth/access_token",{
        method:"POST",
        headers:{"Content‑Type":"application/json","Accept":"application/json"},
        body:JSON.stringify({client_id:GITHUB_CLIENT_ID,client_secret:GITHUB_CLIENT_SECRET,code})
      })
      const token = await res.json()
      const html = `<script>window.opener.postMessage(${JSON.stringify(token)},"*");window.close()</script>`
      return new Response(html,{headers:{"content‑type":"text/html"}})
    }
    return new Response("404",{status:404})
  }
}
