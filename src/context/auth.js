export function setCretendials(role, token){
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("role", JSON.stringify(role));
}


export function Getcretendials() {
    const role = JSON.parse(localStorage.getItem("role"));
    const token = JSON.parse(localStorage.getItem("token"));
    return { role, token };
}





