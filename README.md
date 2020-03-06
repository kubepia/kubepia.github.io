# kubepia.github.io
> 문서 작성과 공개를 위한 Project
> Kubernetes관련된 기술정보 공유와 Asset을 제공하는 프로젝트임

## Join and Wrtie contents

> Use gitpages as organization : kubepia.github.io
> Assets' project in https://github.com/kubepia
> Page generated automatically using travis ci and git pages with branch 'master'
> use markdown in branch 'dev' which is default.

### How to write

#### Step01 : Clone
1. clone this repository with branch 'dev'
   ```sh
   git clone -o origin https://github.com/kubepia/kubepia.github.io.git
   cd kubepia.github.io
   git branch
   ```
2. make sure branch is 'dev'.\
   ![](./img/2020-03-06-16-17-50.png)

#### Step02 : Write/Modify
1. checkout branch to modify or add document in local only
  ```sh
  git checkout -b 20200305
  ```
2. create/modify document
3. commit
   ``` sh
   git add .
   git commit -m "describe changes"
   ```

#### Step03 : Merge with others' changes
1. checkout 'dev' : git checkout dev
2. update from remote : git pull origin dev
3. merge local change to 'dev': git merge 20200305
4. push : git push origin dev

#### Step04 : Confirm changes

### How to add nav item

1. Open /docs/.vuepress/config.js
2. goto item
  ![](./img/2020-03-06-16-24-20.png)
3. add name and link : { text: "DevOps", link: "/devops/overview" }
   1. text : display in nav menu
   2. link
      1. use directory default then '/[directory name]/'
      2. use page url : '/[directory]/[md filename without .md]/'
   
### How to add sidebar item

1. Open /docs/.vuepress/config.js
2. goto item
  ![](./img/2020-03-06-16-27-26.png)
3. add match url to nav bar : if devops is selected, then "/devops/"
4. add display name in title
5. children items : title & path in array under children
  ![](./img/2020-03-06-16-29-44.png)