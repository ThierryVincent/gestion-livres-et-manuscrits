// src/components/LivreManagerBootstrap.js
import React, { useEffect, useState } from 'react';
import { getLivres, createLivre, deleteLivre } from '../services/livreService';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'

function LivreManagerBootstrap() {
    const [livres, setLivres] = useState([]);
    const [nouveauLivre, setNouveauLivre] = useState({ titre: '', auteur: '', code: '', type: ''});
    const [modeEdition, setModeEdition] = useState(false);
    const [livreEnEdition, setLivreEnEdition] = useState(null);

    const chargerLivres = () => {
        getLivres()
            .then(res => setLivres(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        chargerLivres();
    }, []);

    const ajouterLivre = () => {
        createLivre(nouveauLivre)
            .then(() => {
                chargerLivres();
                setNouveauLivre({ titre: '', auteur: '', code: '', type: ''});
            })
            .catch(err => console.error(err));
    };

    const supprimerLivre = (id) => {
        deleteLivre(id)
            .then(() => chargerLivres())
            .catch(err => console.error(err));
    };

    const mettreAjourLivre = () => {
        axios.put(`http://localhost:8080/api/livres/${livreEnEdition.id}`, nouveauLivre)
        .then(() => {
            chargerLivres();
            setNouveauLivre({ titre: '', auteur: '', code: '', type: ''});
            setModeEdition(false);
            setLivreEnEdition(null);
        })
        .catch(err => console.error(err));
    };

    const annulerEdition =() => {
        setModeEdition(false);
        setNouveauLivre({ titre: '', auteur: '', code: '', type: ''});
        setLivreEnEdition(null);
    }

    return (
        <div className="container py-4">
            <h1 className="mb-4">📚 Gestion des Livres</h1>
            
            <div className="card mb-4">
                <div className="card-header">Ajouter un livre</div>
                <div className="card-body row g-3">
                    <div className="col-md-3">
                        <input className="form-control" placeholder="Titre" value={nouveauLivre.titre}
                            onChange={e => setNouveauLivre({...nouveauLivre, titre: e.target.value})} />
                    </div>
                    <div className="col-md-3">
                        <input className="form-control" placeholder="Auteur" value={nouveauLivre.auteur}
                            onChange={e => setNouveauLivre({...nouveauLivre, auteur: e.target.value})} />
                    </div>
                    <div className="col-md-2">
                        <input className="form-control" placeholder="Code" value={nouveauLivre.code}
                        onChange={e => setNouveauLivre({...nouveauLivre, code: e.target.value})} />
                    </div>
                    <div className="col-md-2">
                        <input className="form-control" placeholder="Type" value={nouveauLivre.type}
                            onChange={e => setNouveauLivre({...nouveauLivre, type: e.target.value})} />
                    </div>
                    <div className="col-md-2 d-grid">
                        <button className="btn btn-primary" onClick={modeEdition ? mettreAjourLivre : ajouterLivre}>
                            {modeEdition ? "Mettre à jour" : "Ajouter"}
                        </button>

                        {modeEdition && <button className="btn btn-danger" onClick={annulerEdition}>Annuler</button>}
                    </div>
                </div>
            </div>

            <h2>📖 Liste des livres</h2>
            <table className="table table-bordered table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>Titre</th>
                        <th>Auteur</th>
                        <th>Code</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {livres.map(livre => (
                        <tr key={livre.id}>
                            <td>{livre.titre}</td>
                            <td>{livre.auteur}</td>
                            <td>{livre.code}</td>
                            <td>{livre.type}</td>
                            <td>
                                <button className="btn btn-danger btn-sm" onClick={() => supprimerLivre(livre.id)}>Supprimer</button>
                                <button className="btn btn-primary btn-sm" onClick={() => {
                                    setNouveauLivre(livre);
                                    setLivreEnEdition(livre);
                                    setModeEdition(true);
                                }}>Modifier</button>
                            </td>
                        </tr>  
                    ))}
                </tbody>
            </table>
        </div>
    ); 
}

export default LivreManagerBootstrap;