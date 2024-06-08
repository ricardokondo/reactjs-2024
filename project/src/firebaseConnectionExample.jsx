//Importação das bibliotecas de configuração do firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configurações encontradas no console do Firebase
//Insira aqui as configurações do seu projeto
/* Projeto ProgWeb - Facom
const firebaseConfig = {

// TO DO
};
*/

// Projeto Todo-List
const firebaseConfig = {
// TO DO
};



//Inicialização do firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth};