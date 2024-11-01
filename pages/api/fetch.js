import { NextApiRequest, NextApiResponse } from "next";

const admin = require("firebase-admin");

// Firebase authentication
var serviceAccount = {
  type: "service_account",
  project_id: "retro-zadar",
  private_key_id: "b419c22a52a2121f40043eff6f61d169932d0dbd",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDYvOGWyjgn1jJm\nvLG8o/OJeRR7PHVLGkC3cJhZevgpEbr4UgE6s0Jwq+VGJwc3ZOTlyrQ+Qnmdz1RS\nTczbX4rwWvYB1qH3SN0huDK3hwfDVwXkxpZJDmrLqhlSH4TDHswya6DbVbY27KEy\ng6igDQzmQKeDMoU4tr0L/XAR8dCC9l4ijLRtE7W2L1j1cTkp3Ma3t8Zd8susgMrg\nheJkeVEw4dUvPfnmBebS1dYdbfdAuzJp/pPW2ZDzgicb54WbLLTnxHR6U3D5l/aE\nYZY3Hwe2WfQVoiDiev0pJeKg+krdxZH3WM3JnWKb43l8UYbMaU+WbpzSKv1SR5do\n6IcGsSrdAgMBAAECggEABTbHoO5s2wOuvLf6kqFjFEIpOWAjKWzDp8x51C7YIqzL\nHnqVwWLBZp9MA08HDNCzJpZxlZnY/fBLhM6Ou6xMIsVQnvGASsgIjqCB+W/lj1AP\nOgmClG++jZDvAQHCTatdADPrCVVbh9PtFAXRnBNHfym8N4GTB0hy7dBQAa6BwW5Y\nGbztJtnC7CaVd/03cm7M4DriRcN5VjAW+Pj26/ZFOBYBnCqNTbMYd1V0vz/L0GLK\nBttFYLgjIo+i5hFxe+XF6QiqRw/4P4QnTm0aRfiKeYe/tSlbPn6NwC4+BeITMOzT\nTGgy4ZztfUCstovGpIgo1RdNL6E5oJA/+A9hQIXqwQKBgQD3b61qKNbXpZyp+sb2\nKnRR2/BmQh72YPb4cBZD910BqSy6SdM7nE5Wki8ewb32w84Y1WITLzge/tuarUJp\nJYPGECptWrR/pctJkViNG38lUlKokgDfMHGChceUXroZq9OxK3z41V+MusN6TVcS\nN/WRQsdESeK53yrp3TE8CH3qrQKBgQDgPTYMcCAhqMxbGctx+x0Y0dDGyWotCEdJ\njBUYiz+lf5WnWtHv91xY0CNf2oLqmlDDcxTREHk7eq3pIZdhzaAQ6EPrLKK5bIuP\nRUKpllAFYx2IvnbPmkxWcHLk7BQtM179d2h3bJ/s+OcKlDA0CN/bvamjl9YB4nTC\nzItWDNn28QKBgQC07jKOOAKxeWZPXRLzmiOoX/0vqRXe7xRoof2GAXE+76fHKIiP\nREJ8RzSxdtYjhRZFTnMCuDp/X7jRJ/Qx0r7Cq7t6byMhW+iEiQWJWRvl/IZ4wRpm\nGZRG7u/7bDEE6IJJQRWHFu9hhoe9/KO4rLaiW4Q+SRDC/Y7xp06DKWp5mQKBgFzH\ndtF2oxTKLqOS7KZgbA2U4nkdZRz0y+oWV7QsCU2EmHsCDNLo2gC1Pa2vT3OaHciA\nmSBXXJHLlKFdELGazpuwPknT0hA+ZRAGbCqW0s0n0VR+2dHT2bn6FM+7Di4Vjzv4\nZ/ThsNnvskiiP7+H3Hei5cmWTSnCdOUUlKIp9xVBAoGAEmMt22dSXE2QauBTxg+p\nrhRYuMUSNiVJ91JgX3Hn5HKIHiA+3FEwgKta1CUvplc3moSLsTYvplptApoBHXyM\na1gxzF16qDF8uz3I7ZOyCJpa/xYL65hpgHz5+uujaUaoV281rwpN7vpeVCze1vkH\n/cSeLZQBfYXqzMaInNrB9Qo=\n-----END PRIVATE KEY-----\n",

  client_email: "firebase-adminsdk-t6iwm@retro-zadar.iam.gserviceaccount.com",
  client_id: "112100055662051229087",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-t6iwm%40retro-zadar.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "retro-zadar.firebaseio.com", //https://[DATABASE NAME].firebaseio.com
  });
}

const db = admin.firestore();
export default function handler(req, res) {
  const docSnap = db.collection("retroData5").doc("test");
  const doc = docSnap.get();
  //   const allData = doc.data();
  res.status(200).json({ doc });
}
