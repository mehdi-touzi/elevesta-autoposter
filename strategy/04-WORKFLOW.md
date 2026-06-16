# 04 — Workflow de production : Claude × Higgsfield × AutoPoster

> L'objectif : produire **une vidéo cinématique par jour minimum**, seul, avec une qualité de studio. Voici la chaîne exacte.

```
IDÉE ──▶ SCRIPT (Claude) ──▶ STORYBOARD (Claude) ──▶ VIDÉO (Higgsfield) ──▶ MONTAGE/VOIX ──▶ AUTOPOSTER ──▶ ANALYSE ──▶ (boucle)
```

## Étape 1 — Idéation & script · **Claude**
Demande à Claude (en réutilisant ce repo comme contexte de marque) de générer par lots :
- 10 angles viraux par pilier (Énergie / Esprit / Corps / Durée).
- Pour chaque : un **hook de 3 secondes** (la phrase d'ouverture qui stoppe le scroll), le script (20–40 s), et une **micro-action finale**.
- Vérification : chaque affirmation = une source réelle (Claude liste les études/sources).

**Prompt-type Claude :**
> « Tu es le directeur éditorial d'Elevesta (longévité rendue belle, ton calme/premium, cf. `strategy/02-BRANDING.md`). Donne-moi 10 vidéos sur le pilier ÉNERGIE. Pour chacune : hook 3 s, script 30 s en plans numérotés, micro-action finale, et 1 source vérifiable. Pas de promesse miracle, pas de conseil médical. »

## Étape 2 — Storyboard / prompts visuels · **Claude → Higgsfield**
Claude convertit chaque script en **prompts plan par plan** pour Higgsfield, en imposant la DA Elevesta (golden hour, mouvements lents nobles, étalonnage chaud, Soul ID récurrent).

## Étape 3 — Réalisation · **Higgsfield AI**
- **Soul ID** : définis UNE fois le « Guide Elevesta » (silhouette élégante intemporelle) → réutilise-le partout pour la cohérence de marque.
- **Cinema Studio 3.5** : applique les mouvements (dolly, crane, crash zoom réservé aux punchlines).
- Économie de crédits : modèles « illimités » du plan pour le volume, crédits premium (Veo 3 / Sora 2) **uniquement** sur le hero shot d'ouverture.

## Étape 4 — Montage, voix & sous-titres
- Assemble les plans, ajoute voix off (cohérente avec la marque), musique signature, sous-titres dorés Cormorant sur les phrases-clés.
- Format vertical 9:16 prioritaire (TikTok/Reels/Shorts).

## Étape 5 — Diffusion · **Elevesta AutoPoster**
- Publication automatisée via l'API TikTok (ton infra existante), planifiée, multi-comptes.
- Réplication multi-langues : le même montage, voix/sous-titres EN, posté sur le compte anglophone.
- **Appel à l'action systématique** vers la newsletter « Le Protocole » (capture d'audience que tu possèdes).

## Étape 6 — Analyse & boucle · **Claude**
- Exporte les stats (rétention 3 s, vues, watch time).
- Claude identifie les hooks/formats gagnants → on duplique et décline les gagnants, on coupe les perdants.

---

## Cadence cible
| Semaine | Production |
|---|---|
| Démarrage | Batch de 15–20 vidéos d'avance (1 grosse session) |
| Régime | 1 session de scripts/sem (Claude) → 1 session de réalisation/sem (Higgsfield) → AutoPoster diffuse au quotidien |

Une à deux demi-journées par semaine suffisent à alimenter une publication quotidienne. **C'est tout l'intérêt du pipeline IA.**

---

## Règles qualité (non négociables)
1. **Le hook d'abord.** Si les 3 premières secondes n'accrochent pas, le reste ne compte pas.
2. **Cohérence visuelle.** Même Soul ID, même étalonnage, même typo — à chaque vidéo. La reconnaissance = la marque.
3. **Jamais de fausse promesse santé.** Crédibilité = actif long terme. Disclaimer toujours présent.
4. **Toujours une porte de sortie possédée** (newsletter/Cercle) dans chaque vidéo.
