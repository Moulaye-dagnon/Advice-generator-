export async function fetchUsers(url){
    const r = await fetch(url, {
        cache: "no-store" 
    })
    if(r.ok){
        return r.json()
    }
    throw new Error("Error serveur")
}