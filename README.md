Fichiers de configuration :

package.json définit les scripts (npm run dev lance Vite, npm run build compile puis déploie) et les dépendances (react, lucide-react, etc.)
raw.githubusercontent.com
.

vite.config.ts configure Vite avec la base /Home‑page/ pour le déploiement GitHub Pages
raw.githubusercontent.com
.

tsconfig.json paramètre TypeScript.

metadata.json, tsconfig.json et .gitignore complètent la configuration.

Entrées et bootstrap :

index.html inclut Tailwind CSS et un import map pour React, définit un <div id="root"> et charge le fichier d’entrée index.tsx
raw.githubusercontent.com
.

index.tsx instancie le composant <App /> dans ce div
raw.githubusercontent.com
.

Structure de l’application :

App.tsx gère la navigation interne : il maintient l’état activePage basé sur un enum PageType (HOME, PROJECTS, TUTORIALS, ABOUT) défini dans types.ts
raw.githubusercontent.com
raw.githubusercontent.com
 et affiche le composant correspondant via renderPage()
raw.githubusercontent.com
.

Le composant Sidebar.tsx liste les sections (Home, Projects, Tutorials, About) et gère l’ouverture/fermeture sur mobile
raw.githubusercontent.com
.

GlassModal.tsx fournit une fenêtre modale réutilisable
raw.githubusercontent.com
.

Pages :

pages/Home.tsx est la page d’accueil avec la section héros, des cartes d’expertise et un teaser de projet
raw.githubusercontent.com
.

pages/Projects.tsx liste les projets et ouvre un modal détaillé ; il met en avant un projet d’analyseur de maïs
raw.githubusercontent.com
 et présente la pipeline (détection YOLOv8, classification MobileNet) dans un tableau
raw.githubusercontent.com
.

pages/Tutorials.tsx liste des articles et affiche un contenu détaillé en markdown dans un modal
raw.githubusercontent.com
.

pages/About.tsx présente un portrait, la stack technique et une timeline de carrière
raw.githubusercontent.com
raw.githubusercontent.com
.

Données :

constants.tsx contient les tableaux PROJECTS, TUTORIALS et TIMELINE qui alimentent l’interface. Un des projets est déjà dédié à un analyseur de maïs avec YOLOv11 et MobileNet
