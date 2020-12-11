git -init --> to create git repository
git -status --> to view changes to your project
git add --> to add files to staging area
git commit --> to commit with files from staging area
git log --> to view recent commits

ls -a ~/.ssh --> to check if existing SSH key setup is there or not, need to run on git bash
showing id_rsa  id_rsa.pub  --> meaning SSH key setup is already there
eval $(ssh-agent -s) --> to check if SSH agent is running or not
 ssh -T git@github.com --> to test SSH conection with git
 git remote add origin git@github.com:debarghya01/react-course-expencify-app.git --> to tell local git repository that remote reposiotry is github repository
 git remote --> to check if it worked or not
 git remote -v --> push & fecth
git push -u origin main --> to push to github *****always check Github doc
