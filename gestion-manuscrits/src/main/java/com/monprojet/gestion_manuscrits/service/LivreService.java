package com.monprojet.gestion_manuscrits.service;

import com.monprojet.gestion_manuscrits.model.Livre;
import com.monprojet.gestion_manuscrits.repository.LivreRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LivreService {

    private final LivreRepository livreRepository;

    public LivreService(LivreRepository livreRepository) {
        this.livreRepository = livreRepository;
    }

    public List<Livre> getAllLivres() {
        return livreRepository.findAll();
    }

    public Optional<Livre> getLivreById(Long id) {
        return livreRepository.findById(id);
    }

    public Livre createLivre(Livre livre) {
        return livreRepository.save(livre);
    }

    public void deleteLivre(Long id) {
        livreRepository.deleteById(id);
    }
}
