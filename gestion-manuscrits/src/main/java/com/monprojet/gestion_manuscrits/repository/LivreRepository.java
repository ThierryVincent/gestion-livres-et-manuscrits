package com.monprojet.gestion_manuscrits.repository;

import com.monprojet.gestion_manuscrits.model.Livre;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LivreRepository extends JpaRepository<Livre, Long> {
    // Tu peux ajouter des méthodes personnalisées ici plus tard
}
