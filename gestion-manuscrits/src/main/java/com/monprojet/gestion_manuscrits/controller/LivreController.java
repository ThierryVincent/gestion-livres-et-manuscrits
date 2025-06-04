package com.monprojet.gestion_manuscrits.controller;

import com.monprojet.gestion_manuscrits.model.Livre;
import com.monprojet.gestion_manuscrits.service.LivreService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/livres")
@CrossOrigin(origins = "*") // pour pouvoir tester avec Postman ou React
public class LivreController {

    private final LivreService livreService;

    public LivreController(LivreService livreService) {
        this.livreService = livreService;
    }

    @GetMapping
    public List<Livre> getAllLivres() {
        return livreService.getAllLivres();
    }

    @GetMapping("/{id}")
    public Livre getLivreById(@PathVariable Long id) {
        return livreService.getLivreById(id).orElse(null);
    }

    @PostMapping
    public Livre createLivre(@RequestBody Livre livre) {
        return livreService.createLivre(livre);
    }

    @DeleteMapping("/{id}")
    public void deleteLivre(@PathVariable Long id) {
        livreService.deleteLivre(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Livre> updateLivre(@PathVariable Long id, @RequestBody Livre livreModifie) {
        return livreService.getLivreById(id)
                .map(livre -> {
                    livre.setTitre(livreModifie.getTitre());
                    livre.setAuteur(livreModifie.getAuteur());
                    livre.setCode(livreModifie.getCode());
                    livre.setType(livreModifie.getType());
                    return ResponseEntity.ok(livreService.createLivre(livre));
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
