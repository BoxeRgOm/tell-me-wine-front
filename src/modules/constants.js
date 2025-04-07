
export const api_url = (()=>{

    if (typeof window !== "undefined") {
        // 브라우저 환경일 때만 실행
        const isLocalhost = ["localhost", "127.0.0.1"].includes(window.location.hostname);
        if (isLocalhost) {
            return 'http://localhost:3001'
        }
      }
    return 'https://tell-me-wine-node.onrender.com'
   
})()