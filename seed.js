const { initializeApp } = require('firebase/app');
const { getFirestore, collection, doc, setDoc, deleteDoc, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyDN43rzcdZRKswJj0D2V8pmHdHeb8nlX-4",
  authDomain: "gestor-de-citas-medicas-1.firebaseapp.com",
  projectId: "gestor-de-citas-medicas-1",
  storageBucket: "gestor-de-citas-medicas-1.firebasestorage.app",
  messagingSenderId: "163932219171",
  appId: "1:163932219171:web:ab046c6ea58b91a6084e96"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function seed() {
  // Borrar especialidades existentes
  const col = collection(db, 'especialidades');
  const snapshot = await getDocs(col);
  for (const docSnap of snapshot.docs) {
    await deleteDoc(doc(db, 'especialidades', docSnap.id));
    console.log('Borrado:', docSnap.id);
  }

  // Crear especialidades nuevas
  const especialidades = {
    cardio1: { nombre: 'Cardiología', icono: 'heart-outline', medicos: 5 },
    pedia1: { nombre: 'Pediatría', icono: 'happy-outline', medicos: 4 },
    trauma1: { nombre: 'Traumatología', icono: 'fitness-outline', medicos: 3 },
    derma1: { nombre: 'Dermatología', icono: 'sunny-outline', medicos: 2 },
    ofta1: { nombre: 'Oftalmología', icono: 'eye-outline', medicos: 3 },
    gine1: { nombre: 'Ginecología', icono: 'flower-outline', medicos: 4 },
    neuro1: { nombre: 'Neurología', icono: 'pulse-outline', medicos: 3 },
    odonto1: { nombre: 'Odontología', icono: 'sparkles-outline', medicos: 4 },
    psiq1: { nombre: 'Psiquiatría', icono: 'chatbubbles-outline', medicos: 2 },
    gral1: { nombre: 'Medicina General', icono: 'medkit-outline', medicos: 8 }
  };

  for (const [id, data] of Object.entries(especialidades)) {
    await setDoc(doc(db, 'especialidades', id), data);
    console.log('Especialidad creada:', data.nombre);
  }

  console.log('Especialidades sembradas correctamente');
}

seed().catch(err => console.error('Error:', err));