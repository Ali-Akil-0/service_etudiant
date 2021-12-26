import logo from './logo.svg';
import React, {Component} from 'react';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Etudiant from './Etudiant/Etudiant';
import Scolarite from './Etudiant/Scolarite/Scolarite';
import Reussite from './Etudiant/Reussite/Reussite';
import Inscription from './Etudiant/Inscription/Inscription';
import Notes from './Etudiant/Notes/Notes';
import DemandeStage from './Etudiant/DemandeStage/DemandeStage';
import ConvocationStage from './Etudiant/ConvocationStage/ConvocationStage';
import Succes from './Etudiant/Notes/Success/Success';
import Entreprise from './Etudiant/ConvocationStage/Entreprise/Entreprise';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path="/" element={<Etudiant/>} />
            <Route path="/Scolarite" element={<Scolarite/>} />
            <Route path="/Reussite" element={<Reussite/>} />
            <Route path="/Notes" element={<Notes/>} />
            <Route path="/Inscription" element={<Inscription/>} />
            <Route path="/DemandeStage" element={<DemandeStage/>} />
            <Route path="/ConvocationStage" element={<ConvocationStage/>} />
            <Route path="/Succes" element={<Succes/>} />
            <Route path="/Entreprise" element={<Entreprise/>} />

          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
