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
5. Create a ***private*** empty GitHub remote repository with the same name as the folder then add the trainer as a collaborator
6. Git init with a `main` branch and configure the local folder, then push the `README.md` and `.gitignore` to `origin main`
7. Have a look at your remote repository and check that everything is okay
8. Create a new ***orphan*** local branch named `algorithmix-js`: `git checkout --orphan algorithmix-js`
9. Ignore local changes in the new branch: `git reset --hard`
10. Create a new subfolder named `algorithmix-js`
> [!IMPORTANT]
> At this stage, all the instructions here after are relative to the `algorithmix-js` repository subfolder
11. Add a `.gitignore` file at the root of the subfolder. Empty for Windows, Mac with given content:
```
# Ignore Mac users Desktop Services Store for custom properties:
**/.DS_Store
```
12. Create a new subfolder named `000-hw`
13. Create a new empty `run.js` file in the `000-hw` subfolder
14. Push the `run.js` and `.gitignore` to `origin algorithmix-js`
15. Have a look at your remote repository and check that everything is okay
16. Switch from one branch to the other in your local terminal and have a look at what happens graphically in your file explorer at the root of the repository
