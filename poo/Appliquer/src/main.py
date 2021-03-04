from blog import *

###############################################################################
# Implémentation du menu
###############################################################################
if __name__ == '__main__':
    print("---- Bienvenue dans le Low-Tech Blog! ----")

    while True:
        print(f"Qui va là ?")
        print(f"({', '.join([f'{u}: {r.value}' for u, r in USERS.items()])} – autre chose pour quitter)")
        user_name = input("> ")

        if user_name not in USERS:
            print("Y a rien à voir ici, circulez !")
            exit(1)

        # Récupère la bonne instance de User pour le nom entré
        current_user = get_user(user_name)

        print(f"Salut, {current_user.name} ! Que veux-tu faire aujourd'hui ?")

        # Liste les actions disponibles pour l'utilisateur courant
        # -> celles qui ne nécessitent aucune permission et celles que `current_user` a le droit d'effectuer
        possible_actions = [a for a in ACTIONS if a.get("permission") is None or current_user.can(a["permission"])]

        while True:
            # Affiche les actions disponibles à l'utilisateur
            for idx, action in enumerate(possible_actions):
                print(f"{idx + 1} -> {action['label']}")

            # Récupère le choix de l'utilisateur et exécute la fonction liée au choix
            action_idx = int(input("> ")) - 1

            # On recommence si le choix est invalide
            if 0 <= action_idx >= len(possible_actions):
                continue

            # Récupère l'action de l'élément de menu choisi
            action = possible_actions[action_idx]["action"]

            # "Déconnexion" si aucune action : on retourne vers la boucle infinie de premier niveau
            if action is None:
                break

            # Exécute l'action choisie
            action()