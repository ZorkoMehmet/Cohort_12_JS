const dizi = [11, 33, 35, -4, -32, 66, -70]

const result = (n) => {
    let totalNegatives = 0
    let totalPositives = 0

    for(let i = 0; i < n.length; i++)
    if(n[i] < 0) { 
        totalNegatives += n[i]
    } else {
        totalPositives =+ n[i]
    }
    console.log(`Negatif sayilar toplami ${totalNegatives}'dir`)
    console.log(`Pozitif sayilar toplami ${totalPositives}'dir`)
    
    
}
result(dizi)
