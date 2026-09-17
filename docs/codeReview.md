npm notice run dev-assistant@0.1.0 dev
npm notice run tsx src/index.ts
◇ injected env (9) from .env // tip: ◈ secrets for agents [www.dotenvx.com]
╔════════════════════════════════════════╗
║        DevAssistant - Curso IA         ║
╚════════════════════════════════════════╝

Demo 1: Enviando codigo sin systemprompt

pregunta: Revisa este codigo:
```javasript

async function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  const result = await db.query(query);
  return result[0];
}

function calcularDescuento(precio, tipo) {
  if (tipo == "vip") {
    return precio * 0.8;
  } else if (tipo == "regular") {
    return precio * 0.9;
  } else {
    return precio;
  }
}
```
 Error:  400 {"type":"error","error":{"type":"invalid_request_error","message":"Your credit balance is too low to access the Anthropic API. Please go to Plans & Billing to upgrade or purchase credits."},"request_id":"req_011CevVCDMpCCKUtGS5Yr7pS"}