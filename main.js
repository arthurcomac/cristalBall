const response = [
  "sim",
  "não",
  "talvez",
  "acredito que sim",
  "você tera uma surpresa",
  "não posso contar",
  "quem sabe né",
  "não seria incrivel",
  "não entendi sua pergunta",
  "pergunte outra coisa",
  "se eu contar teria que te matar",
  "sei não",
  "você que deveria saber disso",
  "hoje não",
  "decididamente",
  "sim, hoje",
  "quando descobrir te conto",
]

function buttonAsk () { 
  const fullResponse = response.length
  const numberRandom = Math.floor(Math.random() * fullResponse)
  
  document.getElementById("returnResponse").innerHTML = response[numberRandom]
}