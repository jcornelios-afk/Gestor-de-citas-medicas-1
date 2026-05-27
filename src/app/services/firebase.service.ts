import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, getDocs, query, where } from '@angular/fire/firestore';
import { Auth, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: Firestore, private auth: Auth) {}

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async cerrarSesion() {
    return signOut(this.auth);
  }

  async getEspecialidades() {
    const col = collection(this.firestore, 'especialidades');
    const snapshot = await getDocs(col);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async getMedicosPorEspecialidad(especialidadId: string) {
    const col = collection(this.firestore, 'medicos');
    const q = query(col, where('especialidad_id', '==', especialidadId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }

  async agendarCita(cita: any) {
    const col = collection(this.firestore, 'citas');
    return addDoc(col, { ...cita, fecha_creacion: new Date(), estado: 'pendiente' });
  }

  async getCitasPorPaciente(pacienteId: string) {
    const col = collection(this.firestore, 'citas');
    const q = query(col, where('paciente_id', '==', pacienteId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
}