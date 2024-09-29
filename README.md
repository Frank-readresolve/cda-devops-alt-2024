# CDA DevOps Alt 2024
A single repository with all the individual work during the training, with examples and exercises. The `main` branch contains common instructions and considerations. Then each topic has its own branch with a single parent folder, branch and parent folder have the same name. 

## Getting started
1. Create a local folder named `simplon-cda-exercises`
2. Open the folder with VSCode
3. Add a `README.md` file at the root of the folder with the first-level title describing the repository
4. Add a `.gitignore` file at the root of the folder with given content:
```
# Ignore everything:
*

# But not:
!.gitignore
!README.md
```
5. Create a ***private*** empty GitHub remote repository with the same folder name then add the trainer as a collaborator
6. Git init with a `main` branch and configure the local folder, then push the `README.md` and `.gitignore` to `origin main`
7. Have a look at your remote repository and check that everything is okay
8. Create a new ***orphan*** local branch named `algorithmix-js`: `git checkout --orphan algorithmix-js` (`git reset --hard` ?)
9. Create a new subfolder named `algorithmix-js`
> [!IMPORTANT]
> At this stage, all the instructions here after are relative to the `algorithmix-js` folder
10. Add a `.gitignore` file at the root of the folder. Empty for Windows, Mac with given content:
```
# Ignore Mac users Desktop Services Store for custom properties:
**/.DS_Store
```
11. Create a new folder named `000-hw`
12. Create a new empty `run.js` file in the `000-hw` folder
13. Push the `run.js` and `.gitignore` to `origin algorithmix-js`
14. Have a look at your remote repository and check that everything is okay
15. Switch from one branch to the other in your local terminal
